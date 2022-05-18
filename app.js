
(function () {
    const header = document.getElementById('header');

    header.insertAdjacentHTML(
        "beforeend",
        headerConstructor(JSON.parse(localStorage.getItem('themes')))
    )

    const navList = document.getElementById('nav-list')
    const app = document.getElementById('app')

    const currentPage = !localStorage.getItem('current_page') ? 'async' : localStorage.getItem('current_page')
    const titlePage = document.head.getElementsByTagName('title')[0]
    let currentLink = ''

    function setPage(e) {
        e.stopPropagation()

        if (e.target.tagName === 'LI') {
            currentLink = e.target.getAttribute('data-link')
            app.innerHTML = ''
            window.localStorage.setItem('current_page', currentLink)

            app.insertAdjacentHTML(
                "beforeend",
                body(eval(currentLink))
            )

            titlePage.innerHTML = 'JS:' + eval(currentLink).titlePage
            hljs.highlightAll();

        }
    }

    // current page
    // document.addEventListener('DOMContentLoaded', () => currentMain.click())

    console.log('>> currentPage', currentPage)
    console.log('>> document.getElementById(`nav-${currentPage}`)', document.getElementById(`nav-${currentPage}`))

    document.addEventListener('DOMContentLoaded', () => document.getElementById(`nav-${currentPage}`).click())
    // setPage(null ,'nav-async')

    navList.addEventListener('click', (e) => setPage(e))

})()