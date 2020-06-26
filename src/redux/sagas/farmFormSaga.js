import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* sendFarmForm(action) {
    
    try {
        console.log('in send farm form', action.payload);
        const response = yield axios.post(`/farm`, action.payload);
       
    } catch (error) {
        console.log('Farm post request failed', error);
    }
}

function* farmFormSaga() {
    yield takeLatest('SEND_FARM_FORM', sendFarmForm);
}

export default farmFormSaga;