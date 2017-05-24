import {observable} from 'mobx'
import path from 'path'

export default class UIStore {
  @observable isFull = false
  @observable cwd = __dirname ? path.resolve(__dirname) : path.resolve('.')
}
