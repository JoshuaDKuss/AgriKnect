import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* sendTalentForm(action) {
    try {
        console.log('in send talent form', action.payload)
       
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* talentFormSaga() {
    yield takeLatest('SEND_TALENT_FORM', sendTalentForm);
}

export default talentFormSaga;