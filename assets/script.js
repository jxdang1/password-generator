// Assignment code here

//added arrays for each type of characters
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var nums = ["1","2","3","4","5","6","7","8","9"];
var symbols = ['"', " ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

//variables for user input
var addLowerCase;
var addUpperCase;
var addNumbers;
var addSymbols;
var passLength;

//variable to generate a new password

var newPassword;

//function to generate a new password

function generatePassword() {
  //when prompted, choose desired length of password
  passLength = prompt("Please enter the number of characters in your password (a number from 8 to 128).");

  //evaluates if the length of the password meets the requirements
  passLength = Number(passLength);

    if (passLength >= 8 && passLength <= 128) {

      //booleans for each type of characters
      addLowerCase = confirm("Would you like to add lowercase letters to your password?");
      addUpperCase = confirm("Would you like to add uppercase letters to your password?");
      addNumbers = confirm("Would you like to add numbers to your password?");
      addSymbols = confirm("Would you like to add symbols to your password?");
  
// 
     if (!addLowerCase && !addUpperCase && !addNumbers && !addSymbols) {
       alert("Please select at least one character type!");
      generatePassword();
    }

    }  else {
        alert("Please enter a valid number between 8 and 128");
        generatePassword();

  }

  

// variable that adds each set of characters to newPassword if it is selected and where it is stored
var passOverall = [];


//if selected, each type of characters from each set is added to the newPassword

if (addLowerCase) {
  passOverall = passOverall.concat(lowerCase);
} 

if (addUpperCase) {
  passOverall = passOverall.concat(upperCase);
}

if (addNumbers) {
  passOverall = passOverall.concat(nums);
}

if (addSymbols) {
  passOverall = passOverall.concat(symbols);
}


newPassword = "";

// added for loop that chooses a random character from the array and enters it for newPassword until it reaches the length it needs to be
for (var i= 0; i < passLength; i++) {
  newPassword += passOverall[Math.floor(Math.random() * passOverall.length)];
}

//returns the generated password into textbook
return newPassword;

}


// Assignment starter code:

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
