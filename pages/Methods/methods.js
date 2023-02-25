const blockMethods = notes => {
  return (`
    <div class="methods-container">
      <h1>${notes.titlePage}</h1>
      <div class="methods-content">
        ${listMethodsPen(notes)}
      </div>
      <span id="big-photo"></span>
    </div>
  `)
}