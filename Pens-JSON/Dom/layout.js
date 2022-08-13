const layout = [
  {
      title: 'margin: auto;',
      subtitle: 'Отправить элемент в другой угол',
      text: '',
      img: 'margin-auto.png',
      code: `
display: flex;
margin: auto; // посередине
margin-top: auto; // внизу
margin-left: auto; // справа
      `,
  },
  {
    title: 'greed columns',
    subtitle: 'Автоматичесски расстягиваются, а также сворациваются при респонсе',
    text: '',
    code: `
display: grid;
gap: 2vw;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            `,
},
  {
    title: 'greed selectors',
    subtitle: 'Свойства GRID',
    text: '',
    code: `
.list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  align-items: end;
}
            `,
},
]