import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getSearchResults(action) {
    try {
        console.log('in job search saga', action.payload);
        const searchItem = action.payload
        const response = yield axios.get(`/search/${searchItem}`);
        yield put({
            type: 'SET_SEARCH_RESULTS', payload: response.data
        });

    } catch (error) {
        console.log('User search get request failed', error);
    }
}

function* searchSaga() {
    yield takeLatest('FETCH_JOB_SEARCH', getSearchResults);
}

export default searchSaga;