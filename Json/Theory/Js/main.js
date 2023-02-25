const js_main = [{
  title: 'Нинзя-код',
  subtitle: '',
  img: '',
  link: 'https://learn.javascript.ru/ninja-code',
  text: 'Funny story about mistakes in code',
  code: ``,
},
{
  title: 'Side-effect',
  subtitle: '',
  img: '',
  link: '',
  text: '(side-effect) – возможность в процессе выполнения своих вычислений: читать и модифицировать значения глобальных переменных, осуществлять операции ввода-вывода, реагировать на исключительные ситуации, вызвать их обработчиков.',
  code: ``,
},
{
  title: 'Деструктуризация []',
  subtitle: '',
  img: '',
  text: 'Позволяет перечислить определенный список состояний ',
  list: [],
  code: `
const skills: BarType = [true, 'str1', 'str2','str3', 'and', 'so', 'deeper', 54]
const [str1, str2, str3, ...so] = skills;

str1 // true
str2 // str1
str3 // str2
so // [ 'str3', 'and', 'so', 'deeper', 54 ] `,
},
{
  title: 'a ?? b() (eсли a === null, undef то вызови b) && - наоборот',
  subtitle: '',
  img: '',
  text: ' ',
  list: [],
  code: ``,
},
{
  title: 'in - operator',
  subtitle: 'Проверка есть ли свойство в обьекте',
  text: '',
  img: '',
  code: `'name' in {name: 'asdf'} // true `,
},
{
  title: 'Неявное преобразование типов',
  subtitle: '',
  text: '',
  img: '',
  code: `
х + // Эквивалент String(x)
+х // Эквивалент Number(x)
!!х // Явивалент Boolean(x) `,
},

]