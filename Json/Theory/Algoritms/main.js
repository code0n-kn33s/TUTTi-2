const algoritms_main = [
    {
        title: 'Алгоритмы',
        subtitle: '',
        img: '',
        text: `
            Алгоритм - Это последовательность однозначных действий, которая должна привести к желаемому результату. Другими словами, алгоритм – это пошаговая инструкция для компьютера.
        `,
        list: ['CallStack', 'BrowserApi', 'Callback Queue' ],
        code: `
            Array.prototype.sort // встроенный агроритм сортировки массивов

            arr.sort((x,y) => x - y) // цыфры
            arr.sort((x,y) => (x < y) ? -1 : 1) // буквы

            var dateA=new Date(a.retiredate), dateB=new Date(b.retiredate)
            dateA-dateB //сортировка по возрастающей дате
        `,
    },
    {
        title: 'Большая О',
        subtitle: '',
        img: '',
        text: `
        Большая О (Big O Notation) - вычислительную сложность аглоритма. Чем быстрее мы прийдем к искомому тем эффективнее алгоритм.
        `,
        list: ['CallStack', 'BrowserApi', 'Callback Queue' ],
        code: `

        `,
    },
    {
        title: 'О(n^2)',
        subtitle: '',
        img: '',
        text: `
        `,
        list: [],
        code: `
            for(let i=0; i<10; i++) {} // сложность O(n)

            for(let i=0; i<10; i++) {
                for(let z=0; z<10; z++) {
                    ...
                }
            } // сложность O(n^2)

        `,
    },
    {
        title: 'O(n*log n)',
        subtitle: '',
        img: '',
        text: `

        `,
        list: [],
        code: `
            for(int i = 0; i < n; i++) {
                for(int j = 1; j < n; j = j * 2) {

                }
            }
        `,
    },



]
