# Strings

## Traits

1. **Immutable** – String values cannot be altered or changed directly. Any operation on a string results in the creation of a new string, effectively overriding the original value.
1. **Primitive** - strings are one of 6 primitive data types in JS (strings, numbers, bigint, boolean, undefined, null). Strings are not objects and have no methods.

## Declarations

1. Template Literals (`${variable}`) can be used for string interpolation.

## Properties and Access

1. **`str.length`**
1. **`string.at(n)`**
   - The `at` method is often preferred over `str[n]` and `.charAt(n)` as it allows negative indexing.
   - Variations include `charCodeAt(n)` for the Unicode value.

## New String Methods

1. **Capitalisation**: `toLowerCase()`, `toUpperCase()`
1. **Whitespace Removal**: `trim()`, `trimStart()`, `trimEnd()`
1. **Repetition**: `repeat(times)`
1. **Cutting Segments**: `slice(start, end)`, `substring(start, end)`
   - `substr(start, length)` is considered deprecated and inferior to the above more versatile methods
1. **Replacements**: `replace(regexp, withThis)`, `replaceAll(these, withThis)`
   - `replace` can be used with a global regex expression.
1. **Padding for Fixed Lengths**: `padStart(desiredLength, values)`, `padEnd(desiredLength, values)`
1. **Reverse**: weirdly, there is no string reverse method. Instead, convert to an array and use the Array.reverse() method: `string.split("").reverse().join("")`.

## Search Methods

1. `indexOf(substr)`, `lastIndexOf(substr)`
   - Both return `-1` if not found.
1. `includes(str2)`
1. `startsWith(str2)`
1. `search(regexp)`
1. `match(regexp)`

## Conversion Methods

1. `split(separator)` – Converts to an array.

## Misc

1. **Lexigraphical comparisons** – `str1 < str2` depending on the letters and numbers used or `str1.localeCompare(str2)`
   - `<` returns a boolean, while `.localeCompare()` returns `-1`, `0`, or `1`.
   - accented letters may have greater or lesser value depending on the locale
