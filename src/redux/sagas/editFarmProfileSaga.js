import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* sendFarmProfile(action) {
    try {
        console.log(action.payload)
        const response = yield axios.put(`farm/${action.payload.id}`, action.payload); //farm/${action.payload.id}
        yield put({
            type: 'SET_FARM', payload: response.data
        });

    } catch (error) {
        console.log('farm profile edit request failed in saga', error);
    }
}

function* editFarmProfileSaga() {
    yield takeLatest('SET_EDIT_FARM_PROFILE', sendFarmProfile);
}

export default editFarmProfileSaga;