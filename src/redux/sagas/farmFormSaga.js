import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* sendFarmForm(action) {
    try {
        console.log('in send talent form', action.payload);
        const response = yield axios.post(`/farm`, action.payload);
       
    } catch (error) {
        console.log('Farm get request failed', error);
    }
}

function* farmFormSaga() {
    yield takeLatest('SEND_FARM_FORM', sendFarmForm);
    //yield takeEvery('FETCH_PROFICIENCIES', fetchProficiencies);
}

export default farmFormSaga;