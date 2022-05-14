const bodyItems = obj => {
    let arrayTheory = obj.data.map((item, i) => {
        return (`
                <div class="tabs-content-item ${i === 0 && 'active'}" id="${item.key}">
                    <div class="head-section">

                        <div class="course-info-block">
                            <div class="course-time-table">
                                <div class="courseSideBar"> ${asideItem(obj.data)} </div>
                            </div>
                            <div class="forseable-course">
                                <span class="course-main-title-text text-gradient">${obj.titlePage}</span>
                                <span> ${item.object} </span>
                            </div>
                        </div>
                    </div>
                    <div class="container-overlay">
                        <div class="container">
                            <div class="main-content">
                                <div class="course-info-wrapper"> ${content(item, obj)} </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    })

    return arrayTheory.join('')
}
