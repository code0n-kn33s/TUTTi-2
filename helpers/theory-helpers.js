// aside
function switchAside(anchor) {
  const clicked = $(`#aside-${anchor}`)
  const findedBlock = $(`#${anchor}`)

  $l('.content-anchor').forEach(item => item.classList.remove('active'))
  $l(`.aside-item`).forEach(item => item.classList.remove('active'));

  findedBlock.classList.toggle('active');

  clicked.classList.add('active');

  window.localStorage.setItem('currentTheory', anchor)
}

// accordion
function toggleAccordion(val) {
  const clickedItemAccordion = $(`#button-${val}`)

  const valueAccordionItem = clickedItemAccordion.getAttribute('aria-expanded');

  (valueAccordionItem == 'false') ? clickedItemAccordion.setAttribute('aria-expanded', true) : clickedItemAccordion.setAttribute('aria-expanded', false)
}