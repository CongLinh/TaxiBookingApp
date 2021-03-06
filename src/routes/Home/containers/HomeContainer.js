import { connect } from 'react-redux';
import Home from '../components/Home';
import { getCurrentLocation, getInputData,
    toggleSearchResult, getAddressPrediction,
    getSelectedAddress,
    bookCar,
    getNearByDrivers
} from '../modules/home';

const mapStateToProps = (state) => ({
    region: state.home.region,
    updateData: state.home.updateData || {},
    resultType: state.home.resultType || {},
    predictions: state.home.predictions || [],
    selectedAddress: state.home.selectedAddress || {},
    fare: state.home.fare,
    booking: state.home.booking || {},
    nearByDrivers: state.home.nearByDrivers || []
});

const mapActionCreators = {
    getCurrentLocation,
    getInputData,
    toggleSearchResult,
    getAddressPrediction,
    getSelectedAddress,
    bookCar,
    getNearByDrivers
};

export default connect(mapStateToProps, mapActionCreators)(Home);