# Objects

<br>

## Traits 🧠

1. **KV Pairs** - allow you to store data in KV pairs. Ks can be strings or symbols. Vs can be any JS type.
1. **Versatile** - can be used for data storage, or complex structures like classes, modules and more.
1. **Mutable** - you can add, remove or modify properties
1. **Prototyped** - JS objects have a prototype - another object from which they can inherit methods and classes. This enables inheritance, which is fundamental to JavaScript's prototype-based inheritance model.
1. **Dynamic property names**: You can do this with square brackets. eg const key = 'age'; const person = { [key]: 25 };
1. **Destructuring**: JavaScript allows you to extract values from an object using destructuring syntax, making your code more concise. eg const person = { name: 'Alice', age: 25 }; const { name, age } = person;

## Example

const person = {
name: 'John Doe',
age: 30,
isEmployed: true
};

## Editing values ➕ ➖

- Edit values: with `obj.key = newValue`
- Delete values with `delete obj.key`

## Object-inherited methods 🛠️

1. `Object.keys(yourObj)` - returns array of object's enumerable property names. eg ["name", "age"]
1. `Object.values(yourObj)` - returns array of object's values without keys. eg ["Jack", 25]
1. `Object.entries(yourObj)` - returns array of object's values without keys. eg [["name", "Jack"], ["age", 25]]
1. `Object.assign(targetObj, sourceObj)` - adds KV pairs from source obj into target.
   - eg const target = { a: 1 };
1. `Object.freeze(yourObj)` - prevents property edits, additions and deletions.
1. `Object.seal(yourObj)` - prevents property additions and deletions. Allows edits.
1. `Object.create()`: Creates a new object, using an existing object as the prototype for the new object. eg const proto = { greet() { console.log('Hello!'); } }; const obj = Object.create(proto); obj.greet();
1. `Object.constructor()`: Every object has a constructor property that refers to the function that created it. It allows you to inspect and manipulate an object's prototype directly.
1. `yourObject.hasOwnProperty("yourKey")` returns boolean

## Conversions

1. `JSON.stringify(yourJSObject)`: Converts a JavaScript object into a JSON string. This method is typically used when sending data to a server.
1. `JSON.parse(aJSONObject)`: Converts a JSON string back into a JavaScript object. Useful for parsing data from a server.

## Misc

1. **Spread operator**: You can use the spread operator to copy properties from one object to another or combine multiple objects. eg const person = { name: 'Alice', age: 25 }; const employee = { ...person, job: 'Developer' }; -> employee // { name: 'Alice', age: 25, job: 'Developer' }
1. **Methods within objects**: Methods in Objects: You can define methods inside objects. eg const person = { name: 'Alice', greet() { console.log('Hello, ' + this.name); } }; person.greet(); // Hello, Alice
   - you can also write it as {... greet: () => {...}}
1. **Inheritance with objects**: Objects can be used to implement inheritance by linking one object to another using the prototype chain. const animal = { eat() { console.log('Eating...');} }; const dog = Object.create(animal); dog.bark = function() { console.log('Barking...'); };
