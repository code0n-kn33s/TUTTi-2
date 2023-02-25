const async = [
    {
        title: 'Promise',
        subtitle: 'syntax',
        text: '',
        code: `
let promise = new Promise((resolve, reject) => {
    const sendPostData = {
        title: values.title,
        location: values.location,
    }

    resolve(sendPostData)

    throw new Error('O_o')
    });

    promise.then((sendPostData) => {
        this.props.sendData(sendPostData)
    })
    promise.then(() => {
        this.props.form.resetFields()
    })
}
        `,
    },
    {
        title: 'Async-await',
        subtitle: 'syntax',
        text: '',
        code: `
// arrow
const foo = async (param) => {
    await bar()
}

async function foo() {
    await bar()
}

// simple
const foo = async user => {
    const user = await fetch('/user')
    const comment = await fetch('/commnets')

    return comment
}
`,
    },
    {
        title: 'Fetch',
        subtitle: 'syntax',
        text: '',
        code: `
fetch('https://httpbin.org/get')
    .then(res => res.json())
    .then(res => console.log('response:', res))
    .catch(error => console.log('errror', error))

// fetch with header POST
fetch('http://localhost:3003/auth/login', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
    email: this.state.login,
    password: this.state.password
    })
})
.then(res => res.json())
.then(res => console.log('response:', res));`,
    },
    {
        title: 'simple fetch',
        subtitle: '',
        img: '',
        text: `

        `,
        list: [],
        code: `
fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then(arr => console.log(arr.json())).catch(console.table)
`,
    },
]
