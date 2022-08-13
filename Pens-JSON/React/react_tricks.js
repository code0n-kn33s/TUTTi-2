
const react_tricks = [
    {
        title: 'componentDidUpdate',
        subtitle: 'Популярный пример (не забудьте сравнить пропсы).',
        text: '',
        code: `
componentDidUpdate(prevProps) {
    if (this.props.userID !== prevProps.userID) {
        this.fetchData(this.props.userID);
    }
}
`,
    },
    {
        title: 'withRouter',
        subtitle: 'достучаться до роута нативно',
        text: '',
        code: `
import { withRouter } from 'react-router-dom'
export default withRouter( componentName )
`,
    },
    {
        title: 'getDerivedStateFromProps',
        subtitle: 'записать один раз, до загрузки',
        text: '',
        code: `
static getDerivedStateFromProps(props, state) {
    if (state.loaded === false) {
        return {
        name: props.user.name,
        email: props.user.email,
        loaded: true
        }
    } else {
        return null
    }
}
`,
    },
    {
        title: 'Back button',
        subtitle: 'замена кнопке назад',
        text: '',
        code: `
this.props.history.goBack()
`,
    },
    {
        title: 'SVG',
        subtitle: 'вставить svg в качестве компонента',
        text: '',
        code: `
import { ReactComponent as SvgImg } from './assets/someSvg.svg'
//usage
<SvgImg />
`,
    },
    {
        title: 'Забрать массив check`нутых inputs',
        subtitle: 'Получить массив "чекнутых" checkboxes',
        text: '',
        code: `
checkedChildren = (templateId) => {
    const { checkedTemplates } = this.state

    if (checkedTemplates.includes(templateId)) {
        this.setState({
            checkedTemplates: checkedTemplates.filter(id => id !== templateId)
        })
    } else {
        this.setState({
            checkedTemplates: [...checkedTemplates, templateId]
        })
    }
}
`,
    },

]
