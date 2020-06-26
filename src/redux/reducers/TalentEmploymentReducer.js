const talentEmploymentReducer = (state = [], action) =>{
    if(action.type === 'SET_TALENT_EMPLOYMENT'){
      console.log(action.payload);
      return action.payload
     
    } else {
      return state
    }
    
  }
  
  export default talentEmploymentReducer;