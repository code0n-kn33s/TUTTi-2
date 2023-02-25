const must_have = [
  {
    title: 'уникальные элементы в массиве',
    subtitle: '',
    text: '',
    code: `
const numbers = [1, 2, 1, 1, 2, 1, 3, 4, 1 ]
const uniq = [...new Set(numbers)] // => [ 1, 2, 3, 4 ]
const uniq2 = Array.from(new Set(numbers)) // => [ 1, 2, 3, 4 ]
          `,
  },
  {
    title: 'Изменить обьект по id',
    subtitle: '',
    text: '',
    code: `
const initial = [ {id: 1, score: 1}, {id: 2, score: 2}, {id: 3, score: 4}]
const newValue = {id: 3, score: 3}
const updated = initial.map(x => x.id === newValue.id ? newValue : x)
console.log(updated) //[{ id: 1, score: 1  }, { id: 2, score: 2  }, { id: 3, score: 3 }]
          `,
  },
  {
    title: 'Удалить обьект по id',
    subtitle: '',
    text: '',
    code: `
const removeId = 3
const without3 = initial.filter(x => x.id !== removeId)
console.log(without3) // => [ { id: 1, score: 1  }, { id: 2, score: 2  }  ]
          `,
  },
  {
    title: 'Преобразовать в обьект массив ключ-значение',
    subtitle: '',
    text: '',
    code: `
let obj = { a: 1, b: 2, c: 3  }
Object.entries(obj) //[['a', 1], ['b', 2], ['c', 3]]

const entries = [['a', 1], ['b', 2], ['c', 3]]
pairs.reduce((res, [key, value]) => ({ ...res, [key]: value }), {})
or
{ ...(new Map(entries)) } //{ a: 1, b: 2, c: 3  }

`,
  },
  {
    title: 'Выбрать уникальные элементы с двух массивов',
    subtitle: '',
    text: '',
    code: `
const s1 = [ 1, 2, 3, 4, 5 ]
const s2 = [ 2, 4 ]

// через indexOf
const subtracted = s1.filter(x => s2.indexOf(x) < 0)

// через includes
s1.filter(x => s2.includes(x))
s1.filter(x => !s2.includes(x))
`,
  },

]