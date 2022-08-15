function $(selector) {
  return document.querySelector(selector)
}
function $l(selector) {
  return document.querySelectorAll(selector)
}

const uid = function() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function open_photo(photo) {
  document.getElementById("big-photo").innerHTML =
    ("<div onclick='close_photo()' class='photo_wrapper'><img src='" + photo + "'> </div>")
}

function close_photo() {
  document.getElementById("big-photo").innerHTML = ""
}