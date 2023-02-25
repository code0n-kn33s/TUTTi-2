const body = obj => {

    const switchedPages = () => {
      switch(obj.id) {
        case 'theory':
          return blockTheory(obj)

        case 'methods':
          return blockMethods(obj)

        default :
          return pens(obj)
    }}

    return (`
      <div class="content">
      ${switchedPages()}
      <span id="big-photo"></span>
      </div>
    `)
  }
    // ${obj.id !== 'theory' ? pens(obj) : blockTheory(obj)}