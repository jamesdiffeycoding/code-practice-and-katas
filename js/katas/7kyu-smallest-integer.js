/* Description ---------------------------------------- */
// You're given a two-dimensional array of integers matrix. Your task is to determine the smallest non-negative integer that is not present in this array.

// Input/Output
// [input] 2D integer array matrix
// A non-empty rectangular matrix.

// 1 ≤ matrix.length ≤ 10

// 1 ≤ matrix[0].length ≤ 10

// [output] an integer
// The smallest non-negative integer that is not present in matrix.

// Example
// For

//   matrix = [  [0, 2],  [5, 1]] the result should be 3

// 0,1,2,(3)...5

/* Solution Example ----------------------------------- */
// Edge cases
// 1. If the matrix is empty, return 0
// 2. If the matrix is full, return the next number
// 3. If the matrix is not full, return the first number not in the matrix
// 4. If the matrix is full of negative numbers, return 0

function smallestInteger(matrix) {
  for (let i = 0; i < Infinity; i++) {
    if (matrix.flat().indexOf(i) === -1) {
      return i;
    }
  }
}

const smallestInteger = (matrix) => {
  let count = 0;
  while (matrix.flat().includes(count)) count++;
  return count;
};

function smallestInteger(matrix) {
  let num = 0;
  while (matrix.some((x) => x.indexOf(num) >= 0)) {
    num++;
  }
  return num;
}

function smallestInteger(m) {
  let t = [],
    i = 0;
  for (let x in m) t.push(...m[x]);
  //   note: the above makes t the equivolent of m.flat()
  while (true) {
    if (!t.includes(i)) return i;
    i++;
  }
}

function smallestInteger(matrix) {
  let arr = [...new Set(matrix.flat())].sort((a, b) => a - b); // stores only unique values
  return arr.includes(0)
    ? arr.find((e, i) => e > -1 && e + 1 !== arr[i + 1]) + 1 ||
        arr[arr.length - 1] + 1 // finds the first number e + 1 not in the array.
    : 0;
}

function smallestInteger(matrix) {
  let u = [].concat.apply([], matrix).sort((a, b) => a - b);
  if (u[u.length - 1] < 0) return 0;
  let diff = [...Array(u[u.length - 1] + 1).keys()].filter(
    (x) => u.indexOf(x) < 0
  );
  return diff.length == 0 ? u.pop() + 1 : diff[0];
}

/* Tests ---------------------------------------------- */
Test.assertEquals(
  smallestInteger([
    [0, 2],
    [5, 1],
  ]),
  3
);

Test.assertEquals(
  smallestInteger([
    [4, 5, 3, 21, 3, 8],
    [2, 2, 6, 5, 10, 9],
    [7, 5, 6, 8, 2, 6],
    [1, 4, 7, 8, 9, 0],
    [1, 3, 6, 5, 5, 1],
    [2, 7, 3, 4, 4, 3],
  ]),
  11
);

Test.assertEquals(
  smallestInteger([
    [4, 5, 3, -4, 3, 8],
    [2, 0, 6, 5, 4, 9],
    [7, 5, 6, 8, 2, 6],
    [1, 4, 7, 8, 9, 11],
    [1, 3, 10, 5, 5, 1],
    [12, 7, 3, 4, 4, 3],
  ]),
  13
);

Test.assertEquals(
  smallestInteger([
    [1, 2],
    [3, 4],
  ]),
  0
);

Test.assertEquals(
  smallestInteger([
    [0, 1],
    [2, 3],
  ]),
  4
);

Test.assertEquals(
  smallestInteger([
    [4, 5, 13, 0, 3],
    [2, 6, 5, 10, 9],
    [7, 5, -6, 8, 6],
    [1, 4, 7, 8, 9],
    [2, 3, 4, 44, 3],
  ]),
  11
);

Test.assertEquals(
  smallestInteger([
    [-1, 100, -1, 100],
    [100, -1, 100, -1],
    [-1, 100, -1, 100],
    [100, -1, 100, -1],
  ]),
  0
);

Test.assertEquals(
  smallestInteger([
    [-1, -1],
    [-1, -1],
  ]),
  0
);
