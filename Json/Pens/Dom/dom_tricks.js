const dom_tricks = [

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
  {
    title: 'baskground-img в качестве рамки border',
    subtitle: '',
    text: '',
    code: `
border: 14px solid transparent;
border-image: url(./../img/design/zap-08.fc201d70f76b.svg) 30 stretch;
border-image-outset: 7px;
    `,
},
{
    title: 'Paralax SCSS',
    subtitle: '',
    img: 'paralax.png',
    text: '',
    code: `
    // html
    <div class="parallax">
      <div class="parallax__layer parallax__layer__6">
          <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true" />
      </div>
      <div class="parallax__cover"></div>
    </div>

    // SCSS
    *{
      box-sizing: border-box;
    }

    html,
    body{
      background-color: #FEDCC8;
    }

    .parallax {
      perspective: 100px;
      height: 100vh;
      overflow-x: hidden;
      overflow-y: auto;
      position: absolute;
      top: 0;
      left: 50%;
      right: 0;
      bottom: 0;
      margin-left: -1500px;
    }

    .parallax__layer{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      img{
        display: block;
        position: absolute;
        bottom: 0;
      }
    }

    .parallax__cover{
      background: #2D112B;
      display: block;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      height: 2000px;
      z-index: 2;
    }

    $parallax__layers: 6;

    @for $i from 0 through $parallax__layers {
      $x: ($parallax__layers - $i) / 2;
      .parallax__layer__#{$i}{
         transform: translateZ(-100 * $x#{px}) scale($x + 1);
      }
    }
    `,
  },
]