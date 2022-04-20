(function (){
    function foo(bar) {
        let data = fetch('https://reqres.in/api/users', { method: 'GET' })
            .then(myJson => myJson.json())
            .then(res => res.data)
    
        return data
    }
    
    async function bar(callback) {
        console.log('start bar')
        let getData = await callback() //async
        setTimeout(() => console.log('settiemout'), 0) //browser api
        console.log('callback data', getData)
        console.log('end bar')
    
        const elem = document.getElementById('app')

        let createdElem = document.createElement('div')
        createdElem.style.display = "flex"

        elem.append(createdElem)
    
        getData.map((user) => {
            return createdElem.insertAdjacentHTML(
                "beforeend",
                userLayout(user.first_name, user.email, user.avatar)
            )
        })
    }
    
    const userLayout = (name, email, img) => {
        return `
            <div style="padding: 20px">
                <img height="50" width="50" src="${img}"/>
                <div>Name: ${name}</div>
                <div>Email: ${email}</div>
            </div>`
    }
    
    bar(foo)
})()