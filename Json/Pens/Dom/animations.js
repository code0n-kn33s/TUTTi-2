const animations = [
  {
    title: 'background-text',
    subtitle: 'Движущийся background для БУКВ',
    text: '',
    img: 'background-text.png',
    code: `
#start_game {
  font-family: 'Arial Narrow', Arial, sans-serif;
  display: block;
  font-size: 32px;
  font-weight: 900;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: url(./game-monster/ski.jpeg);
  animation: 9s textBackground alternate ease-in-out infinite;

  background-repeat: no-repeat;
  background-position: 280% center;
  background-size: 150%;
}

#start_game:hover {
  animation-play-state: paused;
}

@keyframes textBackground {
  100% {
    background-position: 0% center;
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
  {
    title: 'Хвостик при движении',
    subtitle: '',
    text: '',
    img: 'Cometa.png',
    code: `
  .example {
      animation: example-animation 1s linear infinite;
  }

  .example:after {
      animation: example-animation 1s linear infinite
      animation-delay: 50ms;
  }
        `,
  },
]