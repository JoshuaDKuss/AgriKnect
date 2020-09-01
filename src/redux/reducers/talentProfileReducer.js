const talentProfileReducer = (state = [], action) =>{
    if(action.type === 'SET_TALENT'){
      console.log(action.payload);
      return action.payload
    } else {
      return state
    }  
  }
  
  export default talentProfileReducer;
