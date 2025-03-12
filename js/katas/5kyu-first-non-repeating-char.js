/* Description ---------------------------------------- 
Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("");

† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.


*/

/* Solution Example ----------------------------------- */
function firstNonRepeatingLetter(s) {
  for (let i = 0; i < s.length; i++) {
    let slicedString = s.slice(0, i) + s.slice(i + 1);
    if (
      slicedString.indexOf(s[i].toLowerCase()) === -1 &&
      slicedString.indexOf(s[i].toUpperCase()) === -1
    ) {
      return s[i];
    }
  }
  return "";
}

function firstNonRepeatingLetter(s) {
  for (let i = 0; i < s.length; i++) {
    let slicedString = s.slice(0, i) + s.slice(i + 1);
    if (
      slicedString.indexOf(s[i].toLowerCase()) === -1 &&
      slicedString.indexOf(s[i].toUpperCase()) === -1
    ) {
      return s[i];
    }
  }
  return "";
}

/* Tests ---------------------------------------------
function firstNonRepeatingLetter(s) {
  for (let i = 0; i<s.length; i++) {
    let slicedString = s.slice(0, i) + s.slice(i+1)
    if (slicedString.indexOf(s[i].toLowerCase()) === -1 && slicedString.indexOf(s[i].toUpperCase()) === -1){
      return s[i]
    }    
  }
  return ""
}








*/
