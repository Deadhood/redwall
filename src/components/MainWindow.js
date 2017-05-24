import React, { Component } from 'react'
import {inject, observer} from 'mobx-react'
import {Window, TitleBar, View} from 'react-desktop/macOs'
import {remote} from 'electron'

import '../assets/css/MainWindow.css'

@inject('uistore') @observer
class MainWindow extends Component {
  constructor (props) {
    super(props)
    this.win = remote.getCurrentWindow()
    this.store = props.uistore
  }

  render () {
    return (
      <Window
        chrome
        height='100vh'
        width='100vw'
      >
        <TitleBar
          controls
          title='redwall'
          isFullscreen={this.store.isFull}
          onCloseClick={() => this.win.close()}
          onMinimizeClick={() => this.win.minimize()}
          onResizeClick={this._resize}
          onMaximizeClick={this._resize}
        />
        <View>
         Ded
        </View>
      </Window>
    )
  }

  _resize = e => {
    e.preventDefault()
    this.store.isFull = !this.store.isFull
    if (this.win.isMaximized()) {
      this.win.unmaximize()
    } else {
      this.win.maximize()
    }
  }
}

export default MainWindow
