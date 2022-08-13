const common_parts = [{
    title: 'Switch blocks',
    subtitle: 'Переключать блоки',
    text: '',
    img: 'block_switch.gif',
    code: `
// HTML
<label for="jacket-input" class="check-group">
    <input name="select-group" value="jacket" id="jacket-input" type="radio">
    <span>Куртки</span>
</label>
<label for="svitshot-input" class="check-group">
    <input name="select-group" id="svitshot-input" value="svitshot" type="radio">
    <span>Свитера</span>
</label>
<label for="tshirts-input" class="check-group">
    <input name="select-group" value="tshirts" id="tshirts-input" type="radio">
    <span>Футболки</span>
</label>
<label for="pants-input" class="check-group">
    <input name="select-group" value="pants" id="pants-input" type="radio">
    <span>Штаны</span>
</label>


<div id='jacket' class="display-group deactive">блок с куртками</div>
<div id='svitshot' class="display-group deactive">блок с свитерами</div>
<div id='tshirts' class="display-group deactive">блок с футболками</div>
<div id='pants' class="display-group deactive">блок со штанами</div>

// JS
document.querySelectorAll('.check-group').forEach(s => {
    s.addEventListener('click', function (e) {
      document.querySelectorAll('.display-group').forEach(d => d.classList.add('deactive'));
      if (e.target.tagName === 'INPUT') document.getElementById(e.target.value).classList.remove('deactive');
    });
  });

// CSS
.deactive {
    display: none;
  }
`,
  },
  {
    title: 'click IMG',
    subtitle: 'Увеличить IMG в popup',
    text: '',
    img: 'increase_img.png',
    code: `
// HTML
<span id="big-photo"></span>
<img onclick="open_photo('https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg')"
  class="photo" src="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg">

// JS
function open_photo(photo) {
  document.getElementById("big-photo").innerHTML =
    ("<div onclick='close_photo()' class='photo_wrapper'><img src='" + photo + "'> </div>")
}

function close_photo() {
  document.getElementById("big-photo").innerHTML = ""
}

// CSS
.photo {
  width: 200px;
}

.photo_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  animation: fadeImg 0.4s ease;
}

.photo_wrapper img{
  display: block;
  width: 50%;
  height: fit-content;
}

@keyframes fadeImg {
  from {
    opacity: 0;
  }

  to {
    opacety: 1;
  }
}
`,
  },
  {
    title: 'Композиция',
    subtitle: '',
    text: '',
    code: `
function getFirstMatching(obj, value) {
  let result;
  Object.getOwnPropertyNames(obj).some(key => {
  if (obj[key] === value) {
    result = key;
    return true; // Stops the loop
  }
  });
  return result;
}
const obj = { a: 1, b: 2, c: 3, d: 4, e: 4 };
console.log(getFirstMatching(obj, 4)); // d
    `,
},
]