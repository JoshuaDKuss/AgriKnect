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
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


// function* fetchFarm(action) {
//     console.log('in send farm form', action.payload);
//     try {
//         const response = yield axios.get('/farm'); //
//         console.log(response);
//         yield put({
//             type: 'SET_FARM',
//             payload: response.data
//         });
//     } catch (error) {
//         console.log('Farm get request failed', error);
//     }
// }

function* editFarm(action) {
    // let id = action.payload;
    console.log('in edit farm', action.payload.id);
    try {
      yield axios.put(`/farm/${action.payload.id}`, action.payload);
      yield put({
        type: 'GET_FARM'
      })
    } catch (error) {
      console.log('error editing farm in saga', error);
  }
}


function* farmProfileSaga() {
    yield takeLatest('GET_FARM', fetchFarm);
    yield takeLatest('EDIT_FARM', editFarm);
}

export default farmProfileSaga;
