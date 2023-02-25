const interview = [
    {
        title: 'Передача по ссылке',
        subtitle: '',
        text: '',
        code: `
let obj = {name: 'Jena'}
let newobj = Object.assign(obj)

newobj.name = "Sanya"
delete newobj.name

console.log(obj.name) // undefined
`
    },
    {
        title: 'Оставить в строке только числа',
        subtitle: '',
        text: '3fdsf456dr',
        code: `
'3fdsf456dr'.split('').filter(value => !isNaN(parseInt(value))).join('') //'3456'
`
    },
]
