/* Description ---------------------------------------- 
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

/* Solution Example ----------------------------------- */
function order(words) {
  // Split into array
  let wordsArr = words.split(" ");

  // Order with a compare function
  let orderedArr = wordsArr.sort((a, b) => {
    let aNumber, bNumber;
    for (let i = 1; i < Infinity; i++) {
      if (a.indexOf(i.toString()) !== -1) {
        aNumber = i;
      } else {
        if (b.indexOf(i.toString()) !== -1) {
          bNumber = i;
        }
      }
      if (aNumber && bNumber) return aNumber - bNumber;
    }
  });

  // Join array to form string
  return orderedArr.join(" ");
}

function order(words) {
  var array = words.split(" ");
  var sortedArray = [];
  for (i = 0; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(" ");
}

function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

function order(words) {
  return words
    .split(" ")
    .reduce(
      (ordered, word) => ((ordered[word.match(/\d/) - 1] = word), ordered),
      []
    )
    .join(" ");
}

/* Tests ---------------------------------------------


const {assert} = require('chai');

describe("order", () => {
  it("should work corectly", () => {
    assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
    assert.strictEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
    assert.strictEqual(order(""), "", "empty input should return empty string" )
  });
});






*/
