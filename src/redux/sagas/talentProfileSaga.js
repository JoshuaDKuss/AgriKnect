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
   console.log('response',responseTalentCert.data)
  // yield put({ type: 'SET_INITIAL_CERTIFICATIONS', payload: responseTalentCert.data });
   yield put({type: 'SET_TALENT_EDUCATION', payload: responseTalentEducation.data});
   yield put({type: 'SET_TALENT_EMPLOYMENT', payload: responseTalentEmployment.data});
   for(let i = 0; i < responseTalentCert.data.length; i++) {
       yield put({ type: 'SET_INITIAL_CERTIFICATIONS', payload: responseTalentCert.data[i] });
   } 
    for (let i = 0; i < responseProficiency.data.length; i++) {
      yield put({ type: 'SET_INITIAL_SKILLS', payload: responseProficiency.data[i] });
      yield put({ type: 'SET_INITIAL_EQUIPMENT', payload: responseProficiency.data[i] })
    } 

    for (let i = 0; i < responseTalentEducation.data.length; i++) {
      yield put({ type: 'SET_INITIAL_EDUCATION', payload: responseTalentEducation.data[i] });
    } 
   console.log('in saga', response.data)
  } catch(err){
    console.log(err)
  }
}

function* talentProfileSaga() {
  yield takeLatest('FETCH_TALENT', fetchTalent);
}

export default talentProfileSaga;