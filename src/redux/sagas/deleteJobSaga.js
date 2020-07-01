import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* deleteJob(action){
    try {
        yield axios.delete(`/farm/${action.payload.job}`);
        yield put({type: 'FETCH_FARM', payload: action.payload.userID });
    } catch (error) {
        console.log(error);
        
    }
}

function* deleteJobSaga(){
    yield takeLatest('DELETE_JOB', deleteJob)
}

export default deleteJobSaga