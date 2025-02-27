# Numbers

## Traits

1. **Immutable** – Just like strings, number values are immutable in JavaScript. Any operation on a number creates a new value rather than modifying the original number.
1. **Floating-Point Precision** – JavaScript uses floating-point precision for all numbers, which can sometimes lead to rounding errors in calculations.
1. **Type** – All numbers in JavaScript are of the `number` type, whether they're integers or floating-point values.
1. **Inaccuracies**
   - Numbers are 64 bit values in JS. They are accurate to 15 significant figures and can only have up to 17 decimal places.
   - Mathematical operations with decimals should be avoided creatively (e.g. not `0.2 + 0.1 === 0.30004` but `(0.2 * 10 + 0.1 * 10 ) / 10`)
   - Any number larger than `Number.MAX_VALUE` will be treated as `Infinity`. Similarly, dividing a positive number by zero yields `Infinity`.
   - For integers larger than `Number.MAX_SAFE_INTEGER` (2^53 - 1), JavaScript has `BigInt`, which allows representation of arbitrarily large integers.

## Declarations

1. **Literals** like `10`, `3.14`, or `-5`.
1. **Non-decimal systems** (hexadecimal: `0x1A`, binary `0b1010`, octal `0o12`)
1. **Constructors** like `let num = new Number(10);`, which creates a `Number` object but is generally less common due to performance considerations.

## New Number Methods

1. **Value Conversion**:
   - `toFixed(digits)` – Rounds a number to a specified number of decimal places and returns it as a string.
   - `toPrecision(precision)` – Returns a string representing the number to a specified length, rounding as necessary.
   - `toExponential(digits)` – Returns the number in exponential (scientific) notation, rounded to the specified digits.

## Testing numbers

1. `Number.isInteger(value)` – Checks if the value is an integer.
1. `Number.isNaN(value)` – Checks if the value is `NaN`.
1. `Number.isFinite(value)` – Checks if the value is a finite number.
1. `Number.isSafeInteger(value)` – Checks if the value is a safe integer (within the safe integer range for JavaScript).

## The Numbers Object

1. `Number.POSITIVE_INFINITY` – Represents positive infinity.
2. `Number.NEGATIVE_INFINITY` – Represents negative infinity.
3. `Number.NaN` – Represents "Not-a-Number" (used to indicate invalid or undefined mathematical operations). Note that NaN !== NaN

## Math Methods

JavaScript also provides a global `Math` object that contains useful mathematical methods:

1. **Basic Operations**:

   - `Math.abs(value)` – Returns the absolute value of a number.
   - `Math.max(a, b, c, ...)` – Returns the largest of the numbers.
   - `Math.min(a, b, c, ...)` – Returns the smallest of the numbers.
   - `Math.pow(base, exponent)` – Returns the base raised to the exponent power.
   - `Math.sqrt(value)` – Returns the square root of a value.

2. **Randomization**:

   - `Math.random()` – Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

3. **Rounding**:

   - `Math.round(value)` – Rounds to the nearest integer.
   - `Math.ceil(value)` – Rounds up to the next largest integer.
   - `Math.floor(value)` – Rounds down to the nearest integer.
   - `Math.trunc(value)` – Removes any fractional digits, essentially returning the integer part.

4. **Other Methods**:
   - `Math.log(value)` – Returns the natural logarithm (base e) of a value.
   - `Math.sin(value)` / `Math.cos(value)` / `Math.tan(value)` – Trigonometric functions for sine, cosine, and tangent.
   - `Math.sin(Math.PI / 2)` – Evaluates to `1`.

## Parsing Methods

1. `parseInt(value)` – Converts a string into an integer. It can also accept a radix (base) for conversion (e.g., `parseInt('10', 16)` converts `10` from hexadecimal to a decimal number).
2. `parseFloat(value)` – Converts a string into a floating-point number.

## Conversions

1.  `toString()` – Converts a number into a string. Number(str) will convert it back.
