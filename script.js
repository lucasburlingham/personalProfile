document.getElementById("submitButton").onclick = addElement;

function addElement() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Form Submitted");
    confetti();
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("div");
    document.body.insertBefore(newDiv, currentDiv);
}

$("#contactForm").ajaxForm({
    url: "https://cloud.golca.org/requests.php",
    type: 'post'
});


new TypeIt("#nameType", {
    speed: 70,
    loop: false,
    waitUntilVisible: true,
    afterComplete: function (step, instance) {
        instance.destroy();
    }
}).go();


new TypeIt("#aboutType", {
    lifeLike: false,
    startDelay: 1500,
    speed: 50,
    cursor: false,
    loop: false
}).go();
new TypeIt("#messageType", {
    lifeLike: true,
    startDelay: 2000,
    speed: 90,
    loop: false
}).go();
new TypeIt("#typeTitle", {
    lifeLike: true,
    speed: 90,
    loop: false
})

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function clip() {
    var copyText = document.getElementById("discordClip");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    console.log("Copied the text. Displaying alert now...");
    document.getElementById("discordAlert").style.display = "inherit";
}