const farmForm = (state = {
    nameLocation: [],
    fSize: [],
    type: [],
    farmBio: ''
}, action) => {
    if (action.type === 'SET_FARM_NAME_LOCATION') {
        switch (action.type) {
            case 'SET_FARM_NAME_LOCATION':
                return action.payload;
                // default: return state;
        }
    };
    if (action.type === 'SET_FARM_SIZE') {
        switch (action.type) {
            case 'SET_FARM_SIZE':
                return action.payload;
        }
    };
    if (action.type === 'SET_FARM_BIO') {
        switch (action.type) {
            case 'SET_FARM_BIO':
                return action.payload;
        }
    };
    if (action.type === 'SET_FARM_TYPE') {
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
    }
    return state;
}

export default farmForm;