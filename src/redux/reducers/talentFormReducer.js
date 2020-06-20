const talentForm = (state = {
    initialSkills: [],
    skillsExpertise: [],
    equipment: [],
    brands: [], 
    certifications: {
        certificate: '',
        issuingCompany: '', 
        startDate: '',
        endDate: ''
    }, 
    education: {
        school: '',
        degree: '',
        startDate: '',
        endDate: ''
    },
    location: [],
    bio: ''
}, action) => {
    //set initial skills 
    if(action.type === 'SET_INITIAL_SKILLS'){
        
        if (state.initialSkills.indexOf(action.payload) < 0) {
            state.initialSkills.push(action.payload);
        } //end of if 
        //if state does include value, remove it 
        else {
            for (let i = 0; i < state.initialSkills.length; i++) {
                if (state.initialSkills[i] === action.payload) {
                    state.initialSkills.splice(i, 1)
                } //end of conditional 
            } //end of for loop 

        } //end of else 
        return state; 
    } else {
        return state; 
    }
};


export default talentForm;