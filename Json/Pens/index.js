(function () {
    const themes = [
        { key: 'pens_react', name: 'React' },
        { key: 'pens_dom', name: 'DOM' },
        { key: 'pens_ts', name: 'TS' },
        { key: 'pens_js', name: 'JS' },
        { key: 'pens_parts', name: 'Parts' },
        { key: 'pens_design', name: 'Design' },
      ]

  window.localStorage.setItem('themes', JSON.stringify(themes))
})()
