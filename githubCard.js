(function (v) {
    var o = "//cdn.jsdelivr.net/gh/lepture/github-cards@1.0.5/";
    var i, m = 0;
    var e = v.getElementsByTagName("meta");
    var b, w, p, A;
    for (i = 0; i < e.length; i++) {
        var t = e[i].getAttribute("name");
        var r = e[i].getAttribute("content");
        if (t === "gc:url") {
            b = r
        } else if (t === "gc:base") {
            o = r
        } else if (t === "gc:client-id") {
            w = r
        } else if (t === "gc:client-secret") {
            p = r
        } else if (t === "gc:theme") {
            A = r
        }
    }

    function a(e) {
        if (v.querySelectorAll) {
            return v.querySelectorAll("." + e)
        }
        var t = v.getElementsByTagName("div");
        var r = [];
        for (i = 0; i < t.length; i++) {
            if (~t[i].className.split(" ").indexOf(e)) {
                r.push(t[i])
            }
        }
        return r
    }

    function y(e, t) {
        return e.getAttribute("data-" + t)
    }

    function E(t) {
        if (window.addEventListener) {
            window.addEventListener("message", function (e) {
                if (t.id === e.data.sender) {
                    t.height = e.data.height
                }
            }, false)
        }
    }

    function n(e, t) {
        t = t || b;
        if (!t) {
            var r = y(e, "theme") || A || "default";
            t = o + "cards/" + r + ".html"
        }
        var i = y(e, "user");
        var a = y(e, "repo");
        var n = y(e, "github");
        if (n) {
            n = n.split("/");
            if (n.length && !i) {
                i = n[0];
                a = a || n[1]
            }
        }
        if (!i) {
            return
        }
        m += 1;
        var l = y(e, "width");
        var d = y(e, "height");
        var c = y(e, "target");
        var s = y(e, "client-id") || w;
        var u = y(e, "client-secret") || p;
        var f = "ghcard-" + i + "-" + m;
        var g = v.createElement("iframe");
        g.setAttribute("id", f);
        g.setAttribute("frameborder", 0);
        g.setAttribute("scrolling", 0);
        g.setAttribute("allowtransparency", true);
        var h = t + "?user=" + i + "&identity=" + f;
        if (a) {
            h += "&repo=" + a
        }
        if (c) {
            h += "&target=" + c
        }
        if (s && u) {
            h += "&client_id=" + s + "&client_secret=" + u
        }
        g.src = h;
        g.width = l || Math.min(e.parentNode.clientWidth || 400, 400);
        if (d) {
            g.height = d
        }
        E(g);
        e.parentNode.replaceChild(g, e);
        return g
    }
    var l = a("github-card");
    for (i = 0; i < l.length; i++) {
        n(l[i])
    }
    if (window.githubCard) {
        window.githubCard.render = n
    }
})(document);