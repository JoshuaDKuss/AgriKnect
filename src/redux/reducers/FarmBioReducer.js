const FarmBioReducer = (state = [], action) =>{
    if(action.type === 'SET_FARM'){
      console.log(action.payload);
      return action.payload;
     
    } else {
      return state;
    }
    
  }
  
  export default FarmBioReducer;