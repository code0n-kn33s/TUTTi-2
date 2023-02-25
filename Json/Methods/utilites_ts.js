const utilites_ts = {
    key: 'utilites_ts',
    title: 'Utilites ts',
    subject: '',
    themes:
        [
            {
                title: 'Awaited',
                subtitle: '',
                img: '',
                method: 'Awaited<Type>',
                link: 'https://www.typescriptlang.org/docs/handbook/utility-types.html',
                text: `
                Этот тип предназначен для моделирования операций, таких как awaitфункции async, или .then()метода для Promises, в частности, для того, как они рекурсивно разворачивают Promises.`,
                list: [],
                code: `
type A = Awaited<Promise<string>>;

type A = string

type B = Awaited<Promise<Promise<number>>>;

type B = number

type C = Awaited<boolean | Promise<number>>;

type C = number | boolean`,
            },
            {
                title: 'Partial',
                subtitle: '',
                img: '',
                method: 'Partial<Type>',
                text: `
                Создает тип, все свойства которого Typeустановлены как необязательные. Эта утилита вернет тип, представляющий все подмножества данного типа.
                `,
                list: [],
                code: `
interface Todo {
    title: string;
    description: string;
    }

    function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
    }

    const todo1 = {
    title: "organize desk",
    description: "clear clutter",
    };

    const todo2 = updateTodo(todo1, {
    description: "throw out trash",
    });
                `,
            },
            {
                title: 'Required',
                subtitle: '',
                img: '',
                method: 'Required<Type>',
                text: `Создает тип, состоящий из всех свойств Typeset to required. Противоположность Partial.`,
                list: [],
                code: `
                interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };
Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.`,
            },
            {
                title: 'Readonly',
                subtitle: '',
                img: '',
                method: 'Readonly<Type>',
                text: ``,
                list: [],
                code: `
interface Todo {
    title: string;
    }

    const todo: Readonly<Todo> = {
    title: "Delete inactive users",
    };

    todo.title = "Hello";
    Cannot assign to 'title' because it is a read-only property.
                `,

            },
            {
                title: 'Record',
                subtitle: '',
                img: '',
                method: 'Record<Keys, Type>',
                text: ``,
                list: [],
                code: `
interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;

const cats: Record<CatName, CatInfo>
                `,
            },
            {
                title: 'Pick',
                subtitle: '',
                img: '',
                method: 'Pick<Type, Keys>',
                text: ``,
                list: [],
                code: `
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};

todo;

const todo: TodoPreview
                `,
            },
            {
                title: 'Omit',
                subtitle: '',
                img: '',
                method: 'Omit<Type, Keys>',
                text: ``,
                list: [],
                code: `
interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
    }

    type TodoPreview = Omit<Todo, "description">;

    const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
    };

    todo;

    const todo: TodoPreview

    type TodoInfo = Omit<Todo, "completed" | "createdAt">;

    const todoInfo: TodoInfo = {
    title: "Pick up kids",
    description: "Kindergarten closes at 5pm",
    };

    todoInfo;

    const todoInfo: TodoInfo
`,
            },
            {
                title: 'Exclude',
                subtitle: '',
                img: '',
                method: '',
                text: ``,
                list: [],
                code: ``,
            },


        ]
}