var generateBtn = document.querySelector("#generate");


var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ];
var symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", "/", ";", "@", "?", "]", "|", "`"];

// for (i = 0; i < upperCase.length; i++) {
//     console.log(upperCase[i]);
// }

// Get references to the #generate element


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var passLength = prompt("Please choose a password that is at least 8 character long and no more than 128.");
    var passUpper = confirm("Would you Like uppercase letters.");
    var passLower = confirm("Would you Like lowercase letters.");
    var passNumber = confirm("Would you Like numbers.");
    var passSymbol = confirm("Would you like special characters.");
    var userChoices = [];

    if (passUpper) {
        userChoices = userChoices.concat(upperCase);
    }

    if (passLower) {
        userChoices = userChoices.concat(lowerCase);
    }

    if (passNumber) {
        userChoices = userChoices.concat(number);
    }

    if (passSymbol) {
        userChoices = userChoices.concat(symbols);
    }

    for (var i = 0; i < passLength; i++) {
        var randomNum = Math.floor(Math.random() * userChoices.length);
        var character = userChoices[randomNum];
        console.log(character);
    }

    return ("password");
}