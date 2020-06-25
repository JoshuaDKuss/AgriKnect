const farmForm = (state = {
    nameLocation: {
        fName: "",
        fAddress: "",
        fCity: "",
        fState: "",
        fZip: "",
        fPhone: "",
        fEmail: "",
    },
    //fAddress: [],
    fSize: [],
    fType: [],
    fBio: [],
}, action) => {
    if (action.type === 'SET_FARM_NAME_LOCATION') {
        // switch (action.type) {
        //     case 'SET_FARM_NAME_LOCATION':
        //         return action.payload;
                // default: return state;
        state.nameLocation.fName = action.payload.fName;
        state.nameLocation.fAddress = action.payload.fAddress;
        state.nameLocation.fCity = action.payload.fCity;
        state.nameLocation.fState = action.payload.fState;
        state.nameLocation.fZip = action.payload.fZip;
        state.nameLocation.fPhone = action.payload.fPhone;
        state.nameLocation.fEmail = action.payload.fEmail;
        
        return state;

    } else if (action.type === 'SET_FARM_SIZE') {
        // switch (action.type) {
        //     case 'SET_FARM_SIZE':
        //         return action.payload;
        state.fSize = action.payload.fSize;

        return state;

    } else if (action.type === 'SET_FARM_BIO') {
        // switch (action.type) {
        //     case 'SET_FARM_BIO':
        //         return action.payload;
        state.fBio = action.payload.fBio;

        return state;

    } else if (action.type === 'SET_FARM_TYPE') {
        if (state.fType.indexOf(action.payload) < 0) {
            state.fType.push(action.payload);
        } //end of if 
        //if state does include value, remove it 
        else {
            for (let i = 0; i < state.fType.length; i++) {
                if (state.fType[i] === action.payload) {
                    state.fType.splice(i, 1, 2)
                } //end of conditional 
            } //end of for loop 

        } //end of else 
    } // end of else if
    return state;
};

export default farmForm;