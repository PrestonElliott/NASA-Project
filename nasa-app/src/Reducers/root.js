import { combineReducers } from 'redux'

import dailyPicReducer from './dailyPic'
import epicReducer from './epicPics'

export default combineReducers({
    dailyPicReducer: dailyPicReducer,
    epicReducer: epicReducer
})