function Opacity () {
    var element = document.getElementById ('circle');
        element.style.opacity = 0.5;
}


function myLoadCommand () {
    var element = document.getElementById ('circle');
        element.addEventListener ('click', Opacity);
}

document.addEventListener ('DOMContentLoaded', myLoadCommand);