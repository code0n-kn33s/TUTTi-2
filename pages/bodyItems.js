const bodyItems = obj => {
    let arrayTheory = obj.data.map((item, i) => {
        return (`
                <div class="tabs-content-item ${i === 0 && 'active'}"
                id="${item.key}">
                    <div class="head-section">
                        <h1 class="course-main-title">${obj.titlePage}</h1>
                        <div class="eye-overlay">${eye()}</div>
                    </div>
                    <div class="container-overlay">
                        <div class="container">
                            <div class="main-content" class="clearfix">

                                <div class="course-info-wrapper">
                                    ${content(item)}
                                </div>

                                <div class="pin-wrapper">
                                    <div class="courseSideBar">
                                        ${asideItem(obj.data)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    })

    return arrayTheory.join('')
}
