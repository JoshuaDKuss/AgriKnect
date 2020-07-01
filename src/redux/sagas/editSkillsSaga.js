import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* editSkillsExpertise(action) {
    try {
        console.log(action.payload)
        const response = yield axios.put(`talent/skills/${action.payload.id}`, action.payload.skills);

        // yield put({ type: 'FETCH_TALENT'});
        
  
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* editSkillsSaga() {
    yield takeLatest('UPDATE_TALENT_SKILLS', editSkillsExpertise);
}

export default editSkillsSaga;
