/* Description ---------------------------------------- 
We need to sum big numbers and we require your help (BigInt is not allowed).

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

/* Solution Example ----------------------------------- */
// using reduce
function add(a, b) {
  //   reverse number order for addition
  let ara = a.split("").reverse();
  let arb = b.split("").reverse();

  // pad shorter number
  if (ara.length < arb.length) {
    ara = ara.join("").padEnd(arb.length, "0").split("");
  } else arb = arb.join("").padEnd(ara.length, "0").split("");

  // add numbers with carry over values
  let carry = 0;
  let nStr = ara.reduce((acc, value, i) => {
    const na = Number(value);
    const nb = Number(arb[i]);
    const totalWithCarry = na + nb + carry;
    let addition = 0;
    if (totalWithCarry >= 10) {
      addition = totalWithCarry.toString()[1];
      carry = Number(totalWithCarry.toString()[0]);
    } else {
      addition = totalWithCarry.toString();
      carry = 0;
    }
    return addition + acc;
  }, "");

  // add any remaining carry over
  if (carry !== 0) return carry.toString() + nStr;

  return nStr;
}

// for loop version
function add(a, b) {
  let ara = a.split("").reverse();
  let arb = b.split("").reverse();
  if (ara.length < arb.length) {
    ara = ara.join("").padEnd(arb.length, "0").split("");
  } else arb = arb.join("").padEnd(ara.length, "0").split("");
  let nStr = "";
  let carry = 0;

  for (let i = 0; i < ara.length; i++) {
    const na = Number(ara[i]);
    const nb = Number(arb[i]);
    const totalWithCarry = na + nb + carry;
    let addition = 0;
    if (totalWithCarry >= 10) {
      addition = totalWithCarry.toString()[1];
      carry = Number(totalWithCarry.toString()[0]);
    } else {
      addition = totalWithCarry.toString();
      carry = 0;
    }
    nStr = addition + nStr;
  }
  if (carry !== 0) return carry.toString() + nStr;
  return nStr;
}

/* Tests ---------------------------------------------
describe("Add two numbers", function(){
  it("should pass basic tests", function() {
    Test.assertEquals(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
    Test.assertEquals(add("888", "222"), "1110");
    Test.assertEquals(add('2345678', '3456789'), "5802467")

    Test.assertEquals(add("1", "1"), "2");
    Test.assertEquals(add("123", "456"), "579");
    Test.assertEquals(add("1372", "69"), "1441");
    Test.assertEquals(add("12", "456"), "468");
    Test.assertEquals(add("101", "100"), "201");
  });
});








*/
