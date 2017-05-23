import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { AppContainer } from 'react-hot-loader'

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}
