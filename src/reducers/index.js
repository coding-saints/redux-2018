import {combineReducers} from 'redux'
import ReducerUser from './ReducerUsers'
import ActiveUser from './ActiveUser'
const allReducers = combineReducers({
    users: ReducerUser,
    activeUser: ActiveUser
})

export default allReducers