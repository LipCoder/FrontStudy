
// template
const sayHi = (aName = "anon") => "hello " +  aName + " love";
const sayHi_temp = (aName = "anon") => `hello ${aName} love`;

console.log(sayHi());


// use function
const add = (a, b) => a + b;

console.log(`hello how are you ${add(6, 6)}`);