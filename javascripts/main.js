console.log('This would be the main JS file.');

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function showParameters() {
    var csh = getParameterByName("csh");
    document.getElementById("parameters").innerHTML += "<p>CSH=" + csh + "</p>";
}

function onMessage(e) {
    if (e.data && e.data.indexOf && e.data.indexOf("ANCILECSH") >= 0) {
        var txt1 = document.getElementById("text1");
        txt1.innerText = "Received " + e.data;
        e.source.postMessage("This is a message from github!", "https://jsbin.com");
    }
}

window.onload = function() {
    showParameters;
    window.addEventListener("message", onMessage);
}
