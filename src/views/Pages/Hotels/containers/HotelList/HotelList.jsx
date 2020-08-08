import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import s from './HotelList.module.scss';
import Fetching from '../../../../../components/Fetching';
import HotelItem from '../../components/HotelItem';

const dummyHotelImage = 'https://cs-images.treebo.com/Treebo_Trend_Sea_Coin/common/Common49_11_.jpg?w=591&h=352&fm=pjpg&fit=crop'




function HotelList({hotels,fetchHotels,fetchHotelPrice,hotelsPrice,fetchHotelDetails,history}) {

    useEffect(() => {
        fetchHotels()
        fetchHotelPrice()
    }, [fetchHotels,fetchHotelPrice])

    const getLowestPrice = (id) => {
        if(!Object.keys(hotelsPrice).length){
            return <Fetching/>
        }
        const result = hotelsPrice[id] === undefined ? 'Unable to fetch price' : Object.keys(hotelsPrice[id]).reduce((pv,cv)=> {
            const price = Number(hotelsPrice[id][cv]);
            if(price && price<pv){
                return price
            }
            return pv
        },Number.POSITIVE_INFINITY)

        return result === Number.POSITIVE_INFINITY? 'Sold out' : result
    }
    const hotelClicked = async (event) => {
        if(event.target.dataset.isHotelClick){
            event.stopPropagation();
            const hotelId = event.target.dataset.hotelId;
            await fetchHotelDetails(hotelId)
            history.push(`hotels/${hotelId}`)
        }
    }
    return (
        <div onClick={hotelClicked} className ={s.hotelList}>
            {
                hotels.map(({id,name,locality,city,image=dummyHotelImage}) => {
                    return <HotelItem 
                        id ={id} 
                        name ={name}
                        locality = {locality}
                        city = {city}
                        image ={image}
                        price= {getLowestPrice(id)}
                    />
                })
            }
        </div>
    )
}

HotelList.propTypes = {
    hotels: PropTypes.array.isRequired,
    fetchHotels: PropTypes.func.isRequired,
    fetchHotelPrice: PropTypes.func.isRequired,
    fetchHotelDetails: PropTypes.func.isRequired,
    hotelsPrice: PropTypes.object.isRequired
}

export default HotelList

