const jobPostingReducer = (state = {
    jobTitle: null,
    jobDescription: null,
    jobType: null,
    startDate: null,
    endDate: null,
    skills: [],
    equipment: [],
    brands: [],
    housingProvided: null,
    housingDetails: null,
    relocationProvided: null, 
    paymentType: null,
    paymentAmount: null

}, action) => {
    if (action.type === 'SET_JOB_TITLE') {
        console.log(action.payload);
        return { ...state, jobTitle: action.payload}
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
    } else if (action.type === 'SET_JOB_SKILLS') {
        if (state.skills.indexOf(action.payload) < 0) {
        return {...state, skills: [...state.skills, action.payload]}
        } else {
              let filteredSkills = state.skills.filter(skill => {
               return skill !== action.payload
            })
           return {...state, skills: filteredSkills}
        }
        

    } 
    else if (action.type === 'SET_JOB_EQUIPMENT') {
        if (state.equipment.indexOf(action.payload) < 0) {
            return { ...state, equipment: [...state.equipment, action.payload] }
        } else {
            let filteredEquipment = state.equipment.filter(equipment => {
                return equipment !== action.payload
            })
            return { ...state, equipment: filteredEquipment }
        }


    } 
    else if (action.type === 'SET_JOB_BRAND') {
        if (state.brands.indexOf(action.payload) < 0) {
        return {...state, brands: [...state.brands, action.payload]}
        } else {
              let filteredBrands = state.brands.filter(brand => {
               return brand !== action.payload
            })
           return {...state, brands: filteredBrands}
        }
        

    } 
    else if (action.type === 'SET_ACCOMODATION') {
        console.log(action.payload);
        if(action.payload == 'true') {
            return { ...state, housingProvided: "true"}
        } else{
            return { ...state, housingProvided: "false" }
        }
        
    } else if (action.type === 'SET_ACCOMODATION_DESCRIPTION') {
        return { ...state, housingDetails: action.payload }

    } else if (action.type === 'SET_RELOCATION') {
        if (action.payload === 'true') {
            return { ...state, relocationProvided: 'true' }
        } else {
            return { ...state, relocationProvided: 'false' }
        }

    } else if (action.type === 'SET_PAYMENT_TYPE') {
        return { ...state, paymentType: action.payload }

    } else if (action.type === 'SET_PAYMENT_AMOUNT') {
        return { ...state, paymentAmount: action.payload }

    } else if (action.type === 'DELETE_POSTING'){
        return {
            jobTitle: '',
            jobDescription: '',
            jobType: '',
            startDate: null,
            endDate: null,
            skills: [],
            equipment: [],
            brands: [],
            housingProvided: '',
            housingDetails: '',
            relocationProvided: '',
            paymentType: '',
            paymentAmount: null

        }
    } else {
        return state
    }

}

export default jobPostingReducer;