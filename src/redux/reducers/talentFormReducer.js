// {
// certificate: '',
//     issuingCompany: '',
//         startDate: '',
//             endDate: ''
//     }, 

const talentForm = (state = {
    initialSkills: [],
    skillsExpertise: [],
    equipment: [],
    brands: [], 
    certifications: [], 
    education: {
        school: '',
        degree: '',
        startDate: '',
        endDate: ''
    },
    location: [],
    bio: ''
}, action) => {
    let certificateObject = {
        certificate: '',
        issuingCompany: '',
    }
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
    } else if (action.type === 'SET_SKILLS_EXPERIENCE'){
        //if this skill is already is not in the array, add it 
        // if (state.skillsExpertise.some(object => object.skill === action.payload.skill)) {
             if (state.skillsExpertise.findIndex( object => object.skill === action.payload.skill) < 0 ) {
            console.log('need to add');
            state.skillsExpertise.push(action.payload);
            // state.skillsExpertise.splice(i, 1)
            
                } 
        else {
            console.log('need to delete') ;
                 for (let i = 0; i < state.skillsExpertise.length; i++) {
                     if (state.skillsExpertise[i].skill === action.payload.skill) {
                         state.skillsExpertise.splice(i, 1)
                     } //end of conditional 
                 } //end of for loop 
            state.skillsExpertise.push(action.payload);
        }
        console.log('skillsExpertise', state.skillsExpertise)
        return state;
    } else if (action.type === 'SET_EQUIPMENT') {
        if (state.equipment.indexOf(action.payload) < 0) {
            state.equipment.push(action.payload);
        } //end of if 
        //if state does include value, remove it 
        else {
            for (let i = 0; i < state.equipment.length; i++) {
                if (state.equipment[i] === action.payload) {
                    state.equipment.splice(i, 1)
                } //end of conditional 
            } //end of for loop 

        } //end of else 
        return state; 

    } else if (action.type === 'SET_BRANDS') {
        if (state.brands.indexOf(action.payload) < 0) {
            state.brands.push(action.payload);
        } //end of if 
        //if state does include value, remove it 
        else {
            for (let i = 0; i < state.brands.length; i++) {
                if (state.brands[i] === action.payload) {
                    state.brands.splice(i, 1)
                } //end of conditional 
            } //end of for loop 

        } //end of else 
        return state; 
    }else if (action.type === 'SET_CERTIFICATE') {
       certificateObject.certificate = action.payload;
        console.log('object', certificateObject )
        
        return state;

    } else if (action.type == 'SET_ISSUING_COMPANY') {
        certificateObject.issuingCompany = action.payload
        console.log('object', certificateObject)
        return state; 
    }{
        return state; 
    }
};


export default talentForm;