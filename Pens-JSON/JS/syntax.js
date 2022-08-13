const syntax = [

    {
        title: 'вернуть уникальные элементы',
        subtitle: 'Перебрать массив на уникальность',
        text: '',
        code: `
// Method 1 - вернуть уникальные элементы
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
        result.push(str);
        }
    }

    return result;
}

// Method 2
arr.indexOf(elem)
        `,
    },
    {
        title: 'Найти элемент обьекта',
        subtitle: 'Найти свойство обьекта по значению',
        text: '',
        code: `
function getFirstMatching(obj, value) {
    let result;
    Object.getOwnPropertyNames(obj).some(key => {
        if (obj[key] === value) {
        result = key;
        return true; // Stops the loop
        }
    });
    return result;
}
const obj = { a: 1, b: 2, c: 3, d: 4, e: 4 };
console.log(getFirstMatching(obj, 4)); // d
        `,
    },
    {
        title: 'trotling',
        subtitle: 'это когда мы запрос отправляется по истечении времени',
        text: '',
        code: `
let throttlingTimer = null;

const handleSearchInput = (e) => {
    const query = e.target.value;
    console.log('input', query.length > 3, query);
    clearTimeout(throttlingTimer);
    if (query.length > 3) {
    throttlingTimer = setTimeout(
        () => {
        getData(query);
        },
        300
    );
    }
}
        `,
    },
    {
        title: '2 cвойства 1 параметром',
        subtitle: '',
        text: '',
        code: `
let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return "${this.name} ${this.surname}";
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" "); <-----
    }
};
user.fullName = "John Dou"`,
    },
]
