const contentItem = (posts) => {
    return posts && posts.map((post, index) => (`
        <div class="courseContentItem">
            <fieldset class="field left-bordered">
                <legend class="field-title">${index}. ${post.title}</legend>
                <blockquote class="field-method">${post.subtitle}</blockquote>
                <span class="field-theory">${post.text}</span>
                <pre class="code">
                    <code>${post.code}</code>
                </pre>
                <div>
                    <button class="button-link">get started</button>
                </div>
            </fieldset>
        </div>
    `)).join('')
}