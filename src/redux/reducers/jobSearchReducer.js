const jobSearch = (state = [], action) => {
    if (action.type === 'SET_SEARCH_RESULTS') { 
        return action.payload;
    } else {
        return state;
    }
}

export default jobSearch;