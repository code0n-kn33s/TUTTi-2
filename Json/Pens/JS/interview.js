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
]
