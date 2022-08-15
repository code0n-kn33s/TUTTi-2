const theoryContentItems = notes => {
  return notes.data.map((accordions, i) => `
    <div class="content-anchor ${window.localStorage.getItem('currentTheory') === accordions.key ? 'active' : ''}" id="${accordions.key}">
      <div class="accordion-container">
        <div class="accordion" id="accordion_${accordions.key}">
          ${renderAccordionItems(accordions)}
        </div>
      </div>
    </div>
  `).join('')
}