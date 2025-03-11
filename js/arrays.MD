# Arrays

<br>

## Traits 🧠

1. **Objects** – arrays are objects with keys and values. `Checking for equality:` There is a method to specifically check if `Array.isArray(yourValue)` given that the `typeof` an array is an object. You can also run `yourValue instanceof Array` to check. Since objects cannot equal each other, to check for equality in values you must use .toString() on any arrays.

1. **Keys** - keys are how values are accessed. Keys should be numbers because words can lead to unexpected behaviour like values not counting to the length of the array. You can't use negative indexes for arrays because these can be key names (e.g. `-1`) on objects.

1. **Mutable** - many methods eg `push(newValue)` augment the original array rather than creating a new one.

## Accessing values 🗺️

1. `at(index)` allows + and - indexes. Otherwise standard `arr[index]` notation is good.
1. `slice(start,end)` is gets a chunk of the array.

# Removing/Adding/Replacing values ➕ ➖ 🔄

Remove:

1. `pop()` deletes last value
1. `shift()` deletes first value
1. `splice(indexToReplace, noToRemove, elementsToAdd)` - third element needed if replacing
1. `toSpliced(indexToReplace, noToRemove, elementsToAdd)` - creates new array.

Add:

1. `push(newValue)` - add to end
1. `unshift(newValue)` adds to start

Combine arrays:

1. `spread...` e.g. `q1=[1,2,3]; q2 = [4,5,6]; q3 = [...q1, ...q2]`
1. `a1.concat(a2, a3, etc...)`

Replace:

1. `a1.copyWithin(target, start,end)` - copies value(s) at index 'target' the element(s) at index 'start' ending at index 'end'
1. `splice(indexToReplace, noToRemove, elementsToAdd)` - third element needed if replacing
1. `toSpliced(indexToReplace, noToRemove, elementsToAdd)` - creates new array.

## Sorting methods 📚

1. `sort()` - reorders and mutates the original array
1. `sort(compareFunction)` sorts based on a boolean return
   - `function(a,b) {return a-b}` - sorts numbers by size
   - `function(a,b) {return 0.5-Math.random()}`- sorts randomly
1. `toSorted()` - this does not alter the original array
1. `reverse()` - reverses and mutates the original array
1. `toReversed()` - creates new array.
1. `filter(function(value, index, array))` returns a new array

## Iteration methods 🔴🔵🟢🟡🟠

1. `forEach(function(value, index, array))` - can't be broken out of
1. `map((value, index) => newValue)` - can't be broken out of
1. `reduce(accumulator, value, index, array)` reduces the array to a single value
1. `let keys = array.keys; for(let key of keys) {...}` - run a function on each of the keys
1. `let entries = array.entries; for(let entry of entries) {...}` - run a function on each of the entries/values. Gives [key, value] pairs.

## Search Methods 🔍

1. `some(function(value, index, array))` - returns true if one or more values match criteria
1. `every(function(value, index, array))` - returns true if all values match criteria
1. `Math.max.apply(null, array)` - finds the max value
1. `Math.min.apply(null, array)` - finds the min value

## Conversion Methods 🎰

1. `join(separator)` converts to string.

## Flattening arrays 🐄

1. `flat(level)` to flatten nested arrays the default level flattens everything
1. `flatMap(value => [newValues])` - supposedly this is akin to .map().flat(), when sometimes .flat().map() makes more sense. I still find this quite confusing compared to .map().

## Mutate vs non mutate - 🧟 vs 👷

Mutators: 🧟

1. pop()
1. shift()
1. delete()
1. unshift()
1. copyWithin(replace, copy, endOfReplacement)
1. splice(replace, number, addElement)
1. sort(compareFunction)
1. reverse()

Creators: 👷

1. toSpliced(replace, number, addElement)
1. toSorted()
1. toReversed()
1. concat()
1. filter()
1. flat()
1. map()
1. flatMap()

## Cautions ⚠️

1. Undefined holes are created by either using indexes greater than the array length or using the `delete()` method.
