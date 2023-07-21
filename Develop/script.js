// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['abcdefghijklmnopqrstuvwxyz']
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var numbers = ['0123456789']
var specialCharacters = ['!@#$%^&*()-_=+[]{}|;:,.<>?']
var passwordLength;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    prompt ('How long will your password be?');
    confirm ("Do you want to include lowercase letters?");
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
