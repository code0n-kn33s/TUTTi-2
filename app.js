
(function () {
    const connectNavs = [
        { key: 'async', name: 'Асинхронная логика' },
        { key: 'objects', name: 'Обьекты' },
    ]

    const header = document.getElementById('header')

    header.insertAdjacentHTML(
        "beforeend",
        headerConstructor(connectNavs)
    )

    const navList = document.getElementById('nav-list')
    const app = document.getElementById('app')
    const currentMain = document.getElementById('nav-objects')
    const titlePage = document.head.getElementsByTagName('title')[0]
    let currentLink = ''

    navList.onclick = function (e) {
        e.stopPropagation()

        if (e.target.tagName === 'LI') {
            currentLink = e.target.getAttribute('data-link')
            app.innerHTML = ''
            app.insertAdjacentHTML(
                "beforeend",
                body(eval(currentLink))
            )

            titlePage.innerHTML = 'JS:' + eval(currentLink).titlePage
        }
    }

    document.addEventListener('DOMContentLoaded', () => currentMain.click())
})()