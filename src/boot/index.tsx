import * as React from 'react'
import { render } from 'react-dom'
import { Application } from './Application'
import { AppContainer } from 'react-hot-loader'

render(
    <AppContainer><Application/></AppContainer>,
    document.getElementById('root')
)

module.hot.accept('./Application', () => {
    render(
        <AppContainer><Application/></AppContainer>,
        document.getElementById('root')
    )
})
