import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* sendEmployment(action) {
    try {
        console.log('in saga')
        const response = yield axios.put(`talent/employment`, action.payload.employment);
    yield put({ type: 'DELETE_ALL_EMPLOYMENT'});
        action.history.push(`/talentProfile/${action.payload.id}`);

        // yield put({ type: 'FETCH_TALENT' });


    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* editEmploymentSaga() {
    yield takeLatest('UPDATE_EMPLOYMENT', sendEmployment);
}

export default editEmploymentSaga;