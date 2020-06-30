const editFarmProfile = (state = {
    // farm_name: "",
    // street_address: "",
    // city: "",
    // state: "",
    // zipcode: "",
    // phone: "",
    // size: "",
    // //type: [],
    // bio: "",
}, action) => {
    if (action.type === 'UPDATE_FARM') {
        return action.payload;
    }  else {
         return state;
    }
};
    
export default editFarmProfile;