const jobPostingReducer = (state = {
    jobTitle: '',
    jobDescription: '',
    jobType: '',
    startDate: '',
    endDate: '',
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
    } else if (action.type === 'SET_JOB_TYPE') {
        console.log(action.payload);
        return { ...state, jobType: action.payload }
    } else if (action.type === 'SET_START_DATE') {
        return { ...state, startDate: action.payload }
    } else if (action.type === 'SET_END_DATE') {
        return { ...state, endDate: action.payload }
    } else {
        return state
    }

}

export default jobPostingReducer;