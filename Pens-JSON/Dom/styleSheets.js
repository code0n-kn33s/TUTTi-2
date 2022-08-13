const styleSheets = [
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
