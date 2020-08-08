import { combineReducers } from 'redux';
import hotelList from './HotelList/reducer'

function createReducer(){
    return combineReducers({
        hotelList
    })
}

export default createReducer;