function moveLeft () {
    var element = document.getElementById ('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 10 + 'px';
}

function moveUp () {
    var element = document.getElementById ('circle');
    var positionUp = element.offsetTop;
    element.style.top = positionUp - 10 + 'px';
}

function moveRight () {
    var element = document.getElementById ('circle');
    var positionRight = element.offsetLeft;
    element.style.left = positionRight + 10 + 'px';
}

function moveBottom () {
    var element = document.getElementById ('circle');
    var positionBottom = element.offsetTop;
    element.style.top = positionBottom + 10 + 'px';
}

function myKeyDown (event) {
    if (event.keyCode == 37) {
        setInterval (moveLeft, 1000);
    }
    if (event.keyCode == 38) {
        setInterval (moveUp, 1000);
    }
    if (event.keyCode == 39) {
        setInterval (moveRight, 1000);
    }
    if (event.keyCode == 40) {
        setInterval (moveBottom, 1000);
    }
}

function myLoadCommand () {
    // var element = document.getElementById ('circle');
        document.addEventListener ('keydown', myKeyDown);
    
}

document.addEventListener ('DOMContentLoaded', myLoadCommand);
