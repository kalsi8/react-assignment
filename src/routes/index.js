import Hotels from "../views/Pages/Hotels";
import HotelDetails from "../views/Pages/HotelDetailsPage";

export default [
    {
        path: '/hotels',
        component: Hotels,
        name: 'Hotels',
        id: 'Hotels_page',
        exact: true
    },
    {
        path: '/hotels/:hotelId',
        component: HotelDetails,
        name: 'Hotel Details',
        id: 'hotel_details'
    }
]