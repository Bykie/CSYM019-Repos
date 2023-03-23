function loadPage () {
    var element = document.getElementById ('circle');
        element.addEventListener ('click', myClickEvent);
        element.style.opacity = 1;
}

function myInterval () {
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity);

    element.style.opacity = circleOpacity - 0.1;
}
function myClickEvent () {
    setInterval(myInterval, 10);
}

document.addEventListener ('DOMContentLoaded', loadPage);