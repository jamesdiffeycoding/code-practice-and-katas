# Strings

## Traits

1. **Immutable** – String values cannot be altered or changed directly. Any operation on a string results in the creation of a new string, effectively overriding the original value.

## Declarations

1. Template Literals (`${variable}`) can be used for string interpolation.

## Properties and Access

1. **`str.length`**
2. **`string.at(n)`**
   - The `at` method is often preferred over `str[n]` and `.charAt(n)` as it allows negative indexing.
   - Variations include `charCodeAt(n)` for the Unicode value.

## New String Methods

1. **Capitalisation**: `toLowerCase()`, `toUpperCase()`
2. **Whitespace Removal**: `trim()`, `trimStart()`, `trimEnd()`
3. **Repetition**: `repeat(times)`
4. **Cutting Segments**: `slice(start, end)`, `substring(start, end)`
   - `substr(start, length)` is considered deprecated and inferior to the above more versatile methods
5. **Replacements**: `replace(regexp, withThis)`, `replaceAll(these, withThis)`
   - `replace` can be used with a global regex expression.
6. **Padding for Fixed Lengths**: `padStart(desiredLength, values)`, `padEnd(desiredLength, values)`

## Search Methods

1. `indexOf(substr)`, `lastIndexOf(substr)`
   - Both return `-1` if not found.
2. `includes(str2)`
3. `startsWith(str2)`
4. `search(regexp)`
5. `match(regexp)`

## Conversion Methods

1. `split(separator)` – Converts to an array.

## Misc

1. **Lexigraphical comparisons** – `str1 < str2` depending on the letters and numbers used or `str1.localeCompare(str2)`
   - `<` returns a boolean, while `.localeCompare()` returns `-1`, `0`, or `1`.
   - accented letters may have greater or lesser value depending on the locale
