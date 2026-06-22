
let passwordlength = 10;
let includeLetters = true;
let includeNumbers = false;
let includeSymbols = false;


const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const symbols = '&%$#@!?';

function generatePassword() {
  let charSet = '';
  let password = '';

  if(includeLetters) charSet += letters;
  if(includeNumbers) charSet += numbers;
  if(includeSymbols) charSet += symbols;

  for(let i = 0; i < passwordlength; i++) {
    const randomizer = Math.floor(Math.random() * charSet.length);
    password += charSet[randomizer];
  }
  return password;
}

console.log(generatePassword());








