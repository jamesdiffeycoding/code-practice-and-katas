console.log("RUNNING: 6kyu-find-the-odd-int.js");

/* Description ---------------------------------------- */

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

/* Solution Example ----------------------------------- */
// Solve the problem using the reduce method in a while loop.

function digitalRoot(original) {
  let currentStr = original.toString();

  // check if the number is already a single digit
  while (currentStr.length !== 1) {
    let numericalTotal = 0;
    for (let i = 0; i < currentStr.length; i++) {
      numericalTotal += Number(currentStr[i]);
    }
    currentStr = numericalTotal.toString();
  }
  return Number(currentStr);
}

// Solve the problem by recursively calling the same function

function digitalRoot2(original) {
  return original < 10
    ? original
    : digitalRoot2(
        original
          .toString()
          .split("")
          .reduce((acc, curr) => Number(acc) + Number(curr), 0)
      );
}

/* Tests ---------------------------------------------- */

console.log(digitalRoot(16) === 7);
console.log(digitalRoot(942) === 6);
console.log(digitalRoot(132189) === 6);
console.log(digitalRoot2(16) === 7);
console.log(digitalRoot2(942) === 6);
console.log(digitalRoot2(132189) === 6);
