import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* sendEquipment(action) {
    try {
        console.log(action.payload)
        const response = yield axios.put(`talent/equipment/${action.payload.id}`, action.payload.skills);

        // yield put({ type: 'FETCH_TALENT' });


    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* editEquipmentSaga() {
    yield takeLatest('UPDATE_EQUIPMENT_BRANDS', sendEquipment);
}

export default editEquipmentSaga;