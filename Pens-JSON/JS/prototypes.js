const prototypes = [
    {
        title: 'Clases',
        subtitle: 'properties',
        text: '',
        code: `
class MyClass {
    instancePublicField = 1;
    static staticPublicField = 2;
    #instancePrivateField = 3;
    static #staticPrivateField = 4;
    #nonStaticPrivateMethod() {}
    get #nonStaticPrivateAccessor() {}
    set #nonStaticPrivateAccessor(value) {}
    static #staticPrivateMethod() {}
    static get #staticPrivateAccessor() {}
    static set #staticPrivateAccessor(value) {}
    static {
        // Static initialization block
    }
}
        `,
    },
    {
        title: '',
        subtitle: '',
        text: '',
        code: `

        `,
    },
]
