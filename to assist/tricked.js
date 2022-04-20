// ------------> prototype 
let obj = {name: 'Jena'}
let newobj = Object.create(obj)

newobj.name = "Sanya"
delete newobj.name

console.log(newobj.name)

// ------------> Hoisting
var a = 12

func = () => {
    console.log(a) // ReferenceError c let , undefined c var
    var a = 15 // создание "a" приковывает текущую область видимости
}

// ------------> умножение в приоритете
function doSomething(a) {
    b = a + doSomethingElse(a * 2) // 2 + doSMTHelse(2*2)( 2*2 - сначала выполнится эта операция)

    console.log(b * 3);
}

function doSomethingElse(a) {
    return a - 1; // 4 - 1 потом вычисление
}

var b;

doSomething(2) //15

// ------------> closures

// 1
let number = 10;

function first() {
    return number + 5;
}

function second() {
    number = 2;
    return first();
}

console.log(first()); // 7
console.log(second()); // 7
// 2
let number = 10;

function first() {
    return number + 5;
}

function second() {
    number = 2;
    return first();
}

console.log(first()); // 15
console.log(second()); // 7
// 3
const ClosureFunc = () => {
    let i = 10;
    return (arg) => i++;
}

const AnotherClousureFunc = () => {
    let i = 20;
    // func()() -> Вызов возвращаемой функции 
    console.log(ClosureFunc()());
}
AnotherClousureFunc(); //10
AnotherClousureFunc(); //10
AnotherClousureFunc(); //10

// 4 my variant 3
const ClosureFunc = () => {
    let i = 10;
    return (arg) => i++;
}

const AnotherClousureFunc = () => {
    let i = 20;
    // func()() -> Вызов возвращаемой функции
    let x = ClosureFunc()
    console.log(x())
    console.log(x())
    console.log(x())

}
AnotherClousureFunc(); //10
AnotherClousureFunc(); //10
AnotherClousureFunc(); //10

// ------------> 
let x = 'out'
const func = ( value ) => value = 'in'

func(x) // "in"
console.log('x', x); // "out"

// ------------> 
// ------------> 
// ------------> 
// ------------> 
// ------------> 
// ------------> 
// ------------> 