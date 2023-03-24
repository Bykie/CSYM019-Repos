function changePosition () {
    var element = document.getElementById ('circle');
    var positionTop = element.offsetTop;
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 100 + 'px';
}

function myKeyDown (event) {
    console.log(event.keycode);
}
function myLoadCommand () {
    var element = document.getElementById ('circle');
        document.addEventListener ('keydown', changePosition);
}

document.addEventListener ('DOMContentLoaded', myLoadCommand);