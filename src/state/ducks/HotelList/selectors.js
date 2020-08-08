import { get } from 'lodash'



const selectHotels = state => get(state,'hotelList.hotels')
const selectHotelsPrice = state => get(state,'hotelList.price')
const selectHotelDetails = state => get(state,'hotelList.details')


export {
    selectHotels,
    selectHotelsPrice,
    selectHotelDetails
}