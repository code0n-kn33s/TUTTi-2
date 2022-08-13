// aside
function switchAside() {
  document.querySelector('.aside-list').onclick = (item) => {
    const anchor = item.target.getAttribute('data-anchor');

    document.querySelectorAll('.content-anchor').forEach(item => item.classList.remove('active'))

    document.querySelector(`#${anchor}`).classList.toggle('active');
  }
}

// accordion
// function toggleAccordion(elem) {
//   const elems = document.querySelectorAll('.accordion-button')

//   elems.forEach(item => item.onclick = () =>{})
// }
function toggleAccordion(val) {
  console.log('val', $(`#button-${val}`))



  // const itemToggle = this.getAttribute('aria-expanded');
  // for (i = 0; i < elems.length; i++) {
  //   elems[i].setAttribute('aria-expanded', 'false');
  // }

  // if (itemToggle == 'false') {
  //   console.log('on', this.getAttribute('aria-expanded'))
  //   this.setAttribute('aria-expanded', 'true');
  // }

}