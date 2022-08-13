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
} `,
    },
]
