// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','|',';',':',',','.','<','>','?'];
var passwordLength;


// Write password to the #password input
function writePassword() {
  //Moved passwordCharacters so it will be empty before generatePassword is ran
  var passwordCharacters = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

  function generatePassword() {
    passwordLength = prompt ('How long will your password be?');
    //Checking if the password lenght is captured
    console.log(passwordLength);
    if (passwordLength === null) {
      return;
    } else if(passwordLength < 8 || passwordLength > 128) {
      alert('Please enter a number between 8 and 128');
      return;
    }
    //if the user clicks okay, this code will concat the various arrays to the passwordCharacters array so it can be used later in the code
    var lowerCaseYes = confirm ("Do you want to include lowercase letters?");
    if (lowerCaseYes){
      passwordCharacters = passwordCharacters.concat(lowerCase);
    }
    var upperCaseYes = confirm ("Do you want to include uppercase letters?");
    if (upperCaseYes) {
      passwordCharacters = passwordCharacters.concat(upperCase);
    }
    var numbersYes = confirm ("Do you want to include numbers?");
    if (numbersYes) {
      passwordCharacters = passwordCharacters.concat(numbers);
    }
    var specialYes = confirm ("Do you want to include special characters?");
    if(specialYes) {
      passwordCharacters = passwordCharacters.concat(specialCharacters);
    }
    console.log(passwordCharacters);

    //The randomPassword var will be the password that is generated and passed to the password var
    var randomPassword = '';
    //This for loop uses the number the user entered for their password length to randomly select the characters however many times
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * passwordCharacters.length);
      var randomCharacters = passwordCharacters[randomIndex];
      randomPassword += randomCharacters
      console.log(randomPassword);
    }

    return randomPassword;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
