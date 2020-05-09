import { bindActionCreators } from 'redux'
import * as actions from './Actions'
import { Store } from '../Store'

export default bindActionCreators({
  ...actions
}, Store.dispatch)
