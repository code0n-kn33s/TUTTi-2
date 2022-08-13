(function () {
  const themes = [
    { key: 'dom', title: 'dom', name: 'DOM' },
    { key: 'react', title: 'react', name: 'React' },
    { key: 'js', title: 'js', name: 'JS' },
    { key: 'parts', title: 'parts', name: 'Parts' },
    { key: 'design', title: 'design', name: 'Design' },
  ]

  window.localStorage.setItem('themes', JSON.stringify(themes))
})()
