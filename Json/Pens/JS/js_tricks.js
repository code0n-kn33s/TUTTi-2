const js_tricks = [
    {
        title: 'include scripts to DOM',
        subtitle: '',
        text: '',
        code: `
// paths from index.html
const connectFiles = [ './script1.js', './script2.js', ]
// ------------> загрузить скрипт в dom
function loadScript(src) {
let script = document.createElement('script');
script.src = src;
document.head.append(script);
}

for (let i = 0; i < connectFiles.length; i++) {
loadScript(connectFiles[i])
}
            `,
    },
    {
        title: 'переопределяем console.log',
        subtitle: 'и выводим ее в HTML',
        text: '',
        code: `
//JS
console._log = console.log;
console.log = function() {
    document.querySelector('.result').innerText = arguments[0];
    console._log.apply(null, arguments);
}

var a = 5,
    b = 11,
    result = a + b;

console.log(result);

// HTML
<p class="result"></p>
            `,
    },
    {
        title: '',
        subtitle: 'Преобразует аргументы в строку с разделителями',
        text: '',
        code: `
function myConcat(separator) {
    const args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}

// returns "red, orange, blue"
myConcat(', ', 'red', 'orange', 'blue');

// returns "elephant; giraffe; lion; cheetah"
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

            `,
    },
    {
        title: '',
        subtitle: 'Преобразование обьекта в массив по ключ-значение',
        text: '',
        code: `
let obj = {name: 'random', age: 123, speak: true}
let newArr = [];

for (let [key, value] of Object.entries(obj)) {
    newArr.push({ name: key, count: value });
}

newArr // [
    {name: 'name', count: 'random'},
    {name: 'age', count: 123},
    {name: 'speak', count: true}]
]
            `,
    },
    {
        title: '',
        subtitle: 'Преобразование обьекта в массив по ключ-значение',
        text: '',
        code: `
const deepFreeze = (obj1) => {
    Object.keys(obj1).forEach((property) => {
        if (
            typeof obj1[property] === "object" &&
            !Object.isFrozen(obj1[property])
        )

        deepFreeze(obj1[property]);
        });
    return Object.freeze(obj1);
    };
deepFreeze(obj1);
`,
    },
    {
        title: 'Inject Script',
        subtitle: 'Инжект своего скрипта на страничку',
        text: '',
        img: 'inject.png',
        code: `
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
    }

    loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert("Здорово, скрипт $_{script.src} загрузился");
    alert( _ ); // функция, объявленная в загруженном скрипте
    });
`,
    },
]