const theory_react_reduxflow = [
    {
        title: 'Redux Flow',
        subtitle: '',
        img: 'reduxflow.jpeg',
        code: '',
        text: ` Action -> Store -> Reducers -> ReactComponent`,
    },
    {
        title: 'Redux vs Flux',
        subtitle: '',
        img: '',
        code: '',
        text: `Разница в том что у Redux только один стор`,
    },
    {
        title: 'React-Redux',
        subtitle: 'Для чего нужен React-Redux?',
        img: '',
        code: '',
        text: ` Чтобы у реакта была возможность отслежывать изменения в store redux. Через connect `,
    },
    {
        title: 'conect vs hooks: useSelector & useDispatch',
        subtitle: '',
        img: '',
        code: '',
        text: `- все connects вызываются при изменении одного `,
    },
    {
        title: 'useSelector',
        subtitle: '',
        img: '',
        code: `
import React from 'react'
import { useSelector } from 'react-redux'

export const CounterComponent = () => {
  const counter = useSelector((state) => state.counter)
  return <div>{counter}</div>
}`,
        text: ``,
    },
    {
        title: 'useDispatch',
        subtitle: '',
        img: '',
        code: `
import React from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
    const dispatch = useDispatch()

    return (
    <div>
        <span>{value}</span>
        <button onClick={() => dispatch({ type: 'increment-counter' })}>
        Increment counter
        </button>
    </div>
    )
}

//*******************

import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch()
  const incrementCounter = useCallback(
    () => dispatch({ type: 'increment-counter' }),
    [dispatch]
  )

  return (
    <div>
      <span>{value}</span>
      <MyIncrementButton onIncrement={incrementCounter} />
    </div>
  )
}

export const MyIncrementButton = React.memo(({ onIncrement }) => (
  <button onClick={onIncrement}>Increment counter</button>
)) `,
        text: ``,
    },
    {
        title: 'STORE-менеджеры ',
        subtitle: 'Какие STORE менеджеры вы знаете?',
        img: '',
        code: ``,
        list: [`ngnx - у ангуляра`,'vuex - у vue', 'mobx', 'redux-toolkit', 'redux', 'flux']
    },
    {
        title: 'thunk',
        subtitle: 'для чего нужен',
        img: '',
        code: ``,
        text: ``,

    },
    {
        title: 'немутабельность Redux - immerjs',
        subtitle: 'Почему?',
        img: '',
        link: 'https://immerjs.github.io/immer/',
        code: ``,
        text: `Потому что под капотом redux использует immerjs, который не посволяет мутировать сторе без диспатча action`,
    },
    {
        title: 'immerjs',
        subtitle: '',
        img: 'immer-2.jpeg',
        link: 'https://immerjs.github.io/immer/',
        code: ``,
        text: `Не позволяет мутировать состояние потому что у него есть 3и стадии. 1) current - текущее состояние, 2)draft - забрасывание-черновик, 3)next - следующий`,
    },
    {
        title: 'action creator',
        subtitle: 'Что делает?',
        img: '',
        link: '',
        code: ``,
        text: ``,
    },

]
