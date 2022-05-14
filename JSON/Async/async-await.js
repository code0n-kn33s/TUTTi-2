const asyncAwait = [
    {
        title: 'Асинхронные функции',
        subtitle: 'async/await построен на промисах',
        text: 'представляют собой комбинацию промисов и генераторов, и в основном являются абстракцией более высокого уровня (по сравнению с промисами). ',
        code: '',
    },
    {
        title: '',
        subtitle: '',
        text: 'Перед тем как вызвать функцию doSomethingAsync, тебе нужно добавить await перед ее вызовом: таким образом вызывающий код останавливается, пока промис не будет resolved или rejected. Важно: клиентская функция должна быть определена как асинхронная async',
        code: '',
    },
    {
        title: '',
        subtitle: '',
        code: `let obj = {name: 'Jena'}
                let newobj = Object.create(obj)

                newobj.name = "Sanya"
                delete newobj.name

                console.log(newobj.name)`,
        text: '',
    },
]
