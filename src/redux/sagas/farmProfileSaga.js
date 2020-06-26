import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchFarmDetails(action) {
  try{
   const response = yield axios.get(`/farm/${action.payload}`);
   const responseJobs = yield axios.get(`/farm/jobs/${action.payload}`);
   yield put({type: 'SET_FARM', payload: response.data});
   yield put({type: 'SET_JOBS', payload: responseJobs.data});
   console.log('in saga', response.data)
  } catch(err){
    console.log(err)
  }
}

function* talentProfileSaga() {
  yield takeLatest('FETCH_FARM', fetchFarmDetails);
}

export default talentProfileSaga;