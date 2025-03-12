/* Description ---------------------------------------- 
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
 returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20
*/

/* Solution Example ----------------------------------- */
/* The pattern I used to solve this was that 
- if next number not there, add the number
- if next number is there, but not the one after, add the number
- else range is needed. Loop to find first value not there and add the appropriate range
- adjust index as appropriate depending on length of range.

*/
function solution(list) {
  let response = [];
  for (let i = 0; i < list.length; i++) {
    let currentV = list[i];
    //   add standalone number
    if (
      list[i + 1] !== currentV + 1 ||
      (list[i + 1] == currentV + 1 && list[i + 2] !== currentV + 2)
    ) {
      response.push(currentV);
    } else {
      //   add range
      for (let j = 1; j < Infinity; j++) {
        if (list.indexOf(currentV + j + 1) == -1) {
          response.push(`${currentV}-${currentV + j}`);
          i += j;
          break;
        }
      }
    }
  }
  return response.join(",");
}

/* ...
 */

function solution(list) {
  for (var i = 0; i < list.length; i++) {
    var j = i;
    while (list[j] - list[j + 1] == -1) j++;
    if (j != i && j - i > 1) list.splice(i, j - i + 1, list[i] + "-" + list[j]);
  }
  return list.join();
}

/* Below is the best solution I found

The pattern this solution used is that...
- if we're on the first value, just add the number and RT (return)
- otherwise if the prev and next values are in in sequence, we do nothing and RT (we are mid sequence and the start has been handled)
- otherwise if the prev value is in sequence but the next is not, we add the end of the range and RT (we reached the end of the range)
- otherwise, we append with a commar and add the next value/starting value

1. Rather than using continue or else if statements in a for loop, it takes advantage of early returns in a reduce function

*/
function solution(list) {
  return (
    list.reduce((acc, curr, i) => {
      if (i == 0) return curr.toString();
      if (list[i - 1] == curr - 1 && list[i + 1] == curr + 1) return acc; // we are mid sequence - just RT
      if (list[i - 2] == curr - 2 && list[i - 1] == curr - 1)
        return acc + "-" + curr; // range sufficient but next value not sequential means we reached end of reach - add range and RT
      return acc + "," + curr; // neither mid sequence nor at end of sequence > (add commar and standalone value)
    }),
    ""
  );
}

/* Tests ---------------------------------------------
describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.deepEqual(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")
  });
});

*/
