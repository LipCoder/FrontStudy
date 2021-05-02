function sayHi(aName) {
    return "Hello" + aName;
}

console.log(sayHi());
// Hello undefined

//#endregion

// use default value
function sayHi(aName = "anon") {
    return "Hello" + aName;
}

console.log(sayHi());


// with arrow function
const DEFAULT = "lalalal";

const sayHi = (aName = DEFAULT) => "hello " + aName;

console.log(sayHi());