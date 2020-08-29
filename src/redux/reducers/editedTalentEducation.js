const editedTalentEducation = (state = [], action) => {
    if (action.type === 'SET_INITIAL_EDUCATION') {
        // for(let i = 0; i < action.payload.length; i++ ) {
        const index = state.findIndex(item => item.id == action.payload.id)
        if (index < 0) {
            let educationToAdd = {
                id: null,
                school: null,
                degree: null,
                startDate: null,
                endDate: null
            }
            console.log('need to add')
            educationToAdd.id = action.payload.id
            educationToAdd.school = action.payload.institution_name;
            educationToAdd.degree = action.payload.degree;
            educationToAdd.startDate = action.payload.start_date;
            educationToAdd.endDate = action.payload.end_date;


            return [...state, educationToAdd]
        } else {
            return state
        }
        // }
    } else if (action.type === 'SET_EDITED_EDUCATION') {
        const index = state.findIndex(item => item.id == action.payload.id)
        if (index < 0) {
            let educationToAdd = {
                id: null,
                school: null,
                degree: null,
                startDate: null,
                endDate: null
            }//end of certificate to add 
          educationToAdd.id = action.payload.id
            educationToAdd.school = action.payload.school
            educationToAdd.degree = action.payload.degree;
            educationToAdd.startDate = action.payload.startDate;
            educationToAdd.endDate = action.payload.endDate;
            console.log('need to add')
            return [...state, educationToAdd]

        } else {

            let educationToAdd = {
                id: null,
                school: null,
                degree: null,
                startDate: null,
                endDate: null
            }//end of certificate to add 
          educationToAdd.id = action.payload.id
            educationToAdd.school = action.payload.school;
            educationToAdd.degree = action.payload.degree;
            educationToAdd.startDate = action.payload.startDate;
            educationToAdd.endDate = action.payload.endDate;
            console.log('need to delete');
            let filteredEducation = state.filter(education => {
                return education.id !== action.payload.id
            }) //end of filter

            filteredEducation.push(educationToAdd)
            return filteredEducation;
        } //end of else
    } else if (action.type === 'DELETE_EDITED_EDUCATION') {
        let filteredEducation = state.filter(education => {
            return education.id !== action.payload.id
        }) //end of filter
        console.log('!!!!!!!!!!!!', filteredEducation)
        return filteredEducation;
    } else if (action.type === 'DELETE_ALL_EDUCATION') {
        return []
    } else {
        return state;
    }
}

export default editedTalentEducation;
