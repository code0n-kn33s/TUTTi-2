const contentItems = (posts) => {
    return posts && posts.map((post, index) => {
        const uniqueId = uid();

        return (`
        <div class="post-item left-bordered ${uniqueId}-parent">
            <div class="field">
                <div class="field-top">
                    ${(post.title) ? `<div class="field-title yellow-title">${index}. ${post.title}</div>` : ''}
                    <div class="field-method">${post.subtitle}</div>
                </div>
                <div class="field-middle">
                    ${(post.text) ? `<div class="field-theory ${(post.img) ? 'withimg' : ''}">${post.text}</div>` : ''}
                </div>
                ${(post.img) ? `
                    <img onclick="open_photo('./assets/img/study/${post.img}')" class="field-img photo" src="./assets/img/study/${post.img}" />` : ''}

                ${(post.code) ? `
                <pre class="code ${uniqueId}-code"> <code>
                    <xmp style='padding:0px;margin:0px;'>${post.code}</xmp>
                </code> </pre>
                    ` : ''}
            </div>

            ${(post.code.length) ? `
            <div class="btn-group-actions">
                <div class="show-all ${uniqueId}-reveil" onClick="showEntire('${uniqueId}')" >
                    <span>&#8595;</span>
                </div>
            </div>
            ` : ''}

        </div>
    `)}).join('')
}