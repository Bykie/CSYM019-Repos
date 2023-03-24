function changeColor () {
    var element = document.getElementById ('circle');
        element.style.color = 'blue';
}


function myLoadCommand () {
    var element = document.getElementById ('circle');
        element.addEventListener ('click', changeColor);
}

document.addEventListener ('DOMContentLoaded', myLoadCommand);