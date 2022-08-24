const elems = [
  {
    title: 'Native update arrows',
    subtitle: '',
    text: '',
    img: 'update_arrows.png',
    code: `
HTML
<div class="upd_button" onclick="function() {window.location.reload()}">
  <span>& #10552;</span>
  <span>& #10552;</span>
</div>

// CSS
.upd_button {
  font-size: 28px;
  height: fit-content;
  transition: .2s;
  cursor: pointer;
  margin-right: 15px;
}

.upd_button span:first-of-type {
  display: inline-block;
  transform: rotate(180deg);
  margin-right: -5px;
}

.upd_button:hover {
  animation: updateAnimation .2s ease-in-out;
}

@keyframes updateAnimation {
  100% {
    transform: rotate(180deg);
  }
}
        `,
},
  {
    title: 'Полудуга',
    subtitle: '',
    text: '',
    img: 'smile.png',
    code: `
div{
  width: 100px;
  height: 50px;
  border-radius: 100px 100px 0 0;
  border-top: 5px solid red;
  border-left: 5px solid red;
  border-right: 5px solid red;
}
        `,
},
]