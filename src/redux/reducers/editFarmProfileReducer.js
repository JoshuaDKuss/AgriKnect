const editFarmProfile = (state = {
    farm_name: "",
    street_address: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    size: "",
    //type: [],
    bio: "",
}, action) => {
    if (action.type === 'SET_EDIT_FARM_PROFILE') {
        return action.payload;
    }  else {
         return state;
    }
};
    
export default editFarmProfile;