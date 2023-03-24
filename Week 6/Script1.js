function alertMessage () {
    alert ('The Button was pressed');
}


function myLoadCommand () {
    var element = document.getElementById ('circle');
        element.addEventListener ('click', alertMessage);
}

document.addEventListener ('DOMContentLoaded', myLoadCommand);