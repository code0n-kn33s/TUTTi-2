const blockTheory = notes => {
  return (`
    <div class="theory-container">
      <div class="theory-content">
        <div class="aside-wrap">
          <h1>THEORY <br>HERE!!</h1>
          ${asideTheory(notes)}
        </div>
        <div class="content-wrap">
          ${theoryContentItems(notes)}
        </div>
        <span id="big-photo"></span>
      </div>
    </div>
  `)
}