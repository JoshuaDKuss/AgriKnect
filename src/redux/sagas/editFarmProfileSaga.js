import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* sendFarmProfile(action) {
    try {
        console.log(action.payload)
        const response = yield axios.put(`farm/${action.payload.id}`, action.payload);


    } catch (error) {
        console.log('farm profile edit request failed in saga', error);
    }
}

function* editFarmProfileSaga() {
    yield takeLatest('UPDATE_FARM_PROFILE', sendFarmProfile);
}

export default editFarmProfileSaga;