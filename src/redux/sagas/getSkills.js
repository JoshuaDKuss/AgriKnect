import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getListOfSKills(action) {
    try {
        
        const response = yield axios.get(`/talentTwo`);
        console.log('response')


    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* getSkills() {
    yield takeLatest('GET_SKILLS', getListOfSKills);
}

export default getSkills;