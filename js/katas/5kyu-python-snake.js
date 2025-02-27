console.log("RUNNING: 5kyu-python-snake.js");

/* Description ---------------------------------------- */
// Amirhossein is a painter who also loves pets. He has just bought a python snake, and would love to draw a picture of it. Now the snake is lying curled up, and Amirhossen wants to draw it using the smallest canvas possible.

// Write a function that draws the python according to the following rules:

// - The snake's picture should be returned as a rectangular matrix,
//   where 'H' is its head, 'T' is its tail, and 'x' is a part of its
//   body. Other elements of the matrix should be filled with ' '.
// - The snake's body consists of several parts. Their lengths are
//   stored in the array body. The first element of the array starts
//   with the snakes head and goes from left to right (snake's head to
//   the left), the second part goes from right to left, the third one
//   from left to right again, and so on.
// - The drawing shouldn't contain empty lines or empty columns
//   (i.e. rows or columns that consist only of ' ').
// Input/Output
// [input] integer array body

// The length of each part of pet's body.

// 2 <= body.length <= 100

// 1 <= body[i] <= 100

// [output] a string array

// Picture of the pet as a matrix of chars.

// Example
// For body = [1, 2, 3], the output should be:

// [
// [' ', 'H', ' '],
// ['x', 'x', ' '],
// ['x', 'x', 'T']
// ]
/* Solution Example ----------------------------------- */

function pythonSnake(body) {
  // We'll simulate the snake as a series of cells with (row, col) coordinates.
  // The head (first cell) and tail (last cell) will later be marked as 'H' and 'T'.
  let snakeCells = []; // store each snake cell as an object: { r, c }

  // Starting position.
  let currentRow = 0,
    currentCol = 0;

  // For each segment in the snake's body:
  for (let i = 0; i < body.length; i++) {
    const len = body[i];
    // Determine direction: even-index segments go left-to-right; odd-index go right-to-left.
    const leftToRight = i % 2 === 0;

    // For segments after the first, move down one row (vertical connection).
    if (i > 0) {
      currentRow++;
      // currentCol remains at the last cell's column from previous segment.
    }

    // Draw the current segment.
    for (let j = 0; j < len; j++) {
      // For left-to-right: increase column; for right-to-left: decrease column.
      const col = currentCol + (leftToRight ? j : -j);
      snakeCells.push({ r: currentRow, c: col });
    }

    // Update currentCol to the last cell's column of this segment.
    currentCol = currentCol + (leftToRight ? len - 1 : -(len - 1));
  }

  // Mark the head and tail.
  const snakeMap = new Map();
  for (let i = 0; i < snakeCells.length; i++) {
    const { r, c } = snakeCells[i];
    const key = r + "," + c;
    if (i === 0) {
      snakeMap.set(key, "H");
    } else if (i === snakeCells.length - 1) {
      snakeMap.set(key, "T");
    } else {
      snakeMap.set(key, "x");
    }
  }

  // Find the boundaries (min and max row and col) of the snake cells.
  let minRow = Infinity,
    maxRow = -Infinity,
    minCol = Infinity,
    maxCol = -Infinity;
  for (const { r, c } of snakeCells) {
    if (r < minRow) minRow = r;
    if (r > maxRow) maxRow = r;
    if (c < minCol) minCol = c;
    if (c > maxCol) maxCol = c;
  }

  const rows = maxRow - minRow + 1;
  const cols = maxCol - minCol + 1;

  // Create the canvas filled with spaces.
  const canvas = Array.from({ length: rows }, () => Array(cols).fill(" "));

  // Place snake cells into the canvas (adjusting coordinates).
  for (const [key, char] of snakeMap.entries()) {
    const [r, c] = key.split(",").map(Number);
    canvas[r - minRow][c - minCol] = char;
  }

  return canvas;
}

/* Tests ---------------------------------------------- */
console.log(
  pythonSnake([1, 2, 3]).toString() ==
    [
      [" ", "H", " "],
      ["x", "x", " "],
      ["x", "x", "T"],
    ].toString()
);

console.log(
  pythonSnake([1, 5, 2]).toString() ==
    [
      [" ", " ", " ", " ", "H"],
      ["x", "x", "x", "x", "x"],
      ["x", "T", " ", " ", " "],
    ].toString()
);

console.log(
  pythonSnake([5, 1, 4]).toString() ==
    [
      ["H", "x", "x", "x", "x", " ", " ", " "],
      [" ", " ", " ", " ", "x", " ", " ", " "],
      [" ", " ", " ", " ", "x", "x", "x", "T"],
    ].toString()
);
