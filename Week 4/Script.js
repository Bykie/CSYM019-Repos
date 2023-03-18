// alert ('Script has loaded')
// var Variablename = 'Chibuike';
// alert('Variablename');

// var num1 = 5;
// var num2 = 6;

// var num3 = num1 + num2;

// alert (num3);

// Using a function

// function scriptLoaded () {
//     alert ('Script Loaded');
// }

// function addition () {
//     var num1 = 5;
//     var num2 = 7;
//     var num3 = num1 + num2;

//     alert (num3);
// }

// scriptLoaded();
// addition();

// Using a function - Exercise 1, 3 and 4

function print5 () {
    //alert(1);
    console.log(1);
    //alert(2);
    console.log(2);
    //alert(3);
    console.log(3);
    //alert(4);
    console.log(4);
    //alert(5);
    console.log(5);
}

function myLoadFunction () {
    var element = document.getElementById('pageheading');
element.firstChild.nodeValue = 'Chibuike Ibeabuchi';

    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'MSc. Computing (Internet Technology and Security)'
}

document.addEventListener('DOMContentLoaded', myLoadFunction);
print5();
print5();