// ------------>  клик сработает один раз
let elem = document.getElementById('button')

function func() {
    alert('CLICK')
    this.removeEventListener('click', func)
}

elem.addEventListener('click', func)

// ------------>  меняет добавляет + 1 по клику
let elem = document.getElementById('button')

function func() {
    this.innerHTML = parseInt(this.innerHTML) + 1
}

elem.addEventListener('click', func)

// ------------> делегирование - общий обработчик события по клику
const el = document.getElementById('ul')

el.onclick = function (e) {
    e.target.style.color = 'blue'
}
// ------------> всплытие событий boobling
let el = `
<ul id="ul">
    UL
    <br>
    <li>LI
        <br>
        <div id="div">DIV
            <br>
            <span>
                SPAN
            </span>
        </div>  
    </li>
</ul>`

const ul = document.getElementById('ul')
const div = document.getElementById('div')
div.onclick = function (e) {
    // в этом месте мы запретили вплыти по клику 
    e.stopPropagation() 
    // так как div вложен в ul click не пойдет дальше вверх по dom
    this.style.color = 'blue'
    console.log('this', this)
}
ul.onclick = function (e) {
    this.style.color = 'red'
    console.log('this', this)
}

//  ------------> колличество ms выполнения кода
let timeStart = (new Date).getTime()
func = () => {
    let costArr = []
    for (let x = 0; x < 100000; x++) {
        costArr.push(x)
    }
    return (new Date).getTime() - timeStart
}

console.log('code ms: ', func())

//  ------------> вывести аватарку пользователя с github
httpGet('/article/promise/user.json')
  // 1. Получить данные о пользователе в JSON и передать дальше
  .then(response => {
    console.log(response);
    let user = JSON.parse(response);
    return user;
  })
  // 2. Получить информацию с github
  .then(user => {
    console.log(user);
    return httpGet(`https://api.github.com/users/${user.name}`);
  })
  // 3. Вывести аватар на 3 секунды (можно с анимацией)
  .then(githubUser => {
    console.log(githubUser);
    githubUser = JSON.parse(githubUser);

    let img = new Image();
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.appendChild(img);

    setTimeout(() => img.remove(), 3000); // (*)
  });

//  ------------> async await --- map users list
function foo(bar) {
    let data = fetch('https://reqres.in/api/users', { method: 'GET' })
        .then(myJson => myJson.json())
        .then(res => res.data)

    return data
}

async function bar(callback) {
    console.log('start bar')
    let getData = await callback()
    console.log('callback data', getData)
    console.log('end bar')

    const elem = document.getElementById('div')
    console.log('elem', elem);

    getData.map((user) => {
        return elem.insertAdjacentHTML(
            "beforeend",
            userLayout(user.first_name, user.email, user.avatar)
        )
    })
}

const userLayout = (name, email, img) => {
    return `
        <div style="padding: 20px">
            <img height="50" width="50" src="${img}"/>
            <div>Name: ${name}</div>
            <div>Email: ${email}</div>
        </div>`
}

bar(foo)

//  ------------> заносит в массив посимвольно то что мы вводим 
var outputStrings = [];
for (var i = 0, n = inputValues.length; i < n; ++i) {
  outputStrings.push(String(inputValues[i]));
}


//  ------------>
//  ------------>