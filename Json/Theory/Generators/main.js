const generators_main = [{
        title: 'Функции генераторы',
        subtitle: 'Изогнутая линия',
        img: '',
        code: `
let obj = {
  name: 'Jena',
  num: 0,
  * foo() {
      while(true) yield this.num++
}

obj.foo().next().value //1
obj.foo().next().value //2
    `,
    },

]