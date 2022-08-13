const react_common = [{
        title: 'Google map',
        subtitle: 'Вставить Google карту бесплатно',
        text: '',
        code: `
import React from 'react'

const GoogleMap = () => {
    return (
    <div>
        <iframe title="office_cords" src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.917229691663!2d30.50493021573178!3d50.4612659794769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce6900958661%3A0x94f8d40d2d7f9198!2z0YPQuy4g0JrQvtC20LXQvNGP0YbQutCw0Y8sIDEy0JEsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1539690418191"} width="100%" height="550" frameBorder="0" allowFullScreen></iframe>
    </div>
    )
}

export default GoogleMap;
`,
    },
    {
        title: 'FETCH && CATCH',
        subtitle: 'ORIGINAL',
        text: '',
        code: `
fetch('http://localhost:3003/auth/login',
{
    method: 'POST',
    headers: {
    'Content-type': 'application/json'
    },
    body: JSON.stringify({
    email: this.state.login,
    password: this.state.password
    })
}
)
.then(res => res.json())
.then(res => console.log('response:', res));
`,
    },
    {
        title: 'FETCH',
        subtitle: 'AXIOS',
        text: '',
        code: `
axios.post(
    '$_{config.apiPath}/public/auth/login', data
    ).then(res => {
    dispatch({ type: GET_LOGIN_RES, payload: res });
    configurateToken(res.data.token);
    })
    .catch(error => dispatch({ type: GET_LOGIN_ERR, error }));
`,
    },
]