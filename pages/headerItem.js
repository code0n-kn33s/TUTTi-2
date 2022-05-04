// ---------------> output header
const headerItem = (connectNavs) => {
    return connectNavs.map(nav => (
        `<li data-link=${nav.key} id='nav-${nav.key}'>${nav.name}</li>`
    )).join('')
}
