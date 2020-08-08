import axiosInstance from '../../../utils/axiosInstance'
import URL from '../../../utils/apiConfg'

async function getHotels() {
    const {data} = await axiosInstance.get(URL.hotels.fetchHotels)
    return data
}

async function getHotelPrice(id) {
    // use id with real api
    const {data} = await axiosInstance.get(URL.hotels.fetchHotelPrice)
    return data
}


async function getHotelDetails(id) {
    // use id with real api
    const {data} = await axiosInstance.get(URL.hotels.fetchHotelDetails)
    return data
}

export {
    getHotels,
    getHotelPrice,
    getHotelDetails
}

