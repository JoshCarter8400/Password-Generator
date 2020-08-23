// These are the arrays for the selection characters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ];
var symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", "/", ";", "@", "?", "]", "|", "`"];
var char = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", resetStart);

// This function is for when they choose invalid number choice twice they would be brought back to select valid choice
function resetStart() {
    char = []
    writePassword();
}

// This is the function that generates the random password through a series of prompts 
function generatePassword() {
    // The if statements below are to ensure that they choose a password that is between 8-128 characters and if they don't it brings them back to the beginning and also to make sure that they choose a number for the length 
    var passLength = parseInt(prompt("Please choose a length of your password that is at least 8 character long and no more than 128."));
    if (passLength < 8) {
        alert("Please choose a password longer than 8 Characters");
        return generatePassword();
    }
    if (passLength > 128) {
        alert("Please choose a password less than 128 Characters");
        return generatePassword();
    }
    if (isNaN(passLength)) {
        alert("Please select a number.");
        return generatePassword();
    }

    // These variables provide the choices of what they would like to have in their password
    var passUpper = confirm("Would you Like uppercase letters.");
    var passLower = confirm("Would you Like lowercase letters.");
    var passNumber = confirm("Would you Like numbers.");
    var passSymbol = confirm("Would you like special characters.");
    var userChoices = [];
    // The if statement below is to make sure that they make at least one selection of the characters 
    if (!passUpper && !passLower && !passNumber && !passSymbol) {
        alert("Please choose at least one selction for character.")
        return null;
    }
    //The 4 if statements below is where I concatenated the 4 arrays from the top into the userChoices array 
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
    // This for loop is where we loop through the userchoices array and provide the random password
    for (var i = 0; i < passLength; i++) {
        var randomNum = Math.floor(Math.random() * userChoices.length);
        var character = userChoices[randomNum];
        console.log(character);
        // This is where we push the var chracter into the empty array at the top char 
        char.push(character);

    }
    // This is how the paassword is displayed onto the screen
    return char.join("");

}