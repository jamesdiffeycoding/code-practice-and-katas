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
// My solution summary
// 1. Calculate relative starting positions while recording maxIndex value required
// 2. Calculate required width of array
// 3. Shift pads 'right' towards zero if needed, accounting for minRelativeIndex
// 4. Create response array using adjusted pads
// 5. Add head and tail to snake, check snake length to determine tail direction

// At first I made several mistakes.
// 1. I should have made better test cases to help me build the function. There was not a good variety of test cases.
// 2. I did not realise at first, based on the simpler test cases, that the point in the array with the largest value would not necessarily fill up an entire row.
// This led me down an ineffective path of trying to fill up the top and bottom parts of the snake separately, believing the widest row was the only row with a sure location.
// In fact, none of the rows 'x' values had a sure location and they all need to be calculated relative to eachother. It is not possible to place them immediately without knowing how many " " spaces to put for each.
// In the end, I realised that to my mind the relative padding calculation makes the most sense. It accomplishes a lot in a single for loop.

function pythonSnake(body) {
  //   Calculate relative starting positions while recording maxIndex value required
  let maxRelativeIndex = 0;
  let relativePads = [];

  for (let i = 0; i < body.length; i++) {
    let startLeft = i % 2 == 0; // snake starts left to right and then alternates
    if (startLeft) {
      // check whether to align on left or right of previous row
      if (i == 0) {
        relativePads[i] = 0; // start from 0
      } else {
        relativePads[i] = relativePads[i - 1];
      }
    } else {
      relativePads[i] = relativePads[i - 1] + body[i - 1] - body[i];
    }
    if (relativePads[i] + body[i] > maxRelativeIndex) {
      maxRelativeIndex = relativePads[i] + body[i];
    }
  }

  //   Calculate required width of array
  let minRelativeIndex = Math.min.apply(null, relativePads);
  let width = maxRelativeIndex - minRelativeIndex;

  //   Shift pads 'right' towards zero if needed, accounting for minRelativeIndex
  let adjustedPads = [];
  for (let i = 0; i < body.length; i++) {
    adjustedPads[i] = relativePads[i] - minRelativeIndex;
  }

  // Create response array using adjusted pads
  let arr = [];
  for (let i = 0; i < body.length; i++) {
    arr[i] = "x".repeat(body[i]);
    arr[i] = arr[i].padStart(body[i] + adjustedPads[i], " ");
    arr[i] = arr[i].padEnd(width, " ");
    arr[i] = arr[i].split("");
  }

  // Add head and tail to snake
  arr[0].splice(arr[0].indexOf("x"), 1, "H");

  // Check snake length to determine tail direction
  if (arr.length % 2 === 1) {
    arr[arr.length - 1].splice(arr[arr.length - 1].lastIndexOf("x"), 1, "T");
  } else {
    arr[arr.length - 1].splice(arr[arr.length - 1].indexOf("x"), 1, "T");
  }

  return arr;
}

// ChatGPTs solution below
function pythonSnake2(body) {
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
