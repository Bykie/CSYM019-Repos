function updateHeading () {
    var element = document.getElementById ('pageheading');
        element.firstChild.nodeValue = 'New Heading';
}

function updateParagraph () {
    var element = document.getElementById ('paragraph');
        element.firstChild.nodeValue = 'New Paragraph';
}

function myLoadFunction () {
    var element = document.getElementById('pageheading');
        element.addEventListener ('click', updateHeading);

    var element = document.getElementById ('paragraph');
        element.addEventListener ('click', updateParagraph);
}
// document.addEventListener (' click', updateHeading);
// document.addEventListener (' click', updateParagraph);

document.addEventListener ('DOMContentLoaded', myLoadFunction);