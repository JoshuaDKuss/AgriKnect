import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* sendEducation(action) {
    try {
        console.log('in saga')
        const response = yield axios.put(`talent/education`, action.payload.education);
         yield put({ type: 'DELETE_ALL_EDUCATION'});
        action.history.push(`/talentProfile/${action.payload.id}`);

        // yield put({ type: 'FETCH_TALENT' });


    }  catch (error) {
        console.log('User get request failed', error);
    }
}

function* editEducationSaga() {
    yield takeLatest('UPDATE_EDUCATION', sendEducation);
}

export default editEducationSaga;