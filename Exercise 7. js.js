function clickCommand () {
    var element = document.getElementById ('input');
    var div = document.getElementById ('result');
    div.firstChild.nodeValue = element.value;

}

// function myLoadFunction () {
//     var element = document.getElementById ('mybutton');
//         element.addEventListener ('click', clickCommand);
// }

function myLoadFunction () {
    var element = document.getElementById('input');
        element.addEventListener('keyup', clickCommand);
}
document.addEventListener ('DOMContentLoaded', myLoadFunction);