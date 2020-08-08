import {getHotels, getHotelPrice, getHotelDetails} from './service'
import { SET_HOTELS, SET_HOTELS_PRICE,SET_HOTELS_DETAILS } from './type';

const fetchHotels = () => async (dispatch) => {
    const { data } = await getHotels();
    dispatch({type: SET_HOTELS, payload: {
        hotels: data
    }})
}

const fetchHotelPrice = (id) => async (dispatch) => {
    const { data } = await getHotelPrice(id);
    dispatch({type: SET_HOTELS_PRICE, payload: {
        price: data
    }})
}

const fetchHotelDetails = (id) => async (dispatch) => {
    const { data } = await getHotelDetails(id);
    dispatch({type: SET_HOTELS_DETAILS, payload: {
        details: {[id]: data}
    }})
}


export {
    fetchHotels,
    fetchHotelPrice,
    fetchHotelDetails
}
