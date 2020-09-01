import { combineReducers } from 'redux';

const formData = (state = {
    initialSkills: [],
    skillsExpertise: [],
    equipment: [],
    brands: [], 
    certification: [], 
    education: [],
    employment: [],
    city: null,
    state: null,
    zipcode: null,
    bio: null
}, action) => {
    let certificateObject = {
        certificate: '',
        issuingCompany: '',
    }
    //set initial skills 
    if(action.type === 'SET_INITIAL_SKILLS'){
        
        if (state.initialSkills.indexOf(action.payload) < 0) {
            return { ...state, initialSkills: [...state.initialSkills, action.payload]}
            
        } //end of if 
        //if state does include value, remove it 
        else {
            let filteredSkills = state.initialSkills.filter(skill => {
               return skill !== action.payload
            })

            return { ...state, initialSkills: filteredSkills} 

        } //end of else 
        return state; 
    } else if (action.type === 'SET_SKILLS_EXPERIENCE'){
        // state.skillsExpertise.indexOf(action.payload) < 0
        const index = state.skillsExpertise.findIndex (item => item.skillID == action.payload.skillID)
        if (index < 0 ) {
            console.log('need to add')
            return { ...state, skillsExpertise: [...state.skillsExpertise, action.payload] }

        } //end of if 
        //if state does include value, remove it 
        else {
            console.log('need to delete');
            let filteredSkills = state.skillsExpertise.filter(skill => {
                return skill.skillID != action.payload.skillID
            })
            // let filteredSkills = state.skillsExpertise.filter(skill => {
            //     return skill !== action.payload
            // })

            filteredSkills.push(action.payload); 

            return { ...state, skillsExpertise: filteredSkills }

        } //end of else 
        
        //  state.skillsExpertise.push(action.payload);
        // return { ...state, skillsExpertise: [...state.skillsExpertise, action.payload] }

        // return state;
    } else if (action.type === 'SET_EQUIPMENT') {
        if (state.equipment.indexOf(action.payload) < 0) {
            // state.equipment.push(action.payload);
            return { ...state, equipment: [...state.equipment, action.payload] }
        } //end of if 
        //if state does include value, remove it 
        else {
            // for (let i = 0; i < state.equipment.length; i++) {
            //     if (state.equipment[i] === action.payload) {
            //         state.equipment.splice(i, 1)
            //     } //end of conditional 
            // } //end of for loop 

            let filteredEquipment= state.equipment.filter(equipment => {
                return equipment !== action.payload
            })

            return { ...state, equipment: filteredEquipment } 

        } //end of else 
        return state; 

    } else if (action.type === 'SET_BRANDS') {
        if (state.brands.indexOf(action.payload) < 0) {
            // state.brands.push(action.payload);
            return { ...state, brands: [...state.brands, action.payload] }
        } //end of if 
        //if state does include value, remove it 
        else {
            // for (let i = 0; i < state.brands.length; i++) {
            //     if (state.brands[i] === action.payload) {
            //         state.brands.splice(i, 1)
            //     } //end of conditional 
            // } //end of for loop 

            let filteredBrands = state.brands.filter(brand => {
               return brand !== action.payload
            })

            return {...state, brands: filteredBrands} 

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

        return {...state, certification: [...state.certification, certificateToAdd]}

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

    } else if (action.type === 'SET_CITY') {

        return { ...state, city: action.payload}
        
       
    } else if (action.type === 'SET_STATE') {

        return { ...state, state: action.payload }


    } else if (action.type === 'SET_ZIPCODE') {

        return { ...state, zipcode: action.payload }


    }  else if (action.type === 'SET_BIO') {

        return {
            ...state,
            bio: action.payload
        };
     
      
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
