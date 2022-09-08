const renderAccordionItems = params => {
  return params.data.data.map((section) => `
    <div class="accordion-item">
      <button id='button-${section.key}' class="accordion-button" aria-expanded="false" onclick="toggleAccordion('${section.key}')">
        <span class="accordion-title">${section.title}</span>
        <span class="icon" aria-hidden="true"></span>
      </button>
      <div class="accordion-content">
        ${accordionItemContent(section)}
      </div>
    </div>`).join('')
}
