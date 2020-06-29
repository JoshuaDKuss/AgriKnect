import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* sendCertifications(action) {
    try {
        console.log('!!!!!!!!!!!!!',action.payload)
        // const response = yield axios.put(`talent/equipment/${action.payload.id}`, action.payload.skills);
        yield console.log('TRY TWO')

        // yield put({ type: 'FETCH_TALENT' });


    }  catch (error) {
        console.log('User get request failed', error);
    }
}

function* editCertificationSaga() {
    yield takeLatest('UPDATE_CERTIFICATION', sendCertifications);
}

export default editCertificationSaga;