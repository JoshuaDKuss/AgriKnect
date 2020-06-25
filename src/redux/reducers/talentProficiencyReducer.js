const talentProficiencyReducer = (state = [], action) =>{
    if(action.type === 'SET_TALENT_SKILLS'){
      console.log(action.payload);
      return action.payload
     
    } else {
      return state
    }
    
  }
  
  export default talentProficiencyReducer;