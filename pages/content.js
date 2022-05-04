const content = (theme) => {
    return (`
        <div class="course-info-block">
            <div class="forseable-course">
                <span> ${theme.object} </span>
            </div>
            <div class="course-time-table">
                <p> ${theme.subject && theme.subject} </p>
            </div>
        </div>
        <div class="post single-post eveninglook">
            <div class="courseContent">
                ${contentItem(theme.themes)}
            </div>
        </div>
    `)
}