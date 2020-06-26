const farmForm = (state = {
    nameLocation: {
        farm_name: "",
        street_address: "",
        city: "",
        state: "",
        zipcode: "",
        phone: "",
    },
    size: "",
    type: [],
    bio: "",
}, action) => {
    if (action.type === 'SET_FARM_NAME_LOCATION') {
         if (event.target.value = props.farm_name)
        // return {...state, farm_name: action.payload.farm_name
            // farm_name: action.payload.farm_name,
            // street_address: action.payload.street_address,
            // city: action.payload.city,
            // state: action.payload.state,
            // zipcode: action.payload.zipcode,
            // phone: action.payload.phone,
        return {...state, farm_name: action.payload.farm_name}
        // };

    } else if (action.type === 'SET_FARM_SIZE') {
        
        return {...state, size: action.payload.size};

    } else if (action.type === 'SET_FARM_BIO') {

        return {...state, bio: action.payload.bio};

    } else if (action.type === 'SET_FARM_TYPE') {
        if (state.type.indexOf(action.payload) < 0) {
            state.type.push(action.payload);
        } //end of if 
        //if state does include value, remove it 
        else {
            for (let i = 0; i < state.type.length; i++) {
                if (state.type[i] === action.payload) {
                    state.type.splice(i, 1)
                } //end of conditional 
            } //end of for loop 

        } //end of else 
    } // end of else if
    return state;
};

export default farmForm;