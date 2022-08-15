const dom_js = [
    {
        title: '',
        subtitle: 'забираем клик по нажатию и добавляем',
        text: '',
        code: `
colorSwitch2.addEventListener('click', startSortArr);

function startSortArr() {
    this.removeEventListener('click', startSortArr);
    this.addEventListener('click', dismissSortArr);
}

function dismissSortArr () {
    this.removeEventListener('click', dismissSortArr);
    this.addEventListener('click', startSortArr);
} `,
    },
    {
        title: '',
        subtitle: '',
        text: '',
        code: `

        `,
    },
]
