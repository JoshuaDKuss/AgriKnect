const editFarmProfile = (state = {
    
}, action) => {
    if (action.type === 'UPDATE_FARM') {
        return action.payload;
    }  else {
         return state;
    }
};
    
export default editFarmProfile;