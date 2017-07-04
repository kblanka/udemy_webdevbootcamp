var userAnswer = prompt("Are we there yet?");

while (userAnswer.indexOf("yes") === -1 && userAnswer.indexOf("yeah") === -1){
    var userAnswer = prompt("Are we there yet?");
}

alert("Yay we finally made it!");