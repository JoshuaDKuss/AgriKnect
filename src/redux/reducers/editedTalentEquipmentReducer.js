const editedTalentEquipmentReducer = (state = [], action) => {
    if (action.type === 'SET_EDITED_EQUIPMENT') {
        if (state.indexOf(action.payload) < 0) {
            // state.equipment.push(action.payload);
            return [...state, action.payload]
        } //end of if 
        //if state does include value, remove it 
        else {
            // for (let i = 0; i < state.equipment.length; i++) {
            //     if (state.equipment[i] === action.payload) {
            //         state.equipment.splice(i, 1)
            //     } //end of conditional 
            // } //end of for loop 

            let filteredEquipment = state.filter(equipment => {
                return equipment !== action.payload
            })

            return filteredEquipment

        } //end of else
    } else {
        return state
    }
};


export default editedTalentEquipmentReducer;