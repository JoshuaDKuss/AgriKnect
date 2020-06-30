import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* sendEmployment(action) {
    try {
        console.log('in saga')
        const response = yield axios.put(`talent/employment`, action.payload);


        yield put({ type: 'FETCH_TALENT' });


    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* editEmploymentSaga() {
    yield takeLatest('UPDATE_EMPLOYMENT', sendEmployment);
}

export default editEmploymentSaga;