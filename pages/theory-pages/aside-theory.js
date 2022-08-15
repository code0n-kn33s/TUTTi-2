const asideTheory = theory => `
  <div class="aside">
    <ul class="aside-list">
      ${asideTheoryItems(theory)}
    </ul>
  </div>
`

const asideTheoryItems = theoryBlock => theoryBlock.data.map((theoryItem) => (`
    <li class="aside-item ${ window.localStorage.getItem('currentTheory') === theoryItem.key ? 'active' : ''}" id="aside-${theoryItem.key}" data-anchor="${theoryItem.key}" onclick="switchAside('${theoryItem.key}')">${theoryItem.title}</li>
`)).join('')