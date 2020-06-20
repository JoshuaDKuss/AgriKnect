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
        for(let i = 0; i < action.payload.length; i ++) {
            this.setState ({
                ...this.state,
                initialSkills: [...this.state.initialSkills, action.payload] })
        }
    } else {
        return state; 
    }
};


export default talentForm;