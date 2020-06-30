import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* runUpdateLogic(action) {
    try {
 
        yield put ({ type: 'UPDATE_TALENT_SKILLS', payload: { skills: action.payload.skills, id: action.payload.id } })
        yield put ({ type: 'DELETE_ALL_SKILLS' }) 
        action.history.push(`/talentProfile/${action.payload.id}`);
    } catch (error) {
        console.log(error); 

    }
}

function* updateSkillsSaga() {
    yield takeLatest('RUN_UPDATE_SKILLS_LOGIC', runUpdateLogic)
}

export default updateSkillsSaga