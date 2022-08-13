const animations = [{
    title: 'Add 2 animations to element ',
    subtitle: '',
    text: '',
    img: '',
    code: `
.elem.active{
  animation: animation_1 4s linear, 4s animation_2 4s ease;
}

@keyframes animation_1 {
  0% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
  100% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
}

@keyframes animation_2 {
  0% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
  100% {
    background-color: cyan;
    left: 0px;
    top: 200px;
  }
}
        `,
  },
  {
    title: 'Dynamic underline ',
    subtitle: '',
    text: '',
    img: 'dynamic_underline.gif',
    code: `
.text-underline {
  position: relative;
  padding: 8px;
  transition: 0.2s;
  cursor: pointer;
}

.text-underline::after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #ddd;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.text-underline:hover::after {
    width: 100%;
    left: 0;
}

        `,
  },
  {
    title: 'Blink eyes',
    subtitle: '',
    text: '',
    img: 'clip_eyes.gif',
    code: `
.elem {
  animation: blink 3s infinite linear;
}
@keyframes blink {
  0%, 4%, 10%, 34%, 40%, 100% {
    transform: scaleY(1);
  }

  7%, 37% {
    transform: scaleY(0);
  }
}
        `,
  },
]