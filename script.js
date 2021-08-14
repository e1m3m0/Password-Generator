// Assignment code here


// generatePassword function
var generatePassword = function() {

    // variable for generatePassword function
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "0123456789";
    var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var chars = "";
    var passwrd = "";

    // Questions to determine criteria
    // Password length prompt
    var passwordLenght = prompt("How long does your password needs to be? Choose a number between 8 and 128 then click OK.");

    if (passwordLenght === null || passwordLenght === "" || isNaN(passwordLenght)) {
        alert("It needs to be a number between 8 and 128, please try again!");
        return generatePassword();
    } else if (passwordLenght > 128 || passwordLenght < 8) {
        alert("Between 8 and 128, please try again!");
        return generatePassword();
    }

    // Determines if lower case letters need to be included
    var caseLower = confirm("Does your password need lower case letters? Click 'OK' to confirm and 'Cancel' to decline.");

    if (caseLower) {
        chars = lower;
        alert("Your password will include lower case letters.");
    } else {
        alert("Understand!, no lower case letters.");
    }

    // Determines if upper case letters need to be included
    var caseUpper = confirm("Does your password need UPPER case letters? Click 'OK' to confirm and 'Cancel' to decline.");

    if (caseUpper) {
        chars = chars += upper;
        alert("Your password will include UPPER case letters. Click 'OK' to confirm and 'Cancel' to decline.");
    } else {
        alert("As you wish, no UPPER case letters.");
    }

    // Determines if numbers need to be included
    var critNumbers = confirm("Does your password need numbers? Click 'OK' to confirm and 'Cancel' to decline.");

    if (critNumbers) {
        chars = chars += number;
        alert("It will also include numbers");
    } else {
        alert("I get it, I will not include numbers.");
    }

    // Determines if special characters need to be included
    var critSpecial = confirm("Does your password need special characters? Click 'OK' to confirm and 'Cancel' to decline.");

    if (critSpecial) {
        chars = chars += special;
        alert("Absolutely, It will have special characters.");
        alert("TA-DA! Thank you for choosing this Password Generator. Now click OK to see your password!");
    } else {
        alert("I suppose, no special charaters then.");
        while (!caseLower && !caseUpper && !critNumbers && !critSpecial) {
            alert("Wait!!! You did not select at least one criteria for the password. Lets take you back to the begining.");
            return generatePassword();
        }
        alert("Voila! Thank you for choosing this Password Generator. Now click OK to see your password!");
    }



    // for loop to generate random characters base on prompts and confirms above
    for (var i = 0; i < passwordLenght; i++) {
        passwrd += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Returns password generated to function
    return passwrd;
};

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