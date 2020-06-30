import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getSearchResults(action) {
  try {
    console.log("in job search saga", action.payload);
    const searchItem = action.payload;
    const searchResponse = yield axios.get(`/search/${searchItem}`);
    const userProficienciesResponse = yield axios.get(`/proficiencies/user`);
    



    // let proficiencyCount = 0;

    // for (let i = 0; i < jobProficiencies.length; i++) {
    //   let jobProficiency = jobProficiencies[i];
    //   for (let j = 0; j < userProficiencies.length; j++) {
    //     let userProficiency = userProficiencies[j];
    //     if (jobProficiency === userProficiency) {
    //       proficiencyCount += 1;
    //     }
    //   }
    // }
    // console.log(jobProficiencies.length);
    // let result = proficiencyCount / jobProficiencies.length;
    // console.log(result);
    // let match;
    // if (result > 0.8) {
    //     match = 'Strong Match';
    // } else if (result > 0.5 && result < 0.8) {
    //     match = 'Good Match';
    // } else {
    //     match = 'Weak Match';
    // }
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

function* searchSaga() {
  yield takeLatest("FETCH_JOB_SEARCH", getSearchResults);
}

export default searchSaga;
