import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* deleteJob(action){
    try {
        yield axios.delete(`/farm/${action.payload}`);
        yield put({type: 'FETCH_FARM'});
    } catch (error) {
        console.log(error);
        
    }
}

function* deleteJobSaga(){
    yield takeLatest('DELETE_JOB', deleteJob)
}

export default deleteJobSaga