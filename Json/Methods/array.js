const array_me = {
    key: 'array_me',
    title: 'Массивы',
    subject: '',
    themes: [
        {
            title: 'Создание',
            method: 'new Array || [] - literal',
            text: '',
            code: ``,
        },
        {
            title: 'Декомпозиция массива',
            method: '[str1, str2, str3] = skills',
            example: ``,
            values: ``,
            text: 'Переменные дадутся элементам массива. Включая оператор ...spread',
            code: `
const skills: Array<string> = ['str1', 'str2','str3'];

const [str1, str2, str3] = skills;

console.log(str1); // "str1"
console.log(str2); // "str2"
console.log(str3); // "str3"`,
        },
        {
            title: 'Копирование',
            method: '[...arr] || arr.slice()',
            example: ``,
            values: ``,
            text: '',
            code: ``,
        },
        {
            title: 'Уникальные значения',
            method: '[...new Set(arr)]',
            example: ``,
            values: ``,
            text: '',
            code: `
const numbers = [1, 2, 1, 1, 2, 1, 3, 4, 1 ]
const uniq = [...new Set(numbers)] // => [ 1, 2, 3, 4 ]
const uniq2 = Array.from(new Set(numbers)) // => [ 1, 2, 3, 4 ] `,
        },
        {
            title: 'Методы перебора массивов',
            method: 'forEach || for of || for || reduce',
            example: ``,
            values: ``,
            text: '',
            code: `
let arr = ["Bilbo", "Gandalf", "Nazgul"];

arr.forEach((item, index, array) => {})

for(item of arr) {}

arr.reduce((v1, v2) => v1 + v2) `,
        },
        {
            title: 'Добавление в массив',
            method: 'push || unshift',
            example: `arr.push(...ims) | arr.unshift(...ims)`,
            values: 'push - начало || unshift - конец',
            text: '',
            code: `
arr.push(...items) // добавляет элементы в конец,
arr.unshift(...items) // добавляет элементы в начало. `,
        },
        {
            title: 'Удалиение из массива',
            method: 'shift | pop',
            example: `arr.pop() | arr.shift()`,
            values: 'shift - с начала | pop - c конца ',
            text: '',
            code: `
arr.pop() // извлекает элемент из конца,
arr.shift() // извлекает элемент из начала,
            `,
        },
        {
            title: 'Скопировать частично или целиком',
            method: 'slice',
            example: 'arr.slice([start], [end])',
            text: 'new arr',
            values: 'возвращает новый массив',
            code: ` [t,e,s,t].slice(1,3) // ['e', 's'] `,
        },
        {
            title: 'Вырезать | Заменить элемент с середины',
            method: 'splice',
            example: `splice(откуда, сколько, чем заменить)`,
            values: `old arr edited`,
            text: '',
            code: `
let arr = ["Я", "изучаю", "JavaScript"];

// удалить с позиции 1, удалить 1 элемент
arr.splice(1, 1);

alert( arr ); // осталось ["Я", "JavaScript"]

// удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, "Давай", "танцевать");

alert( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]
            `,
        },
        {
            title: 'Соеденить массивы в новый(не меняя исходных)',
            method: 'concat',
            example: `test.concat(arr1, arr2)`,
            values: `test`,
            text: '',
            code: `
test.concat(arr1, arr2)
            `,
        },
        {
            title: 'Есть ли элемент в массиве',
            method: 'indexOf || lastIndexOf || includes',
            example: `arr.indexOf(item, from) | arr.lastIndexOf(item) | arr.includes(item, from)`,
            values: `true | false`,
            text: `.includes можно не включать 2й параметр. arr.findIndex(i => 'elem') & arr.indexOf('elem') - похожи`,
            code: `
arr.indexOf(item, from) // возвращает index если элемент найден
arr.lastIndexOf(item, from) // тоже самое поиск с конца
arr.includes(item, from) // возвращает true | false

['a', 'b', 'c'].includes('b') // true
            `,
        },
        {
            title: 'Найти сложный элемент',
            method: 'find || findIndex ',
            example: `arr.find(item => item === 'cat') `,
            values: `'cat' | 3 // element or index`,
            values: 'Возвращает искомый элемент. ',
            code: `
let result = arr.find(function(item, index, array) {
    // если true - возвращается текущий элемент и перебор прерывается
    // если все итерации оказались ложными, возвращается undefined
});

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
    ];

users.find(i=> i.id === 1) //{id: 1, name: 'Вася'}

arr.findIndex //возвращает index
            `,
        },
        {
            title: 'Возвращает массив из найденных элементов',
            method: 'filter ',
            example: `arr.filter(item => item === 5)`,
            values: `new Array([5])`,
            text: 'Возвращает искомый элемент',
            values: 'новый массив',
            code: `
let results = arr.filter(function(item, index, array) {
    // если true - элемент добавляется к результату, и перебор продолжается
    // возвращается пустой массив в случае, если ничего не найдено
});`,
        },
        {
            title: 'Преобразование массива',
            method: 'map ',
            example: `arr.map(x => x)`,
            values: `new arr`,
            text: 'Возвращает такой же массив переделав каждый элемент в существующем',
            values: 'новый массив',
            code: `
let result = arr.map(function(item, index, array) {
    // возвращается новое значение вместо элемента
});
            `,
        },
        {
            title: 'Сортировка массива',
            method: 'sort ',
            example: `arr.sort((x,y) => x - y)`,
            values: `[1,2,3]`,
            text: '',
            code: `
arr.sort((x,y) => x - y) // цыфры
arr.sort((x,y) => (x < y) ? -1 : 1) // буквы
            `,
        },
        {
            title: 'Разбить строку на массив по символу',
            method: 'split ',
            example: `names.split(', ')`,
            values: `['Вася', 'Петя', 'Маша']`,
            text: '',
            code: `
let names = 'Вася, Петя, Маша';

let arr = names.split(', '); // ['Вася', 'Петя', 'Маша']
            `,
        },
        {
            title: 'Соеденить массив по символу в строку',
            method: 'join ',
            example: `arr.join('')`,
            values: ` Вася;Петя;Маша`,
            text: '',
            code: `
let arr = ['Вася', 'Петя', 'Маша'];

let str = arr.join(';'); // Вася;Петя;Маша
            `,
        },
        {
            title: 'Проверка на тип - массив',
            method: 'isArray ',
            example: 'Array.isArray([])',
            values: 'true',
            text: '',
            code: `
alert(Array.isArray([])); // true
            `,
        },
        {
            title: 'Вычисления единого значения',
            method: 'reduce || reduceRight',
            example: 'arr.reduce((sum, current) => sum + current, 0)',
            values: 'сумма',
            text: '',
            list: [
                'accumulator – результат предыдущего вызова этой функции',
                'равен initial при первом вызове (если передан initial)',
                'item – очередной элемент массива',
                'index – его индекс',
                'array – сам массив.'
            ],
            code: `
let value = arr.reduce(function(accumulator, item, index, array) {
    // ...
}, [initial]);

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15
            `,
        },
        {
            title: 'Проверка на тип - массив',
            method: 'isArray ',
            example: ``,
            values: ``,
            text: '',
            code: `
alert(Array.isArray([])); // true
            `,
        },
        {
            title: 'Находит элемент по index (можно с конца)',
            method: 'at',
            example: 'arr.at(-1) | arr.at(-2)',
            values: 'последний и предпоследний эл-ты',
            text: '',
            code: ``,
        },
        {
            title: 'Ф-я-Генератор для массива',
            method: 'entries',
            example: 'let iter = arr.entries(); iter.next().value;',
            values: `[0, 'a']`,
            text: '',
            code: `
var arr = ['a', 'b', 'c'];

let iter = arr.entries()

iter.next() // {value: Array(2), done: false}
iter.next().value // [1, 'b']
iter.next().value // [2, 'c']
iter.next().value // undefined`,
        },
    ]
}