/* Description ---------------------------------------- 


Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

*/

/* Solution Example ----------------------------------- */

function lovefunc(flower1, flower2) {
  return (
    (flower1 % 2 == 0 && flower2 % 2 == 1) ||
    (flower1 % 2 == 1 && flower2 % 2 == 0)
  );
}

function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 1;
}

/* Tests ---------------------------------------------- */
describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(lovefunc(1, 4), true);
    assert.strictEqual(lovefunc(2, 2), false);
    assert.strictEqual(lovefunc(0, 1), true);
    assert.strictEqual(lovefunc(0, 0), false);
  });
});
