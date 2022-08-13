const blockTheory = notes => {
  // console.log('block theory', notes)
  return (`
    <div class="theory-container">
      <div class="theory-content">
        <div class="aside-wrap">
          <h1>THEORY <br>HERE!!</h1>
          ${asideTheory(notes)}
        </div>
        <div class="content-wrap">
          ${theoryContent(notes)}
        </div>
        <span id="big-photo"></span>
      </div>
    </div>
  `)
}

const theoryContent = notes => {
  console.log('block id', notes)

  return notes.data.map((note, i) => `
    <div class="content-anchor ${i === 0 ? 'active' : ''}" id="${note.key}">
      <div class="accordion-container">
        <div class="accordion">
          <div class="accordion-item">
            <button id='button-${note.key}' class="accordion-button" aria-expanded="true" onclick="toggleAccordion('${note.key}')">
              <span class="accordion-title">${note.title}</span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content">
              ${accordionContent(note)}
            </div>
          </div>
        </div>
      </div>
    </div>

  `).join('')
}

const accordionContent = note => {
  const array2d = accordionContentCompare(note)

  let navs = []
  let blocks = []

  array2d.map(item => {
    navs.push(item[0])
    blocks.push(item[1])
  })

  return `
    <ul class="nav-links">${navs.join('')}</ul>

    <div class="articles"> ${blocks.join('')} </div>
  `
}


const accordionContentCompare = note => {
  return note.themes.map((article) => {
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
        </div>`
    ])
  })
}