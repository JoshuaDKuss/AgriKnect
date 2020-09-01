const editedTalentEmployment = (state = [], action) => {
    if (action.type === 'SET_INITIAL_EMPLOYMENT') {
        // for(let i = 0; i < action.payload.length; i++ ) {
        const index = state.findIndex(item => item.id == action.payload.id)
        if (index < 0) {
            let employmentToAdd = {
                id: null,
                title: null,
                company: null,
                startDate: null,
                endDate: null
            }
            console.log('need to add')
            employmentToAdd.id = action.payload.id
            employmentToAdd.company = action.payload.employer_name;
            employmentToAdd.title = action.payload.title;
            employmentToAdd.startDate = action.payload.start_date;
            employmentToAdd.endDate = action.payload.end_date;

            return [...state, employmentToAdd]
        } else {
            return state
        }
        // }
    } else if (action.type === 'SET_EDITED_EMPLOYMENT') {
        const index = state.findIndex(item => item.id == action.payload.id)
        if (index < 0) {
           let employmentToAdd = {
                id: null,
                title: null,
                company: null,
                startDate: null,
                endDate: null
            }
            console.log('need to add')
            employmentToAdd.id = action.payload.id
            employmentToAdd.company = action.payload.company;
            employmentToAdd.title = action.payload.title;
            employmentToAdd.startDate = action.payload.startDate;
            employmentToAdd.endDate = action.payload.endDate;
            return [...state, employmentToAdd]
        } else {

            let employmentToAdd = {
                id: null,
                title: null,
                company: null,
                startDate: null,
                endDate: null
            }
           
            employmentToAdd.id = action.payload.id
            employmentToAdd.company = action.payload.company;
            employmentToAdd.title = action.payload.title;
            employmentToAdd.startDate = action.payload.startDate;
            employmentToAdd.endDate = action.payload.endDate;
      
            let filteredEmployment = state.filter(employment => {
                return employment.id !== action.payload.id
            }) //end of filter

            filteredEmployment.push(employmentToAdd)
            return filteredEmployment;
        } //end of else
    } else if (action.type === 'DELETE_EDITED_EMPLOYMENT') {
       let filteredEmployment = state.filter(employment => {
                return employment.id !== action.payload.id
            }) //end of filter
       
        return filteredEmployment;
    } else if (action.type === 'DELETE_ALL_EMPLOYMENT') {
        return []
    } else {
        return state;
    }
}

export default editedTalentEmployment;
