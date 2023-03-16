function clickCommand () {
    var element = document.getElementById ('Greatness');
    alert(element.value);

}

function myLoadFunction () {
    var element = document.getElementById ('mybutton');
        element.addEventListener ('click', clickCommand);
}

document.addEventListener ('DOMContentLoaded', myLoadFunction);