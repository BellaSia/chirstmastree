const rbgcolor = document.getElementById("pasko");

function lights() {

    let redlights = Math.floor(Math.random() * 255);
    let greenlights = Math.floor(Math.random() * 255);
    let bluelights = Math.floor(Math.random() * 255);
    let allLights = "rgb(" + redlights + ", " + greenlights + ", " + bluelights + ")";

    rbgcolor.style.color = allLights;
    document.getElementById("colorname").textContent = allLights;
}
function start() {
    colors = setInterval(lights, 500);
}

function stop() {
    clearInterval(colors);
}
