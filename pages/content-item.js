const contentItem = (posts) => {
    return posts && posts.map((post, index) => (`
        <div class="post-item left-bordered">
            <div class="field ">
                ${(post.title) && `<div class="field-title">${index}. ${post.title}</div>`}

                <div class="field-method">${post.subtitle}</div>
                <div class="field-theory">${post.text}</div>
                ${(post.code) && `<pre class="code"> <code>${post.code}</code> </pre>`}
            </div>
        </div>
    `)).join('')
}