import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* runUpdateLogic(action) {
    try {
        // yield put({ type: 'UPDATE_EQUIPMENT_BRANDS', payload: { id: action.payload.id, skills: action.payload.skills } });
        const response = yield axios.put(`talent/equipment/${action.payload.id}`, action.payload.skills);
        yield put ({ type: 'DELETE_ALL_EQUIPMENT' }) 
        action.history.push(`/talentProfile/${action.payload.id}`);
    } catch (error) {
        console.log(error); 

    }
}

function* updateBrandsSaga() {
    yield takeLatest('RUN_UPDATE_BRANDS_LOGIC', runUpdateLogic)
}

export default updateBrandsSaga