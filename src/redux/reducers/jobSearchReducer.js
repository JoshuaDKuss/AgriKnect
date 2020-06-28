const jobSearch = (state = {
    job_search: ""
}, action) => {
    if (action.type === 'SEARCH') { // 'search' is probably a placeholder for now
        return {...state, search: action.payload.search};
    }
}

export default jobSearch;