// Assignment code here

// NOTE: I did not realize there was starter code so I initially made this from scratch. Therefore, there are virtually no commits.

// Used console.log to turn below string into an array for easier use:
// var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=_+";
// console.log(Array.from(char));

// Create function that is linked to the button on HTML;
function genPassword() {
  // Assign variables for the password, the characters, length of password;
  var passwordText = document.querySelector("#password");
  var char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+']
  var numChar = prompt("How many characters would you like your password to be?")
  var password = "";
  // To use when checking if password meets certain length requirement;
  var validInput = false;

  // Use while loop to check if input is a number greater than or equal to 8;
  while (!validInput) {
    if (isNaN(numChar) || numChar < 8 || numChar > 128) {
      alert("Please provide a numerical value for your password length. It should be at least 8 and no more than 128 characters long. \n" +
      "What you typed: " + numChar);
      numChar = prompt("How many characters would you like your password to be?");
    } else {
      // Use for loop to generate random character for each position in character as per defined length;
      for (let i = 0; i < numChar; i++) {
        var ranNum = Math.floor(Math.random() * 76);
        password += char[ranNum];
        }
        validInput = true;
    }
  }

  // Fill the box with the generated password;
  passwordText.value = password;
}

// Below is stuff that was part of the starter code:

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = genPassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
