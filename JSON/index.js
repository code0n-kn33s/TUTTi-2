(function () {
  const themes = [
    { key: 'async', name: 'Асинхронная логика' },
    { key: 'objects', name: 'Обьекты' },
    { key: 'dom', name: 'DOM' },
    { key: 'react', name: 'React' },
  ]

  window.localStorage.setItem('themes', JSON.stringify(themes))
})()