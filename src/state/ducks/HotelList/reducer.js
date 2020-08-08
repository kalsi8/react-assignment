import { SET_HOTELS, SET_HOTELS_PRICE, SET_HOTELS_DETAILS } from "./type"

const initialState = {
 hotels: [],
 price: {},
 details: {},
}

const hotelList  = (state = initialState, { type, payload }) => {
    switch (type) {
    case SET_HOTELS:
        return { ...state, ...payload }
    case SET_HOTELS_PRICE:
        const price = payload.price.reduce((pv,{id, price }) => {
            pv[id] = price
            return pv;
        },{});
        return { ...state, price }
    case SET_HOTELS_DETAILS:
        return { ...state, details: {...state.details, ...payload.details} }
    default:
        return state
    }
}


export default hotelList