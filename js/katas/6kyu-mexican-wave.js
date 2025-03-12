/* Description ---------------------------------------- 
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

/* Solution Example ----------------------------------- */
function wave(str) {
  let arr = [];
  let word = str.toLowerCase().split("");
  for (let i = 0; i < str.length; i++) {
    let wordC = [...word];
    if (word[i] !== " ") {
      wordC[i] = wordC[i].toUpperCase();
      arr.push(wordC.join(""));
    }
  }
  return arr;
}

function wave(str) {
  let result = [];

  str.split("").forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(
        str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
      );
    }
  });

  return result;
}

const wave = (str) =>
  [...str]
    .map((s, i) => str.slice(0, i) + s.toUpperCase() + str.slice(i + 1))
    .filter((x) => x != str);

/* Tests ---------------------------------------------

const chai=require('chai')
const {assert} = chai;
chai.config.truncateThreshold = 0;

describe('Testing...', function(){
  it("Basic tests", () => {
      let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
      assert.deepEqual(wave("hello"), result, "Should return: '"+result+"'");

      result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
      assert.deepEqual(wave("codewars"), result, "Should return: '"+result+"'");

      result = [];
      assert.deepEqual(wave(""), result, "Should return: '"+result+"'");

      result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
      assert.deepEqual(wave("two words"), result, "Should return: '"+result+"'");

      result = [" Gap ", " gAp ", " gaP "];
      assert.deepEqual(wave(" gap "), result, "Should return: '"+result+"'");
  });
});








*/
