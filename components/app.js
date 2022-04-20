(function () {
    const navList = document.getElementById('nav-list')
    const app = document.getElementById('app')
    const titlePage = document.head.getElementsByTagName('title')[0]
    let currentLink = ''

    navList.onclick = function (e) {
        e.stopPropagation()

        if (e.target.tagName === 'LI') {
            currentLink = e.target.getAttribute('data-link')
            app.innerHTML = ''
            app.insertAdjacentHTML(
                "beforeend",
                pageConstructor(eval(currentLink))
            )

            titlePage.innerHTML = eval(currentLink).titlePage
        }
    }
})()