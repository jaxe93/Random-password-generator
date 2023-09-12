// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");




//password characters
var passwordCombo = "";
var symbols = "!@#$%^&*";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";



generateBtn.addEventListener("click", writePassword);


// Write password to the #password input



function writePassword() {
  
  var Password = "";
  passwordText.value = password; 

  var lowercase1 = confirm("lowercase?")
  var uppercase1 = confirm("uppercase?") 
  var numbers1 = confirm("numbers?")
  var symbols1 = confirm("symbols?")
  var passLength1 = prompt("choose between 8-128")

   
  if (passLength1 < 8 || passLength1 > 128) {
    alert("Your password needs to be between 8-128");
    return "";
  }


  if (lowercase1) {
    passwordCombo += lowercase;
  }

  if (uppercase1) {
    passwordCombo += uppercase;
  }

   if (numbers1) {
    passwordCombo += numbers;
  }

   if (symbols1) {
    passwordCombo += symbols;
  }

  for (var i = 0; i < passLength1; i++) {
  
  Password += passwordCombo.charAt(Math.floor(Math.random() * passwordCombo.length));
  }
    passwordText.value = Password;
    
  }

