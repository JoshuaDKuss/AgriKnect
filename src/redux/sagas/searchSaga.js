import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getSearchResults(action) {
  try {
    console.log("in job search saga", action.payload);
    const searchItem = action.payload;
    const searchResponse = yield axios.get(`/search/${searchItem}`);
    const userProficienciesResponse = yield axios.get(`/proficiencies/user`);
    
    yield put({
      type: "SET_SEARCH_RESULTS",
      payload: searchResponse.data,
    });
    yield put({
        type: "SET_MATCH_DATA",
        payload: userProficienciesResponse.data[0].proficiencies,
      });
  } catch (error) {
    console.log("User search get request failed", error);
  }
}

function* fetchJobs() {
  try {
    console.log("in fetchJobs");
    const response = yield axios.get('/jobs');
    
    yield put({
      type: "SET_INITIAL_JOBS",
      payload: response.data
    });
  } catch (error) {
    console.log("error in fetchJobs saga", error);
  }
}

function* searchSaga() {
  yield takeLatest("FETCH_JOB_SEARCH", getSearchResults);
  yield takeLatest("FETCH_INITIAL_JOBS", fetchJobs);
}

export default searchSaga;
