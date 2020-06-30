const matchData = (state = '', action) => {
    if (action.type === 'SET_MATCH_DATA') { 
        return action.payload
    } else {
        return state;
    }
}

export default matchData;