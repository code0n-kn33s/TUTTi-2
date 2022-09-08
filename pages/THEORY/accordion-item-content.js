
const accordionItemContent = section => {
  const array2d = accordionItemContentCompare(section)

  let navs = []
  let blocks = []

  array2d.map(item => {
    navs.push(item[0])
    blocks.push(item[1])
  })

  let render = `
    <div>
      <ul class="nav-links">${navs.join('')}</ul>

      <div class="articles"> ${blocks.join('')} </div>
    </div>
  `

  return render
}


const accordionItemContentCompare = sectionItems => {
  return sectionItems.blocks.map((article) => {
    const id = uid()
    return ([
      `<li><a href="#${id}">${article.title}</a></li> `,

      `<div id="${id}" class="theory-article">
          ${(article.title) ? `<div class="accordion-content-title yellow-title">${article.title}</div>` : ''}

          ${(article.subtitle) ? `<div class="accordion-content-method">${article.subtitle}</div>` : ''}

          ${(article.img) ? `
            <div class="accordion-content-item">
              <img onclick="open_photo('./assets/img/study/${article.img}')" class="accordion-content-img photo" src="./assets/img/study/${article.img}" />
            </div>
            ` : '' }
          ${(article.code) ? `
            <div class="accordion-content-item">
              <pre class="accordion-content-code code ${id}-code"> <code>
                <xmp style='padding:0px;margin:0px;'>${article.code}</xmp>
              </code> </pre>
            </div>
            ` : ''}
          ${(article.text) ? `
            <div class="accordion-content-item">
              <div class="accordion-content-text">
                <div class="accordion-content-text">${article.text}</div>
              </div>
            </div>
          ` : ''}
          ${(article.list) ? `
            <div class="accordion-content-item">
              <div class="accordion-content-list">
                <div class="accordion-content-list-title">${article.list.listTitle}</div>
                <ul class="accordion-content-list-items">${article.list.listItems.map(listText => `<li class="accordion-content-list-item">${listText}</li>`).join('')}</ul>
              </div>
            </div>
          ` : ''}
          ${(article.link) ? `
            <div class="accordion-content-item">
              <div class="accordion-content-link">
                <a href="${article.link}">${article.link}</a>
              </div>
            </div>
          ` : ''}
        </div>`
    ])
  })
}