const main_ts = [
    {
        title: 'Типизация ф-й',
        subtitle: 'Выборка по массиву обьектов',
        img: '',
        text: '',
        code: `
    interface Student {
        name: string,
        age: number,
    }

    let students = [
        {name: 'Vasya', age: 32},
        {name: 'Sonya', age: 26},
        {name: 'Sasha', age: 26},
    ]

    function getBy(model: Student[], key: string, value: string | number): Student[] | Student {
        let search = model.filter((item:any) => item[key] === value)
        return search.length > 1 ? search[0] : search
    }

    getBy(students, 'name', "Sasha")
    getBy(students, 'age', 26)`,
    },
    {
        title: 'Generics',
        subtitle: 'Дженерики на прошлом примере',
        img: '',
        text: '',
        code: `
    interface Student {
        name: string,
        age: number,
    }

    let students = [
        {name: 'Vasya', age: 32},
        {name: 'Sonya', age: 26},
        {name: 'Sanya', age: 26},
    ]

    function getBy<T>(model: T[], key: string, value: string | number): T | T[] | null {
        let search = model.filter((item:any) => item[key] === value)

        return search.length > 1 ? search : search[0]
    }

    let v1 = getBy<Student>(students, 'name', "Sanya")
    let v2 = getBy<Student>(students, 'age', 26)`,
    },
    {
        title: 'extends keyof',
        subtitle: '',
        img: '',
        text: '',
        code: `
    function getBy<T, P extends keyof T>(model: T[], key: P, value: T[P]): T | T[] | null {
        let search = model.filter((item:any) => item[key] === value)

        return search.length > 1 ? search : search[0]
    }

    let v1 = getBy(students, 'name', "Sanya")
    let v2 = getBy(students, 'age', 26)
    `,
    },
    {
        title: 'Пример типизации Req-Res',
        subtitle: '',
        img: '',
        text: '',
        code: `
interface IReq {
    sum: number
    from: number
    to: number
}
    
    enum IStatus {
    Failed='failed',
    Success='success'
}
    
    interface DataSuccess extends IReq {
    id: number
}
    
    interface DataFailed {
    errorMassage: string
    errorCode: number
}
    
    interface IRes {
    status: IStatus,
    data: DataSuccess | DataFailed
}
    
    // неправильно потому что если прийдет status будет failed то нельзя диагностировать что для этого должно быть
    
    interface IResSuccess {
    status: IStatus.Success
    data: DataSuccess
}
    
    interface IResFailed {
    status: IStatus.Failed
    data: DataFailed
}
        `,
    },
]
