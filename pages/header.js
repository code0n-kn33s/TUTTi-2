// ---------------> output header
const headerConstructor = (connectNavs) => {
    return header = `
        <header>
            <ul id="nav-list">
                ${headerItem(connectNavs)}
            </ul>
            <div class="logo"></div>
            <img src="./assets/img/design/bg-hero.png" class="header-background" />
        </header>`
}
