
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
          ${(article.title) ? `<div class="field-title yellow-title">${article.title}</div>` : ''}

          ${(article.subtitle) ? `<div class="field-method">${article.subtitle}</div>` : ''}

          ${(article.img) ? `
            <img onclick="open_photo('./assets/img/study/${article.img}')" class="field-img photo" src="./assets/img/study/${article.img}" />` : ''}
          ${(article.code) ? `
            <pre class="code ${id}-code"> <code>
              <xmp style='padding:0px;margin:0px;'>${article.code}</xmp>
            </code> </pre>
              ` : ''}
          ${(article.text) ? `
            <div class="field-middle">
              <div class="field-theory ${(article.img) ? 'withimg' : ''}">${article.text}</div>
            </div>
          ` : ''}
          ${(article.link) ? `
            <div class="field-middle">
              <a href="${article.link}">${article.link}</a>
            </div>
          ` : ''}
        </div>`
    ])
  })
}