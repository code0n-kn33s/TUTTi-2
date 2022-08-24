const styleSheets = [
  {
    title: 'Псевдоклассы',
    subtitle: '',
    text: '',
    code: `
.elem:not(:first-of-type) { ... } //не первый в списке
p:not(.classy) { color: red; } //все кроме .classy
':link' — :visited — :hover — :active //работа с сылками
':any-link' // выбрать ссылку, независимо от того, была она посещена или нет
':focus' // когда input получает фокус.
':enabled' // находит любой включённый элемент
':empty' // находит любой элемент, у которого нет потомков
':disabled' // находит любой отключённый элемент (input)
':active' // LINK после нажимания
':root' //позволяет элементу ссылаться на родителя
':checked' // CSS находит любые элементы radio (<input type="radio">), checkbox (<input type="checkbox">) или option
':is' ////более компактная форма записи

:is(header, main, footer) p:hover {...}

------> equivalent
header p:hover,
main p:hover,
footer p:hover {...}

`,
  },
  {
    title: 'CSS Animation',
    subtitle: '',
    text: '',
    img: '',
    code: `
.elem {
  animation: animationName 3s infinite 1s ease; //одна анимация 1s это задержка
  animation: 1s winningMoveKnife ease-in forwards, 1s winningMoveKnifeDown ease-in 1s forwards;
  // две анимации, вторая начинается с задержкой(после первой)
}
@keyframes animationName {
  from {}
  to {}
  0% {}
  100% {}
}
--------------------
animation-fill-mode: forwards; //(!) оставляет анимацию в последнем кадре;
animation-fill-mode: backwards; //Заставляет элемент двигаться после загрузки страницы к 0% кадру;
animation-fill-mode: both; //Включает в себя backwards и forwards - после загрузки страницы элемент установится к 0% кадру, а после ;окончания анимации элемент останется там, где остановился.
---------------------
animation-iteration-count: число; // будет повторятся n раз
animation-iteration-count: infinite; // бесконечно воспроизводится
---------------------
animation-delay: 0.5s; // задержака анимации;
---------------------
animation-play-state: running || paused;
---------------------
animation-direction: normal | reverse | alternate | alternate-reverse
    'reverse' //	- Анимация будет проигрываться в обратном направлении.
    'alternate' //	- Анимация будет проигрываться сначала в прямом, а потом в обратном направлении (как transition).
    'alternate' //-reverse	- Анимация будет проигрываться из конечного положения в начальное и обратно.
    'normal' // - Анимация будет проигрываться от начала к концу, а после окончания скачком перескакивать в начальное положение.
---------------------
animation-timing-function
    'ease'	 // Сначала медленно, потом быстро, в конце опять медленно.
    'ease-in' //	Начинается медленно и постепенно ускоряется.
    'ease-out' //	Начинается быстро и постепенно останавливается.
    'ease-in-out' //	Сначала медленно, потом быстро, в конце опять медленно. От ease отличается скоростью.
---------------------
        `,
  },
  {
    title: 'background',
    subtitle: '',
    text: '',
    img: '',
    code: `
.elem {
  background: url(/example/image/hand.png) repeat-y #fc0;
}
--------------------;
background-position: 0%(x) 0%(y) || top left right center;
background-repeat: repeat | space | round | no-repea;
background-origin: padding-box | border-box | content-box; // content-box - Фон позиционируется относительно содержимого элемента.
--------------------;
background-attachment: auto || cover || contain // растануть
    'auto' // (100px auto) размер вычисляется автоматически исходя из пропорций картинки.
    'cover' // ширина или высота равнялась ширине или высоте родителя.
    'contain' // картинка целиком поместилась внутрь блока.;
---------------------;
background-attachment: fixed | scroll | local
    'fixed' // Делает фоновое изображение элемента неподвижным.
    'scroll' // Позволяет перемещаться фону вместе с содержимым.
    'local' // Фон фиксируется с учётом поведения элемента. Фон, выходящий за рамки элемента, остаётся на месте
---------------------
background-clip: padding-box | border-box | content-box | text // text Фон отображается только внутри текста
`,
  },
]
