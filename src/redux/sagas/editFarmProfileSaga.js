import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* sendFarmProfile(action) {
    console.log('in send farm profile', action.payload);
    try {
        //const response = 
        yield axios.put(`/farm/${action.payload.id}`, action.payload); //farm/${action.payload.id}
        
        // yield put({
        //     type: 'UPDATE_FARM', // 'SET_FARM'
        //     payload: action.payload
        //     //response.data
        // })
        yield put ({
            type: 'FETCH_FARM'
        });
        action.history.push(`/farmProfile/${action.payload.id}`);
    } catch (error) {
        console.log('farm profile edit request failed in saga', error);
    }
}

function* editFarmProfileSaga() {
    yield takeLatest('SET_EDIT_FARM_PROFILE', sendFarmProfile);
}

export default editFarmProfileSaga;