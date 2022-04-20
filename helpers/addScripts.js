// paths from index.html
const connectFiles = [
    'assets/icon/logo.js',
    'components/app.js',

    'helpers/pageConstructor.js',
    'pages/async.js',
    'pages/objects.js'
]

const connectNavs = [
    {key: 'async', name: 'Асинхронная логика'},
    {key: 'objects', name: 'Обьекты'},
  ]


// ------------> загрузить скрипт в dom
function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

for (let i = 0; i < connectFiles.length; i++) {
    loadScript(connectFiles[i])
}


  // ---------------> output header
const headerConstructor = () => {
    let navMenu = connectNavs.map(nav => (
        `<li data-link=${nav.key}>${nav.name}</li>`
    ))

    const header = `
        <header>
            <div class="logo"></div>
            <ul id="nav-list">
                ${navMenu}
            </ul>
        </header>
    `

    return header
  }

  const header = document.getElementById('header')

  header.insertAdjacentHTML(
      "beforeend",
      headerConstructor()
  )