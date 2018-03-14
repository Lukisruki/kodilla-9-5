

var buttons = document.getElementsByClassName("button");

//console.log(buttons);

var btnLength = buttons.length;

for (var i = 0; i < btnLength; i++) { 
    var buttonText =  buttons[i].innerText;
    alert(buttonText);
} 