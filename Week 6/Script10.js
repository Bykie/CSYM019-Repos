// var myVariable = 0;

// function myClickEvent () {
//     myVariable = myVariable + 1;
//     console.log (myVariable);
// }

// function myLoadEvent () {
//     document.addEventListener ('click', myClickEvent);
// }

// document.addEventListener('DOMContentLoaded', myLoadEvent);


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

var timer = 0;

function myKeyDown (event) {
    clearInterval (timer);
    if (event.keyCode == 37) {
        timer = setInterval (moveLeft, 100);
    }
    if (event.keyCode == 38) {
        timer = setInterval (moveUp, 100);
    }
    if (event.keyCode == 39) {
        timer = setInterval (moveRight, 100);
    }
    if (event.keyCode == 40) {
        timer = setInterval (moveBottom, 100);
    }
    if (event.keyCode == 32) {
        clearInterval(timer);
    }
}

function myLoadCommand () {
    // var element = document.getElementById ('circle');
        document.addEventListener ('keydown', myKeyDown);
    
}

document.addEventListener ('DOMContentLoaded', myLoadCommand);
