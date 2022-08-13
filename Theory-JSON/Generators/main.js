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
    {
        title: 'Литеральная нотация vs',
        subtitle: 'Изогнутая линия',
        img: '',
        text: `
Литеральная нотация vs JSON
Литеральная нотация не то же самое, что и JavaScript Object Notation (JSON). Хотя они и выглядят
аналогично, существует разница между ними:
<br>
JSON позволяет объявление свойств только с помощью синтаксиса "property": value. Имя свойства должно
быть
заключено в двойные кавычки и объявление не может быть сокращено.
В JSON значения могут быть только строками, числами, массивами, true, false, null или другими (JSON)
объектами.
Значения-функции (смотри "Методы" выше) не м
    `,
    },
    {
        title: 'данных, так и другие объекты',
        subtitle: 'Изогнутая линия',
        img: 'ease.png',
        text: `
<ul>
  <li> данных, так и другие объекты.</li>
  <li>которые используются для описания объекта. Значения свойств объектов могут содержать как примитивные
    типы</li>
  <li>   Инициализатор объекта это выражение, которое описывает инициализацию Object. Объекты состоят из
    свойств,</li>
  <li> Copy to Clipboard
    Описание</li>
</ul>
    `,
    },

]