import React from 'react'
import { useParams } from 'react-router'
import HotelDetails from './containers/HotelDetails';

function HotelDetailsPage() {
    const { hotelId } = useParams()
    return (
        <div className='container'>
            <HotelDetails hotelId = {hotelId}/>
        </div>
    )
}

export default HotelDetailsPage;
