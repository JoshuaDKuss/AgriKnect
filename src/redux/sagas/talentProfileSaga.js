import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchTalent(action) {
  try{
   const response = yield axios.get(`/talent/${action.payload}`);
   yield put({type: 'SET_TALENT', payload: response.data});
   console.log('in saga', response.data)
  } catch(err){
    console.log(err)
  }
}

function* talentProfileSaga() {
  yield takeLatest('FETCH_TALENT', fetchTalent);
}

export default talentProfileSaga;