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

window.onload = showParameters;
