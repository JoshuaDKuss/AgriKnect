const editedTalentSkillsReducer = (state = {
    editedSkills: [],
    editedSkillsExpertise: []
}, action) => {
   if (action.type === 'SET_INITIAL_SKILLS') {
       const index = state.editedSkills.findIndex(item => item.id == action.payload.id)
       if (action.payload.proficiency_category == 'Precision Farming Technology' || 
       action.payload.proficiency_category == 'General Agriculture' || 
       action.payload.proficiency_category == 'Maintenance and Mechanics' || 
       action.payload.proficiency_category == 'Trucking' ) {
            if(index < 0) {
                return { ...state, editedSkills: [...state.editedSkills, action.payload] }
            } else {
                return state
            }
       } else {
           return state
       }
    }
    else if (action.type === 'SET_EDITED_SKILLS') {
        const index = state.editedSkills.findIndex(item => item.id == action.payload.id)
        // if (state.editedSkills.indexOf(action.payload) < 0) {
            if(index < 0) {
            return { ...state, editedSkills: [...state.editedSkills, action.payload] }

        } //end of if 
        //if state does include value, remove it 
        else {
            let filteredSkills = state.editedSkills.filter(skill => {
                return skill.id !== action.payload.id
            })

            return { ...state, editedSkills: filteredSkills }

        } //end of else 
        return state; 
    } else if (action.type == 'SET_EDITED_SKILLS_EXPERTISE') {
    const index = state.editedSkillsExpertise.findIndex(item => item.skillID == action.payload.skillID)
    if (index < 0) {
        console.log('need to add')
       
       return { ...state, editedSkillsExpertise: [...state.editedSkillsExpertise, action.payload] }

    } //end of if hello
    //if state does include value, remove it 
    else {
        console.log('need to delete');
        let filteredSkills = state.editedSkillsExpertise.filter(skill => {
            return skill.skillID != action.payload.skillID
        })
        

        filteredSkills.push(action.payload);

        return { ...state, editedSkillsExpertise: filteredSkills}

    } //end of else 

    } else if(action.type == 'DELETE_ALL_SKILLS') {
        return {
    editedSkills: [],
    editedSkillsExpertise: []
}
    } else {
        return state
    }
};


export default editedTalentSkillsReducer;