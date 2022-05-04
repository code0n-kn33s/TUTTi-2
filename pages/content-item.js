const contentItem = (posts) => {
    return posts && posts.map((post, index) => (`
        <div class="courseContentItem">
            <fieldset>
                <legend>${index}. ${post.title}</legend>
                <blockquote>${post.subtitle}</blockquote>
                <span>${post.text}</span>
                <pre class="code">
                    <code>
                        ${post.code}
                    </code>
                </pre>
                <div>
                    <button class="button-gradient">get started</button>
                </div>
            </fieldset>
        </div>
    `)).join('')
}