const talentProficiencyCert = (state = [], action) =>{
    if(action.type === 'SET_TALENT_CERTIFICATION'){
      console.log(action.payload);
      return action.payload
     
    } else {
      return state
    }
    
  }
  
  export default talentProficiencyCert;