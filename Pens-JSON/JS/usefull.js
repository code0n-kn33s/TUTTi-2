const usefull = [
    {
        title: 'uniqum ID',
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

]
