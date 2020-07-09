import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* sendFarmForm(action) {
    const city = action.payload.city;
    const state = action.payload.state;
    const streetAddress = action.payload.street_address;
    console.log(streetAddress, city, state)
    const coordinates = yield axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${streetAddress}+${city}+${state}.json?access_token=pk.eyJ1IjoiYWdyaWtuZWN0IiwiYSI6ImNrY2RxbXo3NDAxMWQycm5qYnkzMmV1Z3EifQ.nvlD1vWijqAS8fDZk1e_1Q`)
    console.log(coordinates.data.features[0].center)
    const longitude = coordinates.data.features[0].center[0]
    const latitude = coordinates.data.features[0].center[1]
    console.log(latitude, longitude)
    const data = {payload: action.payload, latitude: latitude, longitude: longitude}
    try {
        console.log('in send farm form', data);
        const response = yield axios.post(`/farm`, data);
        yield put({
            type: 'FETCH_FARM'
        });

       action.history.push('/ThankYouPageFarm');
    } catch (error) {
        console.log('Farm post request failed', error);
    }
}

function* farmFormSaga() {
    yield takeLatest('SEND_FARM_FORM', sendFarmForm);
}

export default farmFormSaga;