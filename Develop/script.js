var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", () => {
  let passcode = "";
  let passwordLength = prompt("Enter a desired password length between 8-128", );
  while(passwordLength > 128 || passwordLength < 8){
    passwordLength = prompt("Please enter a length between 8-128", );
  }
  let includeLowerCase = prompt("Would you like lowercase chars in your password? y or n", )
  while(includeLowerCase === ""){
    includeLowerCase = prompt("Please enter y or n for lowercase letters", )
  }
  let includesUpperCase = prompt("Would you like uppercase letters in your password? y or n", )
  while(includesUpperCase === ""){
    includesUpperCase = prompt("Please enter y or n for uppercase letters", ) 
  }
  let numeric = prompt("Would you like to have any numbers in your password ? y or n", )
  while (numeric === "") {
    numeric = prompt("Please enter y or n for numerics", );
  }

  let includesSpecialChars = prompt("Would you like to have any special characters in your password? y or n", );
  while(includesSpecialChars === ""){
    includesSpecialChars = prompt("Please enter y or n for special chars", )
  }
  while(includesSpecialChars === 'n' && numeric === 'n' && includeLowerCase === 'n' && includesUpperCase === 'n'){
    alert("You must select at least one of the criterions for your password");
    includeLowerCase = prompt("Would you like lowercase chars in your password? y or n", );
    includesUpperCase = prompt("Would you like uppercase letters in your password? y or n", );
    numeric = prompt("Would you like to have any numbers in your password ? y or n", );
    includesSpecialChars = prompt("Would you like to have any special characters in your password? y or n", );
  }
  
  
  for(let i = 0; i < parseInt(passwordLength); i++){
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWQYZ".split("");
    const numbers  = "0123456789".split("");
    const specialChars = "!@#$%^&*".split("");
    if(includeLowerCase === 'y'){
      passcode += alphabet[Math.floor(Math.random() * 25)]
     
    } 

    if(includesUpperCase === 'y'){
      passcode += alphabetUpper[Math.floor(Math.random() * 25)]
      
    }

    if(numeric === 'y'){
      passcode += numbers[Math.floor(Math.random() * 9)]
    
    }

    if(includesSpecialChars === 'y'){
      passcode += specialChars[Math.floor(Math.random() * 7)]
  
    }

  }
  var generatedPassword = passcode.slice(0, passwordLength)
  document.querySelector("#password").innerHTML = generatedPassword
})

