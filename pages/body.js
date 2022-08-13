const body = obj => {
    console.log('obj', obj)
    return (`
    <div class="content">
    ${obj.id !== 'theory' ? pens(obj) : blockTheory(obj)}
      <span id="big-photo"></span>
    </div> `)
  }