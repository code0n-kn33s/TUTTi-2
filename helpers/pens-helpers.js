// (function() { })()
function openmark(evt, mark) {
  window.scrollTo(0, 0);

  const nav = document.querySelectorAll('.tabs-nav-item');
  const content = document.querySelectorAll('.tabs-content-item');

  for (let i = 0; i < nav.length; i++) {
    nav[i].className = nav[i].className.replace(' active', '');
  }
  for (let i = 0; i < content.length; i++) {
    content[i].className = content[i].className.replace(' active', '');
  };

  document.getElementById(mark).querySelector(`.${mark}`).className += ' active';
  document.getElementById(mark).className += ' active';
};

function showEntire (id) {
  const parent = document.querySelector(`.${id}-parent`)
  const reveil = document.querySelector(`.${id}-reveil`)

  reveil.classList.toggle('active')
  parent.classList.toggle('active')
}



