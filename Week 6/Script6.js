function changeOpacity () {
    var element = document.getElementById ('circle');
    var circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity - 0.01;
}

function myInterval () {
    setInterval(changeOpacity, 100);
}

function myLoadCommand () {
    var element = document.getElementById ('circle');
        element.style.opacity = 1.0;
        element.addEventListener ('click', myInterval);
}

document.addEventListener ('DOMContentLoaded', myLoadCommand);
myLoadCommand();