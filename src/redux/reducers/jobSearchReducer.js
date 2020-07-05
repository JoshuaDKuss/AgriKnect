const jobSearch = (state = [], action) => {
    if (action.type === 'SET_SEARCH_RESULTS') { 
        // return action.payload;
        return action.payload;
    } else if (action.type === 'SET_INITIAL_JOBS') {
        return action.payload;
    } else {
        return state;
    }
}

export default jobSearch;