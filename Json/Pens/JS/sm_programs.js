const sm_programs = [
  {
      title: '+/-',
      subtitle: 'increment/decrement',
      text: '',
      code: `
//html
<div class="score"></div>
<button class="plus">+</button>
<button class="min">-</button>

//js
let score = 5

$('.plus').onclick = () => {
  score++
  $('.score').innerText = score
}
$('.min').onclick = () => {
  score--
  $('.score').innerText = score
}

$('.score').innerText = score
          `,
  },
]