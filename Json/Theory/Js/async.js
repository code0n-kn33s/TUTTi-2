const js_async = [
    {
        title: 'try catch',
        subtitle: '',
        img: '',
        list: [],
        link: '',
        text: '',
        code: `
let controller = new AbortController();
setTimeout(() => controller.abort(), 1000);

try {
    let response = await fetch('/article/fetch-abort/demo/hang', {
        signal: controller.signal
    });
} catch(err) {
    if (err.name == 'AbortError') { // обработать ошибку от вызова abort()
        alert("Прервано!");
    } else {
        throw err;
    }
} `,
    },
    {
        title: 'fetch',
        subtitle: '',
        img: '',
        list: [],
        link: '',
        text: '',
        code: ``,
    },
    {
        title: 'promise',
        subtitle: '',
        img: '',
        list: [],
        link: '',
        text: '',
        code: ``,
    },
    {
        title: 'async await',
        subtitle: '',
        img: '',
        list: [],
        link: '',
        text: '',
        code: ``,
    },
    {
        title: 'callback hell',
        subtitle: '',
        img: '',
        list: [],
        link: '',
        text: '',
        code: ``,
    },
    {
        title: 'promise hell',
        subtitle: '',
        img: '',
        list: [],
        link: '',
        text: '',
        code: ``,
    },

]