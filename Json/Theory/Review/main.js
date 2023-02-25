const review_main = [
    {
        title: 'Алгоритмы',
        subtitle: '',
        img: '',
        text: `
            Алгоритм - Это последовательность однозначных действий, которая должна привести к желаемому результату. Другими словами, алгоритм – это пошаговая инструкция для компьютера.
        `,
        list: [],
        code: `

        `,
    },
    {
        title: 'Замыкания',
        subtitle: '',
        img: '',
        text: `

        `,
        list: [],
        code: `
let name = "John";

function sayHi() {
    alert("Hi, " + name);
}

name = "Pete";

sayHi(); // что будет показано: "John" или "Pete"?
        `,
    },
    {
        title: 'LexicalEnvironment',
        subtitle: '',
        img: '',
        text: `
            Обьект, который формируется при компиляции кода. У каждой переменной, функции, блока кода({все что в фигурных скобках}). У этого обьекта будет ссылка на внешний обьект лексичесского окружения. Также в нем присудствует контекст this.
        `,
        list: ['Environment Record(this)', 'Ссылка на внеший обьект'],
        code: `

        `,
    },
    {
        title: 'Перемення',
        subtitle: '',
        img: '',
        text: `
            Свойство Environment Record.
            Переменная – это свойство специального внутреннего объекта, связанного с текущим выполняющимся блоком/функцией/скриптом.
        `,
        list: [],
        code: `

        `,
    },
    {
        title: 'let',
        subtitle: '',
        img: '',
        text: `
            В отличие от переменных, объявленных с помощью let, они полностью инициализируются не тогда, когда выполнение доходит до них, а раньше, когда создаётся лексическое окружение.
        `,
        list: [],
        code: `

        `,
    },
    {
        title: 'callback',
        subtitle: '',
        img: '',
        text: `
            Функция, которая передается аргументом в другую функцию
            и выполнится после того как отработает основная функция.
        `,
        list: [],
        code: `
let func = (source, callback) => {
    let script = document.createElement('script');
    script.setAttribute('src', source)

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error("Не удалось загрузить скрипт $_{src}"));

    console.log(script)

    document.body.appendChild(script)
}

func('foo.js', function (error, script) {
    if(error) {
        console.log('Error!', error);
    } else {
        console.log('Success!', script);
    }
})
        `,
    },
    {
        title: 'callback-hell',
        subtitle: '',
        img: '',
        text: `
            Цепочка выполнений заменяющая промисы
        `,
        list: [],
        code: `
****jquery
function showCommentByUserEmal(email) {
    $.get('/getUser', { email: email }, function (error, user) {
        $.get('/getComments', { userId: user.id }, function (error, comments) {
            // something
        })
    })
}

showCommentByUserEmal('sara@gamil.com')
*****native js
let func = (source, callback) => {
    let script = document.createElement("script");
    script.setAttribute("src", source);

    script.onload = () => callback(null, script);
    script.onerror = () =>
      callback("Не удалось загрузить скрипт $_{src}");

    document.body.appendChild(script);
  };

  func("foo.js", function (error, script) {
    if (error) {
      console.log("Error! foo", error);
    } else {
      console.log("Success! foo", script);

      func("./Json/Pens/JS/async.js", function (error, script) {
        if (error) {
          console.log("Error! async", error);
        } else {
          console.log("Success! async", script);
          fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then(arr => console.log(arr.json()))

          func("./Json/Pens/JS/dom_js.js", function (error, script) {
            if (error) {
              console.log("Error! dom_js", error);
            } else {
              console.log("Success! dom_js", script);
            }
          });
        }
      });
    }
  });
`,
    },


]
