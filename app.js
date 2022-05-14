
(function () {
    const header = document.getElementById('header');



    header.insertAdjacentHTML(
        "beforeend",
        headerConstructor(themes)
    )

    const navList = document.getElementById('nav-list')
    const app = document.getElementById('app')
    const currentMain = document.getElementById('nav-async')
    const titlePage = document.head.getElementsByTagName('title')[0]
    let currentLink = ''

    const filterPage = (key) => themes.filter(item => item.key === key)

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
            hljs.highlightAll();

        }
    }

    // current page
    document.addEventListener('DOMContentLoaded', () => currentMain.click())

})()