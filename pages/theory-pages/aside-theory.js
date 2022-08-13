const asideTheory = theory => `
  <div class="aside">
    <ul class="aside-list">
      ${asideTheoryItems(theory)}
    </ul>
  </div>
`

const asideTheoryItems = theoryBlock => theoryBlock.data.map((theoryItem) => (`
    <li class="aside-item" data-anchor="${theoryItem.key}" onclick="switchAside()">${theoryItem.title}</li>
`)).join('')