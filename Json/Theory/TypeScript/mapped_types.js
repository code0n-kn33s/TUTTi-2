const mapped_types = [{
        title: '',
        subtitle: '',
        img: 'mapped.jpeg',
        text: '',
        link: '',
        list: [
            'Awaited',
            'Partial',
            'Required',
            'Readonly',
            'Record',
            'Pick',
            'Omit',
            'Exclude',
        ],
        code: ` `,
    },
    {
        title: 'Partial',
        subtitle: '',
        img: 'type_interface.jpeg',
        text: '',
        link: '',
        list: [],
        code: `
// partials
type Part <T> = {
  [P in keyof T]?: T[P];
}`,
    },




]