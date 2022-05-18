// ---------------> output header
const headerItem = (connectNavs) => {
    const currentPage = localStorage.getItem('current_page');
    return connectNavs.map(nav => (
        `<li data-link=${nav.key} id='nav-${nav.key}' class="text-underline ${currentPage === nav.key && 'active'}">${nav.name}</li>`
    )).join('')
}
