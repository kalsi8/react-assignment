import { connect } from 'react-redux';
import { selectHotels, selectHotelsPrice, selectHotelDetails } from '../../state/ducks/HotelList/selectors';
import {fetchHotels, fetchHotelPrice, fetchHotelDetails} from '../../state/ducks/HotelList/actions'
import { bindActionCreators } from 'redux';


const mapStateToProps = state => (
    {
        hotels: selectHotels(state),
        hotelsPrice: selectHotelsPrice(state),
        hotelDetails: selectHotelDetails(state)
    }
)

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchHotels,
    fetchHotelPrice,
    fetchHotelDetails
},dispatch)

export default (component) => connect(mapStateToProps, mapDispatchToProps)(component)