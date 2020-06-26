const talentEducationReducer = (state = [], action) =>{
    if(action.type === 'SET_TALENT_EDUCATION'){
      console.log(action.payload);
      return action.payload
     
    } else {
      return state
    }
    
  }
  
  export default talentEducationReducer;