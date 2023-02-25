const object_me = {
    key: 'object_me',
    title: 'Обьекты',
    subject: '',
    themes: [
        {
            title: 'Создание',
            method: 'create',
            text: 'Доступ к свойствам obj через прототип',
            code: `
Object.create(obj)`,
        },
        {
            title: 'Скопировать обьект',
            method: '{...obj}',
            text: '',
            code: ``,
        },
        {
            title: 'Массив ключей.',
            method: 'keys',
            text: '',
            code: `
Object.keys(obj) // ['name', 'age', 'lang']`,
        },
        {
            title: 'Массив значений объекта',
            method: 'values',
            text: '',
            code: `
Object.values(obj) // [1, "26-July-2018", "mobile", "Chrome"]`,
        },
        {
            title: 'массив пар «ключ-значение»',
            method: 'entries',
            text: '',
            code: `
Object.entries()  // [["name", "Ubuntu"], ["version", 18.04] ]`,
        },
        {
            title: 'глубокое копирование',
            method: 'parse -> stringify',
            text: '',
            code: `
JSON.parse(JSON.stringify(obj))

JSON.parse // превращает обратно
JSON.stringify // превращает в JSOn
            `,
        },


    ]
}