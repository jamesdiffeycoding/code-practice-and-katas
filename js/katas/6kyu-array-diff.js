console.log("RUNNING: 6kyu-Array.diff.js");

/* Description ---------------------------------------- */
// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

// Examples
// If a = [1, 2] and b = [1], the result should be [2].

/* Solution Example ----------------------------------- */
// Solve the problem using the some method in a for loop.

function arrayDiff(a, b) {
  let values = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.some((value) => value === a[i])) {
      values.push(a[i]);
    }
  }
  return values;
}

// Improve it using filter and some
function arrayDiff2(a, b) {
  return a.filter((value) => !b.some((element) => element === value)); // check if an element from the first array is (!) in the second array
}

// Use filter and includes
function arrayDiff3(a, b) {
  return a.filter((value) => !b.includes(value));
}

// use filter and indexOf
function arrayDiff4(a, b) {
  return a.filter(function (value) {
    return b.indexOf(value) === -1;
  });
}

/* Tests ---------------------------------------------- */

console.log(JSON.stringify(arrayDiff([1, 2], [1])) === JSON.stringify([2]));
console.log(JSON.stringify(arrayDiff([1, 2, 2], [2])) === JSON.stringify([1]));
console.log(JSON.stringify(arrayDiff2([1, 2], [1])) === JSON.stringify([2]));
console.log(JSON.stringify(arrayDiff2([1, 2, 2], [2])) === JSON.stringify([1]));
console.log(JSON.stringify(arrayDiff3([1, 2], [1])) === JSON.stringify([2]));
console.log(JSON.stringify(arrayDiff3([1, 2, 2], [2])) === JSON.stringify([1]));
console.log(JSON.stringify(arrayDiff4([1, 2], [1])) === JSON.stringify([2]));
console.log(JSON.stringify(arrayDiff4([1, 2, 2], [2])) === JSON.stringify([1]));
