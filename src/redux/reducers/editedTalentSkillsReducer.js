const editedTalentSkillsReducer = (state = {
    editedSkills: [],
    editedSkillsExpertise: []
}, action) => {
    if (action.type === 'SET_EDITED_SKILLS') {
        if (state.editedSkills.indexOf(action.payload) < 0) {
            return { ...state, editedSkills: [...state.editedSkills, action.payload] }

        } //end of if 
        //if state does include value, remove it 
        else {
            let filteredSkills = state.editedSkills.filter(skill => {
                return skill !== action.payload
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

    } else {
        return state
    }
};


export default editedTalentSkillsReducer;