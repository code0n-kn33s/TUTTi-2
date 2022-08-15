const js_tricks = [
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
    {
        title: 'переопределяем console.log',
        subtitle: 'и выводим ее в HTML',
        text: '',
        code: `
//JS
console._log = console.log;
console.log = function() {
    document.querySelector('.result').innerText = arguments[0];
    console._log.apply(null, arguments);
}

var a = 5,
    b = 11,
    result = a + b;

console.log(result);

// HTML
<p class="result"></p>
            `,
    },
]