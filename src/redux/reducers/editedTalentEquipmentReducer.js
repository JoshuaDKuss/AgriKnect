const editedTalentEquipmentReducer = (state = [], action) => {

    // (state.indexOf(action.payload) < 0) {
   
  if (action.type === 'SET_INITIAL_EQUIPMENT') {
     const index = state.findIndex(item => item.id == action.payload.id)
       if (action.payload.proficiency_category == 'Equipment' || 
       action.payload.proficiency_category == 'Brands') {
            if(state.indexOf(action.payload) < 0) {
                return [...state, action.payload]
            } else {
                return state
            }
       } else {
           return state
       } 
    }else if (action.type === 'SET_EDITED_EQUIPMENT') {
      const index = state.findIndex(item => item.id == action.payload.id)

        if (index < 0) {
            // state.equipment.push(action.payload);
            return [...state, action.payload]
        } //end of if 
        //if state does include value, remove it 
        else {
           

            let filteredEquipment = state.filter(equipment => {
                return equipment.id !== action.payload.id
            })

            return filteredEquipment

        } //end of else
    } else {
        return state
    }
};


export default editedTalentEquipmentReducer;