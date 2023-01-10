// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let passwordArray = [];
let passwordLen = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLen = prompt("How long will you want your password to be? The selected password length has to be at least 10 characters but no more than 64.");
  if (passwordLen >= 10 && passwordLen <= 64) {
    let lowerCaseConfirm = confirm(
      " Would you like to use lowercase letters? "
    );
    let upperCaseCofirm = confirm(" Would you like to use UpperCase letters? ");
    let specialCharactersConfirm = confirm(
      " Would you like to use Special Characters ? "
    );
    let numericCharacterConfirm = confirm(
      " Would you like to use numeric characters? "
    );
    while (
      !lowerCaseConfirm &&
      !upperCaseCofirm &&
      !specialCharactersConfirm &&
      !numericCharacterConfirm
    ) {
      alert("You need to select atleast one charcater type");
      lowerCaseConfirm = confirm(" Would you like to use lowercase letters? ");
      upperCaseCofirm = confirm(" Would you like to use UpperCase letters? ");
      specialCharactersConfirm = confirm(
        " Would you like to use Special Characters ? "
      );
      numericCharacterConfirm = confirm(
        " Would you like to use numeric characters? "
      );
    }
    if (lowerCaseConfirm===true) {
      passwordArray = passwordArray.concat(lowerCasedCharacters);
    }
    if (specialCharactersConfirm===true) {
      passwordArray = passwordArray.concat(specialCharacters);
    }
    if (numericCharacterConfirm===true) {
      passwordArray = passwordArray.concat(numericCharacters);
    }
    if (upperCaseCofirm===true) {
      passwordArray = passwordArray.concat(upperCasedCharacters);
    }
  } else if (passwordLen < 10 || passwordLen > 64 || isNaN(passwordLen)) {
    alert(
      "The password length has to be at least 10 characters but no more than 64."
    );
    getPasswordOptions();
  }
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  let password = "";

  getPasswordOptions();

  for (let i = 0; i < passwordLen; i++) {
    password += passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }

  return password;
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
