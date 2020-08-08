import React from 'react'
import PropTypes from 'prop-types'
import s from './index.module.scss'

function HotelItem({name,id,locality,price,city,image}) {
    return (
        <div className = {s.hotelItem}>
            <img className={s.hotelItemImage} src={image} alt="imageNotFound"/>
            <div className={s.hotelItemContent}>
                <div data-is-hotel-click={true} data-hotel-id={id} className={`${s.hotelItemContentText} ${s.pointer}`}>
                    <span className={s.hotelItemContentTextLabel}>Name: </span>
                    {name}
                </div>
                {city && 
                <div className={s.hotelItemContentText}>
                    <span className={s.hotelItemContentTextLabel}>city: </span>
                    {city}
                </div>
                }
                {locality && 
                <div className={s.hotelItemContentText}>
                    <span className={s.hotelItemContentTextLabel}>Locality: </span>
                    {locality}
                </div>}
                {
                <div className={s.hotelItemContentText}>
                    <span className={s.hotelItemContentTextLabel}>Lowest Price: </span>
                    {price}
                </div>}
            </div>
        </div>
    )

}

HotelItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    locality: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default HotelItem

