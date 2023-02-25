const renderAccordionItems = params => {
  const id = uid()

  return params.data.data.map((section) => {

    return `
    <div class="accordion-item">
      <button id='button-${section.key}' class="accordion-button" aria-expanded="false" onclick="toggleAccordion('${section.key}')">
        <span class="accordion-title">${section.title}</span>
        <ul class="nav-links-top">
          ${section.blocks.map(one => `<li><a class="nav-top-item" href="#${id}">${one.title}</a></li>`).join('')}
        </ul>
        <span class="icon" aria-hidden="true"></span>
      </button>
      <div class="accordion-content">
        ${accordionItemContent(section, id)}
      </div>
    </div>`}).join('')
}
