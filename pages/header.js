// ---------------> output header
(function () {
    const themes = [
      { key: 'pens_react', name: 'React' },
      { key: 'pens_dom', name: 'DOM' },
      { key: 'pens_js', name: 'JS' },
      { key: 'pens_parts', name: 'Parts' },
      { key: 'pens_design', name: 'Design' },
    ]

    window.localStorage.setItem('themes', JSON.stringify(themes))

    const headerItems = (connectNavs) => {
        const currentPage = localStorage.getItem('current_page');
        return connectNavs.map(nav => (
            `<li data-link=${nav.key} id='nav-${nav.key}' class="header-item text-underline ${currentPage === nav.key ? 'active' : ''}">${nav.name}</li>`
        )).join('')
    }

    const headerConstructor = (connectNavs) => {
        const currentPage = localStorage.getItem('current_page');

        return `
            <header>
                <ul id="nav-list">
                    ${headerItems(connectNavs)}
                </ul>
                <p>Programs: <a href="./programs/cofeMachine/coffeM_index.html">COFFE</a></p>
                <p>
                    <a data-link="theory" id="nav-theory" class="header-item theory-link ${currentPage === 'theory' ? 'active' : ''}">Theory</a>
                    <a href="./practice.html">Practice</a>
                </p>

                <div class="logo"></div>
                <div class="upd_button" onclick="document.location.reload()">
                   <span>&#10552;</span>
                   <span>&#10552;</span>
                </div>
            </header>`
    }

    const header = document.getElementById('header');

    header.insertAdjacentHTML(
        "beforeend",
        headerConstructor(JSON.parse(localStorage.getItem('themes')))
    )
})()

