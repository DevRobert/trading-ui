import * as React from 'react'
import { render } from 'react-dom'
import { Application } from './Application'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import rootReducer from '../reducers/index'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
)

store.subscribe(() => [
    console.log(store.getState())
])

document.addEventListener('DOMContentLoaded', () => {
    renderWithHotReload(Application)
})

module.hot.accept('./Application', () => {
    const RootElement = require('./Application')
    renderWithHotReload(RootElement)
})

function renderWithHotReload(RootElement: any) {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Application/>
            </BrowserRouter>
        </Provider>,
    document.getElementById('root'))
}
