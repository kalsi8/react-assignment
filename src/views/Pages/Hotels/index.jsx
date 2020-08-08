import React from 'react'
import HotelList from './containers/HotelList'

function Hotels({history}) {
    return (
        <div className='container'>
            <HotelList history={history}/>
        </div>
    )
}

export default Hotels
