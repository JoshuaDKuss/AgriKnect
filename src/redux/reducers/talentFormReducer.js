import { combineReducers } from 'redux';



const formData = (state = {
    initialSkills: [],
    skillsExpertise: [],
    equipment: [],
    brands: [], 
    certification: [], 
    education: [],
    employment: [],
    location: {
        city: '',
        state: '',
        zipcode: ''
    },
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
        
         state.skillsExpertise.push(action.payload);

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

            // let filteredBrands = state.brands.filter(brand => {
            //    return brand !== action.payload
            // })

            // return {...state, brands: filteredBrands} 

        } //end of else 
        return state; 
    }else if (action.type === 'SET_CERTIFICATE') {
       let certificateToAdd = {
           key: '',
           certificate: '',
           issuingCompany: '',
           issueDate: '',
           expirationDate: ''
       }
      certificateToAdd.key = action.payload.state.key
      certificateToAdd.certificate = action.payload.state.certificate;
      certificateToAdd.issuingCompany = action.payload.state.issuingCompany;
      certificateToAdd.issueDate = action.payload.state.issueDate;
      certificateToAdd.expirationDate = action.payload.state.expirationDate; 

        state.certification.push(certificateToAdd); 

        // return {...state, certification: [...state.certification, certificateToAdd]}
        
        return state;

    } else if (action.type === 'EDIT_CERTIFICATE') {
        console.log(action.payload);
        //loop through certifications array to find the certificate to edit based off key 
        for(let i = 0; i < state.certification.length; i ++) {
            //if key (unique ID) matches, then edit it
            if(state.certification[i].key === action.payload.state.key){
                console.log('found it');
                for (let key in state.certification[i]) {
                    if (key === action.payload.property) {
                        console.log('key',key)
                        // state.certifications.key = action.payload.newValue
                    } //end if 
                } //end for loop key in state.certifications
                } //end if statement for .key

            } //end for loop for state.certifications
      
        return state; 
    } else if (action.type === 'SET_EDUCATION') {
        let educationToAdd = {
            key: '',
            school: '',
            degree: '',
            startDate: '',
            endDate: ''
        }
        educationToAdd.key = action.payload.state.key
        educationToAdd.school = action.payload.state.school;
        educationToAdd.degree = action.payload.state.degree;
        educationToAdd.startDate = action.payload.state.startDate;
        educationToAdd.endDate = action.payload.state.endDate;

        state.education.push(educationToAdd);

        return state;

    } else if (action.type === 'SET_EMPLOYMENT') {
        let employerToAdd = {
            key: '',
            company: '',
            title: '',
            startDate: '',
            endDate: ''
        }
        employerToAdd.key = action.payload.state.key
        employerToAdd.company = action.payload.state.company;
        employerToAdd.title = action.payload.state.title;
        employerToAdd.startDate = action.payload.state.startDate;
        employerToAdd.endDate = action.payload.state.endDate;

        state.employment.push(employerToAdd);

        return state;

    } else if (action.type === 'SET_LOCATION') {
        
        state.location.city = action.payload.city;
        state.location.state = action.payload.state;
        state.location.zipcode = action.payload.zipcode;

        return state;

    } else if (action.type === 'SET_BIO') {

        state.bio = action.payload.bio;
     
        return state;

    }{
        return state; 
    }
};

const proficiencies = (state = [], action) => {
    if (action.type === 'SET_PROFICIENCIES') {
        return action.payload;
    } else {
        return state;
    }
}

export default combineReducers({
    formData,
    proficiencies
});

// export default talentForm;