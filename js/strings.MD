# Strings

<br>

## Traits 🧠

1. **Immutable** – String values cannot be altered or changed directly. Any operation on a string results in the creation of a new string, effectively overriding the original value.
1. **Primitive** - strings are one of 6 primitive data types in JS (strings, numbers, bigint, boolean, undefined, null). Strings are not objects and have no methods.

## Declarations 🔊

1. Template Literals (`${variable}`) can be used for string interpolation.

## Properties and Access 🗺️

1. **`str.length`**
1. **`string.at(n)`**
   - The `at` method is often preferred over `str[n]` and `.charAt(n)` as it allows negative indexing.
   - Variations include `charCodeAt(n)` for the Unicode value.

## String Methods 👷

1. **Capitalisation**: `toLowerCase()`, `toUpperCase()`
1. **Whitespace Removal**: `trim()`, `trimStart()`, `trimEnd()`
1. **Repetition**: `repeat(times)`
1. **Cutting Segments**: `slice(start, end)`, `substring(start, end)`
   - `substr(start, length)` is considered deprecated and inferior to the above more versatile methods
1. **Replacements**: `replace(regexp, withThis)`, `replaceAll(these, withThis)`
   - `replace` can be used with a global regex expression.
1. **Padding for Fixed Lengths**: `padStart(desiredLength, values)`, `padEnd(desiredLength, values)`
1. **Reverse**: weirdly, there is no string reverse method. Instead, convert to an array and use the Array.reverse() method: `string.split("").reverse().join("")`.

## Search Methods 🔍

1. `indexOf(substr)`, `lastIndexOf(substr)`
   - Both return `-1` if not found.
1. `includes(str2)`
1. `startsWith(str2)`
1. `search(regexp)` - eg
   function firstNonRepeatingLetter(s) {
   for (let i = 0; i<s.length; i++) {
   let regex = new RegExp(s[i], 'i') // case insensitive search
   let slicedString = s.slice(0, i) + s.slice(i+1)
   if (slicedString.search(regex) == -1){
   return s[i]
   }  
    }
   return ""
   }
1. `match(regexp)` - eg
   const str = "For more information, see Chapter 3.4.5.1";
   const re = /see (chapter \d+(\.\d)\*)/i;
   const found = str.match(re);

   console.log(found);
   // [
   // 'see Chapter 3.4.5.1',
   // 'Chapter 3.4.5.1',
   // '.1',
   // ]
   An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.
   If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups are not included.
   If the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, match() will return the same result as RegExp.prototype.exec() (an array with some extra properties).

## Conversion Methods 🎰

1. `split(separator)` – Converts to an array.
1. `Number(string)` - Converts to a number

## Lexigraphical comparisons 🧪

1. `str1 < str2` depending on the letters and numbers used. It returns a boolean.
1. `str1.localeCompare(str2)` is similar, but accented letters may have greater or lesser value depending on the locale. It returns `-1`, `0`, or `1`.
