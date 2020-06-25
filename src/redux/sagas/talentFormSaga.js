import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* sendTalentForm(action) {
    try {
        console.log('in send talent form', action.payload);
        const response = yield axios.post(`/talent`, action.payload);
       
    } catch (error) {
        console.log('User get request failed', error);
    }
}

// retrieves proficiencies from database to populate talent form
function* fetchProficiencies() {
    try {
        console.log('in fetch talent form data');
        const response = yield axios.get(`/talent`);
        yield put({
            type: 'SET_PROFICIENCIES',
            payload: response.data
        })
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* talentFormSaga() {
    yield takeLatest('SEND_TALENT_FORM', sendTalentForm);
    yield takeEvery('FETCH_PROFICIENCIES', fetchProficiencies);
}

export default talentFormSaga;