const body = obj => {
    console.log('>> obj', obj);
    return (` <div class="content"> ${bodyItems(obj)} </div> `)
  }