// Assignment code here
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var chars = "";

var generatePassword = function() {
    var passwordLenght = prompt("How many characters? Choose between 8 and 128.");

    if (passwordLenght === null || passwordLenght === "" || isNaN(passwordLenght)) {
        window.alert("It needs to be a number between 8 and 128, please try again!");
        return generatePassword();
    } else if (passwordLenght > 128 || passwordLenght < 8) {
        window.alert("Between 8 and 128, please try again!");
        return generatePassword();
    }

    var caseSensitive = confirm("Does your password needs both a UPPER case and a lower case letter?");
    var critNumbers = confirm("Does your password needs numbers?");
    var critSpecial = confirm("Does your password needs an special character?");



    // for (let i = 0; i < passwordLenght; i++) {
    //   var c = Math.floor(Math.random()*
    //   const element = array[i];

    // }


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);