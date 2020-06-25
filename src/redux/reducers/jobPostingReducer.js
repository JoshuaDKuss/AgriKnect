const jobPostingReducer = (state = {
    jobTitle: '',
    jobDescription: '',
    skills: [],
    equipment: [],
    brands: [],
    housingProvided: '',
    housingDetails: '',
    reloationProvided: '', 

}, action) => {
    if (action.type === 'SET_JOB_TITLE') {
        console.log(action.payload);
        return {...state, title: action.payload}
    } else if (action.type === 'SET_JOB_DESCRIPTION') {
        console.log(action.payload);
        return { ...state, jobDescription: action.payload }
    } else {
        return state
    }

}

export default jobPostingReducer;