const asideItem = (subjectsMenu) => {
    let menu =  subjectsMenu.map((subj, i) => (`
        <li class="course-item tabs-nav-item ${i === 0 && 'active'}" onclick="openmark(event, '${subj.key.trim()}')">
            <div class="course-title">${subj.object}</div>
            ${(subj.subject) && `<div class="course-duration">${subj.subject}</div>`}
        </li>
    `))

    return menu.join('')
}