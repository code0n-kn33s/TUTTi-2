
(() => {
    const navList = document.getElementById('nav-list')
    const app = document.getElementById('theory')

    // start page
    const startPageLink = 'dom';
    // const startPageLink = 'async';

    const currentPage = !localStorage.getItem('current_page') ? startPageLink : localStorage.getItem('current_page')
    const titlePage = document.head.getElementsByTagName('title')[0]
    const headerItems = document.querySelectorAll('.header-item');
    let currentLink = ''

    const setPage = (e) => {
        e.stopPropagation()

        if (e.target.tagName === 'LI') {
            currentLink = e.target.getAttribute('data-link')

            const elemCurrentLink = $(`#nav-${currentLink}`)
            headerItems.forEach(item => item.classList.remove('active'))
            elemCurrentLink.classList.toggle('active')

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



    document.addEventListener('DOMContentLoaded', () => document.getElementById(`nav-${currentPage}`).click())

    navList.addEventListener('click', (e) => setPage(e))

})()