const theory_react_hooks = [
    {
        title: 'useState',
        subtitle: '',
        img: '',
        text: `
В момент инициализации ...
        `,
        code: ` const [prop, setProp] = useState(initialState) `,
    },
    {
        title: 'useCallback',
        subtitle: '',
        img: '',
        text: ``,
        code: ``,
    },
    {
        title: 'useMemo',
        subtitle: '',
        img: '',
        text: `useMemo - используется там где нужно вычислить дорогостоящее значение и не трогать его, если значение не изменилось.`,
        code: ``,
    },
    {
        title: 'memo',
        subtitle: '',
        img: '',
        text: `memo - это функция, которая принимает компонент реакта и возвращает мемоизированную версию этого компонента. Это значит, что перерисовки компонента не будет, если пропсы не менялись.`,
        code: `const Component1 = React.memo(function Component1(props) {`,
    },
    {
        title: 'useRef',
        subtitle: '',
        img: '',
        text: `Позволяет получить доступ к элементу. А также получить доступ к предыдущим пропсам`,
        code: `
function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
        `,
    },
    {
        title: '',
        subtitle: '',
        img: '',
        text: ``,
        code: ``,
    },
    {
        title: '',
        subtitle: '',
        img: '',
        text: ``,
        code: ``,
    },



]
