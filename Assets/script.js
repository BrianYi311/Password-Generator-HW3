// Assignment code here
function generatePassword() {

  var lengthselect = prompt("Please select a password length of at least 8 characters but not more than 128 characters.")

  var passwordLength= parseInt(lengthselect)

  if(isNaN(passwordLength)){
    window.alert("That is an incorrect length!")
    return("You must pick a length of at least 8 characters and no more than 128 characters.")
  } 

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("That is an incorrect length!")
    return("You must pick a length of at least 8 characters and no more than 128 characters.")
  }

  var incnumbers = window.confirm("Would you like to include numbers in your password?")
  var incsymbols = window.confirm("Would you like to include symbols in your password?")
  var incLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var incUppercase = window.confirm("Would you like to include uppercase letters in your password?")

  var numberset = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolset = ["!", "@", "#", "$", "%", "^", "&", "*", "+"]
  var lowercaseset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseset = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var finalpassword = []

  if (incnumbers === true) {
    finalpassword = finalpassword.concat(numberset)
  }

  if (incsymbols === true){
    finalpassword = finalpassword.concat(symbolset)
  }

  if (incLowercase === true){
    finalpassword = finalpassword.concat(lowercaseset)
  }

  if (incUppercase === true){
    finalpassword = finalpassword.concat(uppercaseset)
  }

  if (finalpassword.length === 0){
    finalpassword.concat(uppercaseset)
  }

  var generatedPassword = ""

  for(var i = 0; i < passwordLength; i++){
    generatedPassword += finalpassword [Math.floor(Math.random() * (finalpassword.length))]

  }

  return generatedPassword

}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

