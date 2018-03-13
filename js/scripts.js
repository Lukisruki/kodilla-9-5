var buttons = document.getElementsByClassName("button");

//console.log(buttons);

var btnLength = buttons.length;
var btnOne = buttons[0].innerText;
var btnTwo = buttons[1].innerText;
var btnThree = buttons[2].innerText;

var buttonText = btnOne + btnTwo + btnThree;

for (var i = 0; i < btnLength; i++) { 
    alert(buttonText);
} 

