const strings_me = {
    key: 'strings_me',
    title: 'Strings',
    subject: '',
    themes: [
        {
            title: 'Объединяет',
            method: 'concat',
            example: 'str1.concat(str2)',
            values: 'новую строку',
            text: 'Объединяет текст из двух или более строк и .',
            text: '',
            code: ``,
        },
        {
            title: 'Включает ли',
            method: 'includes',
            example: 'str1.includes(str2)',
            values: 'true | false',
            text: '',
            text: '',
            code: ``,
        },

        {
            title: 'Возвращает часть строки',
            method: 'slice',
            example: '"i go to".slice(2,4)',
            values: 'go',
            text: 'Метод slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки',
            text: '',
            code: `
let str = 'i like the cookies'
str.slice(2,6)
'like'
str
'i like the cookies'`,
        },
        {
            title: 'разбивает строку на массив по знаку',
            method: 'split',
            example: '"i like-the-cookies".split("-")',
            values: '["i like", "the", "cookies"]',
            text: 'split + join аналог replace',
            code: ``,
        },
        {
            title: 'возвращает индекс ',
            method: 'indexOf | lastIndexOf',
            example: 'str1.indexOf(str2)',
            values: 'index | -1',
            text: 'lastIndexOf - начинает поиск с конца',
            text: '',
            code: ``,
        },
        {
            title: 'примитивное значение объекта String',
            method: 'valueOf',
            example: 'new String("some string").valueOf()',
            values: '',
            text: '',
            code: ``,
        },
        {
            title: 'Удалить пробелы',
            method: 'trim',
            example: 'string.trim()',
            values: '',
            text: '',
            code: ``,
        },
        {
            title: 'начинается ли строка с символов',
            method: 'startsWith',
            example: '"i go to".startsWith("go", 2)',
            values: 'true | false',
            text: 'Этот метод позволяет определять, начинается ли строка с указанных в скобках символов.',
            code: `
var str = 'Быть или не быть, вот в чём вопрос.';

console.log(str.startsWith('Быть'));        // true
console.log(str.startsWith('не быть'));     // false
console.log(str.startsWith('не быть', 9));  // true
            `,
        },
        {
            title: 'Cимвол по index',
            method: 'charAt',
            example: 'string.charAt(4)',
            values: 'букву под номером 4',
            text: '',
            code: ``,
        },
        {
            title: 'Редактирует строку',
            method: 'replace || replaceAll',
            example: '"Hello world".replace("Hello", "hi")',
            values: 'hi world',
            text: '',
            code: `
'карандаш'.replaceAll('а', 'o') // 'кoрoндoш'

// split + join аналог replace
'mozz'.split('').join('!')
'm!o!z!z'
'mozz'.split('o').join('!')
'm!zz'

`,
        },
        {
            title: 'Повторяет саму себя',
            method: 'repeat',
            example: '"абв".repeat(2)',
            values: 'абвабвабв',
            text: '',
            text: '',
            code: ``,
        },
        {
            title: 'Получившиеся совпадения',
            method: 'match',
            example: 'sstr.match(regexp)',
            values: '',
            text: 'Метод match() возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением.',
            text: '',
            code: ``,
        },
        {
            title: 'сравнить две строки',
            method: 'localCompare',
            example: 'str1.localCompare(str2)',
            values: '0 | -1 | 1',
            text: '',
            text: '',
            code: `
// значение -1
var string1 = "ab";
var string2 = "cd";
var result = string1.localeCompare(string2); // -1, string1 сортируется до string2

// значение 0
var string1 = "ab";
var string2 = "ab";
var n = string1.localeCompare(string2); // 0, две строки равны

// значение 1
var string1 = "cd";
var string2 = "ab";
var n = string1.localeCompare(string2); // 1, string1 сортируется после string2`,
        },
        {
            title: 'регистр',
            method: 'toLowerCase | toUpperCase',
            values: '',
            text: '',
            text: '',
            code: ``,
        },
        {
            title: 'Значение из UTF-16',
            method: 'fromCharCode',
            values: '☃BC',
            example: 'String.fromCharCode("9731", "66", "67")',
            text: '',
            text: '',
            code: ``,
        },
        {
            title: 'Ищет совпадения в тексте',
            method: 'search',
            example: 'str.search([regexp])',
            values: 'index | -1',
            text: 'тоже что indexOf | includes только через regexp',
            code: ``,
        },



    ]
}