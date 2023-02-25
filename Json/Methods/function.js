const function_me = {
    key: 'function_me',
    title: 'Функции',
    subject: '',
    themes: [
        {
            title: 'Преобразовать аргументы -> Массив ',
            method: 'slice | Array.from | spred',
            text: 'Работать с аргументами ф-ции методами массива',
            code: `
// преобразовать аргументы функции в массив
function Foo () {
    const args = Array.prototype.slice.call(arguments);
    // or
    const args = Array.from(arguments);
    // or
    const args = [...arguments];
}`,
        },
        {
            title: 'Массив аргументов',
            method: 'arguments',
            text: 'Доступ к методам с функции',
            code: `
function foo () {
    console.log('>> foo args', arguments)
}`,
        },

        {
            title: '',
            method: 'callee',
            text: 'Область видимости в которой вызывается функция',
            values: 'arguments.callee',
            code: `
function foo () {
    console.log('>> foo args', arguments)
    console.log('>> foo callee', arguments.callee)
    console.log('>> foo caller', arguments.callee.caller)
}`,
        },
        {
            title: '',
            method: 'caller',
            text: 'Область видимости в которой вызывается функция',
            values: 'arguments.callee.caller',
            code: `
function foo () {
    console.log('>> foo args', arguments)
    console.log('>> foo callee', arguments.callee)
    console.log('>> foo caller', arguments.callee.caller)
} `,
        },
        {
            title: 'Привязка контекста',
            method: 'call | apply | bind',
            text: '',
            code: `
gz.call({name: "Alex"}, 1,2,3,4)
gz.apply({name: "Alex"}, [1,2,3,4])
const GZ = gz.bind({name: "Alex"}, 1,2,3,4)`,
        },
        {
            title: 'Выполняет js код',
            method: 'eval',
            example: 'eval(jscode)',
            text: '',
            code: ` `,
        },
    ]
}