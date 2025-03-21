/* Description ---------------------------------------- 
Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.
*/

/* Solution Example ----------------------------------- */
// A recursive solution
Array.prototype.sameStructureAs = function (other) {
  if (this.length !== other.length) {
    return false;
  }

  for (let i = 0; i < this.length; i++) {
    console.log("Index: ", i, this[i], other[i]);
    //     check this[i] and other[i] have same .isArrayvalue
    //     if arrays, check their children have same array values

    if (!Array.isArray(this[i]) && !Array.isArray(other[i])) {
      // both are not arrays
      continue;
    } else if (Array.isArray(this[i]) !== Array.isArray(other[i])) {
      // they dont match
      return false;
    } else {
      // both are arrays > recurisve call
      if (!this[i].sameStructureAs(other[i])) {
        return false;
      }
    }
  }
  return true;
};

// another
Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(other) || this.length != other.length) return false;

  for (var i = 0; i < this.length; ++i) {
    if (Array.isArray(this[i])) {
      if (!this[i].sameStructureAs(other[i])) {
        return false;
      }
    } else if (Array.isArray(other[i])) {
      return false;
    }
  }

  return true;
};

// another

Array.prototype.sameStructureAs = function (other) {
  return (
    isArray(other) &&
    this.length == other.length &&
    this.every(function (a, i) {
      var b = other[i];
      return isArray(a) ? a.sameStructureAs(b) : isArray(a) == isArray(b);
    })
  );
};

// another
Array.prototype.sameStructureAs = function (other) {
  return (
    this.length == other.length &&
    this.every(
      (x, i) =>
        isArray(x) == isArray(other[i]) &&
        (!isArray(x) || x.sameStructureAs(other[i]))
    )
  );
};

// another
Array.prototype.sameStructureAs = function (other) {
  const arrayMap = (arr) =>
    JSON.stringify(!Array.isArray(arr) ? 1 : arr.map(arrayMap));

  return arrayMap(this) === arrayMap(other);
};

/* Tests ---------------------------------------------

// comments explain the first solution 
const chai = require("chai");
const assert = chai.assert;

describe("Tests", () => {
  it("test", () => {
    assert.isTrue([1,1,1].sameStructureAs([2,2,2]), "[1,1,1] same as [2,2,2]"); // all are not arrays > skips for loop

    assert.isTrue([1,[1,1]].sameStructureAs([2,[2,2]]), "[1,[1,1]] same as [2,[2,2]]"); // 2nd index is array > recurisve call > gives true > outer loop gives true 
    assert.isNotTrue([1,[1,1]].sameStructureAs([[2,2],2]), "[1,[1,1]] not same as [[2,2],2]"); // not matchintg at first index > false
    assert.isNotTrue([1,[1,1]].sameStructureAs([2,[2]]), "[1,[1,1]] not same as [2,[2]]"); // not matching length at second index 
both give last index not equal to array > continue at final index, because Array.isArray(undefined) is false

    assert.isTrue([[[],[]]].sameStructureAs([[[],[]]]), "[[[],[]]] same as [[[],[]]]");
    assert.isNotTrue([[[],[]]].sameStructureAs([[1,1]]), "[[[],[]]] not same as [[1,1]]");

    assert.isTrue([1,[[[1]]]].sameStructureAs([2,[[[2]]]]), "[1,[[[1]]]] same as [2,[[[2]]]]");

    assert.isNotTrue([].sameStructureAs(1), "[] not same as 1");
    assert.isNotTrue([].sameStructureAs({}), "[] not same as {}");

    assert.isTrue([1,'[',']'].sameStructureAs(['[',']',1]), "[1,'[',']'] same as ['[',']',1]");

    assert.isNotTrue( [1,2].sameStructureAs([[3],3]), "[1,2] not same as [[3],3]" );
  });
});







*/
