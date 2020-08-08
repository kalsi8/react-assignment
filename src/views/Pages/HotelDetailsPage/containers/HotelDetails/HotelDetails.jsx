import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import ShowList from '../../components/Showlist'
import Fetching from '../../../../../components/Fetching'
import s from './HotelDetails.module.scss';

const dummyHotelImage = 'https://cs-images.treebo.com/Treebo_Trend_Sea_Coin/common/Common49_11_.jpg?w=591&h=352&fm=pjpg&fit=crop'


function HotelDetails({
    hotelId,
    hotels,
    hotelsPrice,
    hotelDetails,
    fetchHotels,
    fetchHotelPrice,
    fetchHotelDetails}) {
    

    useEffect(() => {
        if(!hotels || !hotels.length){
            fetchHotels()
            fetchHotelPrice(hotelId)
            fetchHotelDetails(hotelId)
        }
    }, [])

    const hotelCb = useCallback(
        () => {
            return (hotels.find(({id}) => {
                return id == hotelId
            }) || {})
        },
        [hotelId,hotels],
    )

    const {
        id,
        name,
        locality,
        city,
        image=dummyHotelImage
    } = hotelCb()


    const constructNameArea = (locality,city) => {
        if(locality && city){
            return `${locality}, ${city}`;
        }
        return locality || city
    }

    const {
        essentials=[],
        policies=[]
    } = hotelDetails[id] || {}


    const getLowestPrice = (id) => {
        if(!Object.keys(hotelsPrice).length){
            return <Fetching />
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

    if(!id){
        return null
    }
    return (
        <div className={s.hotelDetails}>
            <img className={s.hotelDetailsImage} src={image} alt="imageNotFound"/>
            <div className={s.hotelDetailsInfo}>
                <div className={s.hotelDetailsInfoName}>{name}</div>
                <div className={s.hotelDetailsInfoLocation}>{constructNameArea(locality,city)}</div>
                <ShowList list={policies} name="Policies"/>
                <ShowList list={essentials} name="Essentials"/>
                <div className={s.hotelDetailsPrice}>Price: {getLowestPrice(hotelId)}</div>
            </div>
        </div>
    )
}

HotelDetails.propTypes = {
    hotels: PropTypes.array.isRequired,
    fetchHotels: PropTypes.func.isRequired,
    fetchHotelPrice: PropTypes.func.isRequired,
    fetchHotelDetails: PropTypes.func.isRequired,
    hotelsPrice: PropTypes.object.isRequired,
    hotelDetails: PropTypes.object.isRequired
}

export default HotelDetails

