const types_typescript = [{
        title: 'Обобщённые типы (generics)',
        subtitle: '',
        img: '',
        text: 'Обобщённые типы (generics) - позволяют создавать компоненты или функции, которые могут работать с различными типами, а не с каким-то одним',
        link: 'https://teletype.in/@alteregor/rkPlgmQz8',
        code: `
/** Объявление класса с параметром обобщённого типа */
class Queue<t> {
    private data = [];
    push = (item: T) => this.data.push(item);
    pop = (): T => this.data.shift();
}

const queue = new Queue<number>();
queue.push(0);
queue.push("1"); // Ошибка : в такую очередь нельзя добавить строку, тут разрешено использовать лишь числа
    `,
    },
    {
        title: 'type - Типы',
        subtitle: '',
        img: '',
        text: ' & - соеденяем типы, | - или',
        list: [ ],
        code: `
type role = {
    id: number
    }

    type user = {
    name: string
    age: number
    }

    type userRoleTypes = role & user;

    let userRole: userRoleTypes = {
    name: 'Vasa',
    id: 1,
    age: 23
    }

    console.log(userRole);
        `,
    },
    {
        title: 'Parse UNION типа',
        subtitle: '',
        img: '',
        text: 'для того чтобы изменить union(либо применить какой-то метод)- это нужно делать через if..else, либо через Array.isArray()',
        list: [ ],
        code: `
const foo = (param: string | number ) => {
    if(typeof param === 'string') {
        return param.toUpperCase()
    } else {
        return param * 20
    }

}

console.log('foo' ,foo(12));
        `,
    },
    {
        title: 'Null | Undefined',
        subtitle: 'Проверка на null и undefined',
        img: 'nullandnull.png',
        text: 'strictNullChecks - запрещающей неявные операции в которых участвует значение null и undefined.',
        list: [
            'null',
            'undefined',
            'NaN',
            "empty string ''",
            '0',
            'false',
        ],
        code: ``,
    },
    {
        title: 'type vs interface',
        subtitle: '',
        img: 'type_interface.jpeg',
        text: '',
        list: [
            'Mapped типы',
            'Union',
            'Declaration merging',
            'Рекурсивные типы',
            'Совместимость с типом Record',
            'Совместимость с типом Record',
        ],
        code: ``,
    },
    {
        title: 'declaration merging',
        subtitle: '',
        img: 'type_interface.jpeg',
        text: 'declaration merging - слияние интерфейсов с одинаковыми именами',
        list: [

        ],
        code: `
type Box = {}
type Box= {x: number} - ошибка...
        `,
    },
    {
        title: 'Обьединение type',
        subtitle: '',
        img: '',
        text: '',
        list: [],
        code: `
type User = {
    name: string
}

type Age = { //eсли здесь написать User будет ошибка
    age: number
}

function foo (obj: object): Age & User {
    return {name: '', age: 1}
}`,
    },
    {
        title: 'Обьединение type & interface',
        subtitle: '',
        img: '',
        text: '',
        list: [],
        code: `
// -------- types через Union
type User1 = {
    name: string
}

type User2 = {
    age: number
}
type MargeUsers = User1 & User2

// -------- interface через extends
interface User1 {
    name: string
}

interface User2 extends User1 {
    age: number
}
// -------- interface merge
interface USER {
    name: string
}
interface USER {
    age: number
}

`,
    },
    {
        title: 'Разширение типов',
        subtitle: '',
        img: '',
        text: '',
        list: [],
        code: `
type Instance = {
    field: string
}
type Instance2 = {
    Instance: string | number
}

// теперь в field может буть значение не только string, но и number
// разширять можно не только  interface но и type`
    },
]