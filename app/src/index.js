import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
// import reducers from './reducers'
const root = document.getElementById('root')
// const store = createStore(reducers)

render(
    <App />,
    root
)
