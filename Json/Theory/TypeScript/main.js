const typescript_main = [
{
    title: 'Зачем typescript',
    subtitle: '',
    img: '',
    list: [
        '',
        '',
    ],
    text: '',
    code: `
Уменьшить кол-во ошибок в RUNTIME и перенести их с компайл этап.
`,
},
{
    title: 'Cпец типы typescript',
    subtitle: '',
    img: '',
    list: [
        'unknown',
        'any',
        'never',
        'null : StrictNullChecks - false',
    ],
    text: '',
    code: `
`,
},
{
    title: 'Отличия type & interfaces',
    subtitle: '',
    img: '',
    list: [
        '',
        '',
    ],
    text: '',
    code: `
1) type могут назначать единичный тип || interface может только обьектные
type FType = () => void
2) type не имеют extends
interface i1 extends i2 {}
3) interfaces могут мэржится по одинаковому имени
interface User { name: strting }
interface User { age: number }
===
interface User {name: strting, age: number}

`,
},
{
    title: 'Optional ? | !',
    subtitle: 'Выборка по массиву обьектов',
    img: '',
    text: '? может быть или нет свойства, required - ! свойство всегда есть ',
    code: `
type User = {
    name: string
    age?: number
}`,
},
{
    title: 'Optional chaing',
    subtitle: '',
    img: '',
    text: '',
    code: `
interface User {
    login: string,
    password?: {
        type: 'primary' | 'secondary'
    }
}

function f (user: User) {
    return user.password?.type
    // это идентично
    return user.password ? user.password.type : undefined
} `,

},
{
    title: 'Aнотация типов (аналог =)',
    subtitle: 'это ":" ',
    img: '',
    text: '',
    code: `
В TypeScript аннотация типа или указание типа осуществляется с помощью оператора двоеточия : после которого следует идентификатор типа данных. TypeScript является статически типизированным языком, поэтому после того, как идентификатор будет связан с типом, изменить тип будет невозможно.
    `,
},
{
    title: 'Каст типов',
    subtitle: 'as | if typeof | instanceof',
    img: '',
    text: '',
    code: `
Используется в основном с unknown/ или другими непонятными ситуациями, когда мы заразнее не знаем теи , который прийдет.
    `,
},
{
    title: 'UNION | type alias - тип обьединение',
    subtitle: 'id: number | string',
    img: '',
    text: 'Объединения или union не являются собственно типом данных, но они позволяют комбинировать или объединить другие типы. ',
    list: [],
    code: ``,
},
{
    title: 'intersection type - пересечение типов',
    subtitle: 'id: number & string',
    img: '',
    text: '',
    list: [],
    code: ``,
},
{
    title: 'type guard | защитники типа',
    subtitle: 'const foo = (value: number || string): value is string => ',
    img: '',
    text: '',
    list: [],
    code: ``,
},

]