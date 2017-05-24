import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'mobx-react'

import MainWindow from './components/MainWindow'
import UIStore from './UIStore'

import './assets/css/window.css'

// Since we are using HtmlWebpackPlugin WITHOUT a template,
// we should create our own root node in the body element before rendering into it
const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider uistore={new UIStore()}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(MainWindow)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/MainWindow', () => {
    render(MainWindow)
  })
}
