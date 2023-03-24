function changeOpacity () {
    var element = document.getElementById ('circle');
    var circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity - 0.1;

    console.log(circleOpacity);
    console.log(element.style.opacity);
}

function myLoadCommand () {
    var element = document.getElementById ('circle');
        element.style.opacity = 0.7;
        element.addEventListener ('click', changeOpacity);

    var circleOpacity = element.style.opacity;
    console.log(circleOpacity);
}

document.addEventListener ('DOMContentLoaded', myLoadCommand);
myLoadCommand();