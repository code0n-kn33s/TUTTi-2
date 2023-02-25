const js_objects = [
    {
        title: '1 Общая информация',
        subtitle: '',
        img: '',
        code: '',
        text: `
Инициализированы - с помощью new Object(), Object.create() или литеральной инициирующей - {}.
        `,
    },
    {
        title: 'Общая информация',
        subtitle: '',
        img: '',
        code: '',
        text: `
Инициализированы - с помощью new Object(), Object.create() или литеральной инициирующей - {}.
        `,
    },
    {
        title: 'Slice String & Array',
        subtitle: '',
        img: '',
        code: `
// Slice String
"The quick brown fox".slice(10) // "brown fox"
'Приближается утро'.slice(4, -2) //лижается утр
'where do you go?'.slice(-6) // 'ou go?'

// Slice Array
['ant', 'bison', 'camel', 'duck'].slice(1,3) // 'bison', 'camel'
[1,2,3,4,5,6].slice(-2) // 5,6
`,
        text: `
Принцип тот же. <br>
slice(с, по);
Можно дать отрицательное значение - тогда вырезать будет с конца <br>
`,
    },
    {
        title: 'Split String',
        subtitle: '',
        img: '',
        code: `
// Split String
split -> string to array
'asdf'.split('s') //['a', 'df']
'asdf'.split('') //['a', 's', 'd', 'f']
`,
        text: ` split `,
    },
    {
        title: 'Object: String, Array, Number',
        subtitle: '',
        img: '',
        code: `
// Splice Array

animals = ['ant', 'bison', 'camel', 'duck']

animals.splice(1,2, 'pig') // ['ant', 'pig', 'duck']
animals.splice(0,0, 'cow', 'hourse')//['cow', 'hourse', 'ant', 'pig', 'duck']
animals.splice(1, 0, 'chick') //['cow', 'chick', 'hourse', 'ant', 'pig', 'duck']

`,
        text: `
Str -> split, slice <br>
Array -> splice, slice <br>

Принцип тот же. <br>
slice(с, по);
Можно дать отрицательное значение - тогда вырезать будет с конца <br>
`,
    },
]
