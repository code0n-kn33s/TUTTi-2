let foo = `
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
`



const styleSheets = [
    // {
    //     title: '',
    //     subtitle: '',
    //     text: '',
    //     code: '',
    // },
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
        title: 'greed columns',
        subtitle: 'Автоматичесски расстягиваются, а также сворациваются при респонсе',
        text: '',
        code: `
display: grid;
gap: 2vw;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                `,
    },
    {
        title: 'include scripts to DOM',
        subtitle: '',
        text: '',
        code: `
// paths from index.html
const connectFiles = [ './script1.js', './script2.js', ]
// ------------> загрузить скрипт в dom
function loadScript(src) {
let script = document.createElement('script');
script.src = src;
document.head.append(script);
}

for (let i = 0; i < connectFiles.length; i++) {
loadScript(connectFiles[i])
}
            `,
    },
]
