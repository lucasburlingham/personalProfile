function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

new ClipboardJS('.btn');

function clip() {
    var copyText = document.getElementById("discordClip");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    console.log("Copied the text. Displaying alert now...");
    document.getElementById("discordAlert").style.display = "inherit";
}