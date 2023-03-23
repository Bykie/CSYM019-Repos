function changeColor () {
    var element = document.getElementById ('circle');
        element.style.color = 'blue';
        element.style.backgroundColor = 'white';
}


function myLoadCommand () {
    var element = document.getElementById ('circle');
        element.addEventListener ('click', changeColor);
}

document.addEventListener ('DOMContentLoaded', myLoadCommand);