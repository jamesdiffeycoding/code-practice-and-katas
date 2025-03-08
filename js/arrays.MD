# Arrays

## Traits

1. **Objects** – they are objects with keys and values.

- There is a method to specifically check if `Array.isArray(yourValue)` given that the `typeof` an array is an object. You can also run `yourValue instanceof Array` to check.
- Since objects cannot equal each other, to check for equality in values you must use .toString() on any arrays.

1. **Keys** - keys are how values are accessed.

- Keys can be numbers (traditionally) or words (though this can lead to unexpected behaviour like values not counting to the length of the array).
- You can't use negative indexes for arrays because these can be key names (e.g. `-1`) on objects.

1. **Mutable** - methods like `.push(newValue)` augment the original array.

## Cautions

1. Don't use overly high indexes to set values or it risks leaving undefined 'holes'.

- for a similar reason, don't use the .delete() method.

## Properties and Access

1. `.at(index)` is good as it allows negative indexes. Otherwise standard `arr[index]` notation is good.
1. `slice(start,end)` is good for getting a chunk of the array

## Remove values

**Remove**

1. `pop()` deletes last value
1. `shift()` deletes first value

**Add**

1. `push(newValue)`
1. **combining arrays** - `a1.concat(a2, a3, etc...)`
1. `spread()` to combine arrays
   - e.g. `q1=[1,2,3]; q2 = [4,5,6]; q3 = [...q1, ...q2]`
1. `unshift(newValue)` adds first value

**Remove and add / replace**

1. `a1.copyWithin(replaceStartIndex, valueFromIndex, endOfReplacementIndex)` - can have two or three arguments.
1. `.splice(where, noToRemove, elementsToAdd)`
1. `.toSpliced(where, noToRemove, elementsToAdd)` - this does not alter the original array

## Sorting methods

1. `sort()` - sorts alphabetically
   - you can sort with a `compare function` that sorts based on the value of a boolean return
     - `sort(function(a,b) {return a-b})` - sorts numbers by size
     - `sort(function(a,b) {return 0.5-Math.random()})`- sorts randomly
1. `toSorted()` - this does not alter the original array
1. `reverse()`
1. `toReversed()` - this does not alter the original array.
1. `filter(function(value, index, array))`

## Iteration methods

1. `forEach(function(value, index, array))`
1. `every(function(value, index, array))` - returns true if all values match criteria
1. `some(function(value, index, array))` - returns true if one or more values match criteria
1. `reduce(accumulator, value, index, array)` reduces the array to a single value
1. `let keys = array.keys; for(let key of keys) {...}` - run a function on each of the keys
1. `let entries = array.entries; for(let entry of entries) {...}` - run a function on each of the entries/values.

## Search Methods

1. `Math.max.apply(null, array)` - finds the max value
1. `Math.min.apply(null, array)` - finds the min value

## Conversion Methods

1. `join(separator)` converts to string.

## Misc

1. `flat()` to flatten nested arrays
1. `.map(value => newValue)`
1. `flatMap(value => [newValues])`
