const editFarmProfile = (state = {
    
    farm_name: "",
    street_address: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    size: "",
    type: [],
    bio: "",
}, action) => {
        
    if (action.type === 'UPDATE_FARM_BIO') {
        
        return {...state, size: action.payload.bio};

    } else if (action.type === 'UPDATE_FARM_SIZE') {

        return {...state, bio: action.payload.size};

    } else if (action.type === 'UPDATE_FARM_NAME') {

       return {
           ...state,
           farm_name: action.payload
       };

   } else if (action.type === 'UPDATE_FARM_ADDRESS') {

           return {
               ...state,
               street_address: action.payload
           };
    
    } else if (action.type === 'UPDATE_FARM_CITY') {

           return {
               ...state,
               city: action.payload
           };

    } else if (action.type === 'UPDATE_FARM_STATE') {

           return {
               ...state,
               state: action.payload
           };

    } else if (action.type === 'UPDATE_FARM_PHONE') {

           return {
               ...state,
               phone: action.payload
           };

    } else if (action.type === 'UPDATE_FARM_ZIP') {

           return {
               ...state,
               zipcode: action.payload
           };

    } else if (action.type === 'UPDATE_FARM_TYPE') {
        if (state.type.indexOf(action.payload) < 0) {
            // state.type.push(action.payload);
            return { ...state, type: [...state.type, action.payload] }
        } //end of if 
        //if state does include value, remove it 
         else {
            // for (let i = 0; i < state.type.length; i++) {
            //     if (state.type[i] === action.payload) {
            //         state.type.splice(i, 1)
            //     } //end of conditional 
            // } //end of for loop 

            let filteredTypes = state.type.filter(type => {
               return type !== action.payload
            })
           return {
               ...state,
               type: filteredTypes
           }

        } //end of else 
        //return state;
    } else {
         return state;
    }
}
    
    
export default editFarmProfile;