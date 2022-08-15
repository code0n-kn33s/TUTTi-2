const dom_tricks = [
  {
      title: 'Стили для всех кроме первого',
      subtitle: 'не первый в списке',
      text: '',
      code: `
&: not(:first-of-type) { ... }
`,
  },
  {
    title: 'Обрез блока',
    subtitle: 'red_cut',
    img: 'red_cut.png',
    text: '',
    code: `
header::after {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  content: "";
  transform: skewY(-4deg);
  transform-origin: bottom left;
  background: var(--deepblack);
}

header::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  content: "";
  transform: skewY(8deg);
  transform-origin: bottom right;
  background: var(--deepblack);
}
    `,
  },
  {
    title: 'Зделать треугольник',
    subtitle: '',
    img: 'triangle_css.png',
    text: '',
    code: `
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
    `,
  },
  {
    title: 'Стили',
    subtitle: 'Для каждого второго элемента',
    img: '',
    text: '',
    code: `
.children:nth-child(2n + 1) {...}
    `,
  },
  {
    title: 'Спрятать text',
    subtitle: 'Обрезать блок по кол-ву строчек',
    img: 'cut_text.png',
    text: '',
    code: `
.listText {
    height: calc(25px * 3);
    padding: 5px;
    overflow: hidden;
    color: red;
    line-height: 25px;
    text-align: justify;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
    `,
  },
  {
    title: 'Затемнение IMG',
    subtitle: 'Затемнить картинку одним селектором',
    img: '',
    text: '',
    code: `
background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('./assets/aside_img.png');
    `,
  },
  {
    title: 'Change ul li marker color & view',
    subtitle: '',
    img: 'ul-li-dot.png',
    text: '',
    code: `
ul {
  list-style: none;
}

ul li::before {
  content: '\(!_)2022'; // тут можно поставить любой знак списка
  color: red;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
    `,
  },
  {
    title: 'Doble dot',
    subtitle: 'in one elem',
    img: 'duble_dot.png',
    text: '',
    code: `
      box-shadow: 25px 0 0 black;
    `,
  },

  {
    title: 'Square',
    subtitle: 'cuted',
    img: 'quare.png',
    text: '',
    code: `
    <div class="square"></div>

    .square {
      height:50px;
        width:50px;
        border-bottom:10px solid black;
        border-left:10px solid black;
        transform:rotate(135deg);
    }
    `,
  },

]