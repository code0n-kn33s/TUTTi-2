function pageConstructor(obj) {
    let arrayTheory = obj.theory.map( item => {
        return (
            `
                <div>
                    <div>${item.title}</div>
                    <div>${item.text}</div>
                </div>
            `
        )
    })
    return arrayTheory.join('<br>')
}