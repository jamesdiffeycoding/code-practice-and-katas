/* Description ---------------------------------------- */
/* After becoming famous, CodeBots decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms, each cell containing an integer - the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots.
Help the bots calculate the total price of all the rooms that are suitable for them.
Example
For matrix = [[0, 1, 1, 2], 
            [0, 5, 0, 0], 
            [2, 0, 3, 3]]```
the output should be `9`.

 Here's the rooms matrix with unsuitable rooms marked with 'x':
[[x, 1, 1, 2], [x, 5, x, x], [x, x, x, x]]``` Thus, the answer is 1 + 5 + 1 + 2 = 9.

Input/Output
[input] 2D integer array matrix

2-dimensional array of integers representing a rectangular matrix of the building.

Constraints:
1 ≤ matrix.length ≤ 10,
1 ≤ matrix[0].length ≤ 10,
0 ≤ matrix[i][j] ≤ 100.
[output] an integer

*/

/* Solution Example ----------------------------------- */
// using nested for loops
function matrixElementsSum(matrix) {
  let hauntedCols = [];
  let price = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!hauntedCols.includes(j)) {
        if (matrix[i][j] == 0) {
          hauntedCols.push(j);
        } else {
          price += matrix[i][j];
        }
      }
    }
  }
  return price;
}

// use two reducers
const matrixElementsSum = (matrix) =>
  matrix.reduce(
    // accumulate through each row
    (accum, val, idx) =>
      accum + // reduce each individual row to a single value
      val.reduce(
        (accum, val, i) =>
          accum + val * matrix.slice(0, idx + 1).every((val) => val[i] !== 0), // only adds the value if no "0" values thus far
        0
      ),
    0
  );

/* Tests ---------------------------------------------- */

// var matrix=[
// [0,1,1,2],
// [0,5,0,0],
// [2,0,3,3]]
// Test.assertEquals(matrixElementsSum(matrix),9)

// var matrix=[
// [1,1,1,0],
// [0,5,0,1],
// [2,1,3,10]]
// Test.assertEquals(matrixElementsSum(matrix),9)

// var matrix=[
// [1,1,1],
// [2,2,2],
// [3,3,3]]
// Test.assertEquals(matrixElementsSum(matrix),18)

// var matrix=[[0]]
// Test.assertEquals(matrixElementsSum(matrix),0)
