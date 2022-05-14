function openmark(evt, mark) {
  window.scrollTo(0, 0);

  const nav = document.querySelectorAll('.tabs-nav-item');
  const content = document.querySelectorAll('.tabs-content-item');

  // write next classListremove
  // content.classList.remove('active');

  for (let i = 0; i < nav.length; i++) {
    nav[i].className = nav[i].className.replace(' active', '');
  }
  for (let i = 0; i < content.length; i++) {
    content[i].className = content[i].className.replace(' active', '');
  };

  evt.currentTarget.className += ' active';
  document.getElementById(mark).className += ' active';
};