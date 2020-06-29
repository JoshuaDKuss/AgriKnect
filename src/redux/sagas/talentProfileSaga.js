import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchTalent(action) {
  try{
   const response = yield axios.get(`/talent/${action.payload}`);
   const responseProficiency = yield axios.get(`/talent/proficiency/${action.payload}`);
   const responseTalentCert = yield axios.get(`/talent/certification/${action.payload}`);
   const responseTalentEducation = yield axios.get(`/talent/education/${action.payload}`);
   const responseTalentEmployment = yield axios.get(`/talent/employment/${action.payload}`);
   yield put({type: 'SET_TALENT', payload: response.data});
   yield put({type: 'SET_TALENT_SKILLS', payload: responseProficiency.data});
   yield put({type: 'SET_TALENT_CERTIFICATION', payload: responseTalentCert.data});
  yield put({ type: 'SET_INITIAL_CERTIFICATIONS', payload: responseTalentCert.data });
   yield put({type: 'SET_TALENT_EDUCATION', payload: responseTalentEducation.data});
   yield put({type: 'SET_TALENT_EMPLOYMENT', payload: responseTalentEmployment.data});
   console.log('in saga', response.data)
  } catch(err){
    console.log(err)
  }
}

function* talentProfileSaga() {
  yield takeLatest('FETCH_TALENT', fetchTalent);
}

export default talentProfileSaga;