const usefull = [
    {
        title: '(UID) uniqum ID',
        subtitle: 'Генерация уникального id',
        text: '',
        code: `
// uniqum ID function
const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// uniqum ID array
const uid = function(num){
    let arr = [];
    let id = () => Date.now().toString(36) + Math.random().toString(36).substr(2)
    for(let i = 0; i < num; i++ ) {
        arr.push(id())
    }
    return arr;
} `,
    },
    {
        title: 'random',
        subtitle: 'random number',
        text: '',
        code: `
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}`,
    },
    {
        title: 'перемешать - shuffle',
        subtitle: 'рандомно разбросать елементы',
        text: '',
        code: `
const shuffle = (arr) => {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
}`,
    },

]
