const typescript_props = [
{
    title: 'Заранее заданные типы',
    subtitle: '',
    img: '',
    text: 'TS отслеживает типы. И просто выдает ошибку если появляется левый тип, который не был указан',
    code: `
type FooType = string | boolean | number
type BarType = FooType[]

const skills: BarType = [true, 'str1', 'str2','str3', 'and', 'so', 'deeper', 54] // массив
let newArray: string[] = [];

//------
// NOTE: в чем тут проблемма? newArray
// ANSW: dynamic создается и подстовляет динамичесски значения
// для newArray я задал string[] массив из строк, а в итоге другое
// обратить внимание на конструкцию - as string[]
// -----
let dynamic = skills.filter(item => typeof item === 'string');
newArray = skills.filter(item => typeof item === 'string') as string[];
    `,
},
{
    title: 'UNION',
    subtitle: '',
    img: 'type_interface.jpeg',
    text: 'Нельзя использовать implements, если присутствует оператор union.',
    list: [

    ],
    code: `
type Box = Shape | Figure
class MyBox implements Box {} - ошибка...',
    `,
},


]