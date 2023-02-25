const theory_react_main = [
    {
        title: 'Create App',
        subtitle: '',
        img: '',
        code: `
create folder [name_folder]
npx create-react-app
npm i sass
npm i react-router react-router-dom
npm i react-redux redux redux-thunk

// together
npm i sass react-router react-router-dom react-redux redux redux-thunk axios antd moment `,
    },

    {
        title: 'Life Cirle Component react',
        subtitle: '',
        img: 'complife.jpeg',
        code: '',
        text: ``,
        list: ['initialization ->', 'mounting ->', 'updating ->', ' unmounting']
    },
    {
        title: 'Контекст',
        subtitle: '',
        img: '',
        text: `Контекст позволяет передавать данные через дерево компонентов без необходимости передавать пропсы на промежуточных уровнях.`,
        code: `
//class
const ThemeContext = React.createContext('light')
//hooks
const ThemeContext = React.useContext('light')`,
        list: []
    },
    {
        title: 'Закэшировать значения',
        subtitle: 'useMemo',
        img: '',
        text: `Иногда полезно закешировать какие нибудь вычисления требующие больших вычислительных мощностей. Помочь в этом может хук useMemo , он позволяет вам закешировать вычисления между несколькими рендерами, путём запоминания прошлого результата`,
        code: `
useMemo
const data = useMemo(() => array.map(mapper).filter(predicate).reduce(reducer), [array])`,
        list: []
    },
    {
        title: 'useCallback vs useMemo',
        subtitle: '',
        img: '',
        text: `useCallback возвращает меморизированную функцию, useMemo - значение`,
        code: ``,
        list: []
    },
    {
        title: 'PureComponent',
        subtitle: '',
        img: '',
        text: `Делает поверхностное сравнение пропсов. Если они не меняются не происходит перерисовка.
        В целом он такой же как и Component, но у него отсудствует метод ShouldComponentUpdate - он его реализует`,
        code: ``,
        list: []
    },
    {
        title: 'HOC',
        subtitle: '',
        img: '',
        text: `
        HOC — это особая техника в React, при которой функция принимает аргумент Component и возвращает новый компонент.`,
        code: `
function composeComponent(Component) {
    return class extends React.Component {
        render() {
            return <Component />
        }
    }
}`,
        list: []
    },
    {
        title: 'useEffect vs useLoyoutEffect',
        subtitle: '',
        img: '',
        text: `Оба хука выполняются после рендера. useLoyoutEffect - синхронно. useEffect - асинхронно.`,
        code: ``,
        list: []
    },
    {
        title: 'memo vs useMemo',
        subtitle: '',
        img: '',
        text: `useMemo - hook, a memo - Hoc`,
        code: ``,
        list: []
    },
    {
        title: '',
        subtitle: '',
        img: '',
        text: ``,
        code: ``,
        list: []
    },




]
