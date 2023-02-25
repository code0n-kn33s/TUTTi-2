const listMenthodsItems = methods => {

  return methods.themes.map(method => {
    const uniqueId = uid()
    return `
    <div class="method-item  ${uniqueId}-parent ${(method.img || method.text || method.code) && 'hoverable'}" onclick=this.classList.toggle('active')>
        <div class="method">
            ${(method.method) ? `<div class="method-method ">${method.method}</div>` : ''}

            ${(method.title) ? `<div class="method-title ">${method.title}</div>` : ''}

            ${(method.example) ? `<div class="method-example ">${method.example}</div>` : ''}

            ${(method.values) ? `<div class="method-values ">${method.values}</div>` : ''}
        </div>

        ${(method.img || method.text || method.code) && `<div class="hidden-method">
            ${(method.img) ? `
            <img onclick="open_photo('./assets/img/study/${method.img}')" class="method-img photo" src="./assets/img/study/${method.img}" />` : ''}

            ${(method.text) ? `<div class="method-text">${method.text}</div>` : ''}

            <div class="methods-code">
                ${(method.code) ? `
                <pre class="code ${uniqueId}-code"> <code>
                    <xmp style='padding:0px;margin:0px;'>${method.code}</xmp>
                </code> </pre>
                    ` : ''}
            </div>
        </div>`}
    </div>
  `}).join('')
}