function changeColor () {
    var element = document.getElementById ('circle');
        // element.style.color = 'blue';
        // element.style.opacity = 0.5;
        var circleOpacity = parseFloat(element.style.opacity);
        element.style.opacity = circleOpacity + 0.5;
}

function loadColor () {
    var element = document.getElementById ('circle');
    element.style.opacity = 0.5;
    element.addEventListener ('click', changeColor);
}


// function myLoadCommand () {
//     var element = document.getElementById ('circle');
//         element.addEventListener ('click', changeColor);
// }

document.addEventListener ('DOMContentLoaded', loadColor);