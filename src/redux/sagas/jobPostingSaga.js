import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* sendJobPosting(action) {
    try {
        console.log('in saga correctly')
        const response = yield axios.post('/jobs', action.payload.job);

        yield put({
            type: 'DELETE_POSTING'
        });

        action.history.push(`/farmProfile/${action.payload.id}`);

    } catch (error) {
        console.log('User get request failed', error);
    }
}


function* jobPostingSaga() {
    yield takeLatest('SET_JOB_POSTING', sendJobPosting);
}

export default jobPostingSaga;