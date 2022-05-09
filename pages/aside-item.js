const asideItem = (subjectsMenu) => {
    let menu =  subjectsMenu.map((subj, i) => (`
        <li class="button-gradient effect-shine course-item tabs-nav-item ${i === 0 && 'active'}" onclick="openmark(event, '${subj.key.trim()}')">
            <div class="course-title">${subj.object}</div>
            <div class="course-price"><span>2900 грн.</span></div>
            <div class="course-duration">${subj.subject}</div>
        </li>
    `))

    return menu.join('')
}