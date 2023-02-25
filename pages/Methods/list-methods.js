const listMethodsPen = notes => {
  let arrMethods = notes.data.map((note) => `
      <div class="list-methods-wrap" >
        <h3 class="list-methods-title">${note.title}</h3>
        ${listMenthodsItems(note)}
      </div>
  `)

  let colmnArr = [[],[],[],[],[]];
  let colmnStr = ``;

  for (let z = 0; z < arrMethods.length; z++) {
    const el = arrMethods[z];

    colmnArr[z%5].push(el)
  }

  for (let i = 0; i < 5; i++) {
    const el = colmnArr[i];

    colmnStr += `<div class="methods-column ">${el.join('')}</div>`
  }

  return colmnStr
}
