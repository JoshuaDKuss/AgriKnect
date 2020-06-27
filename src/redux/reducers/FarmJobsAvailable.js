const FarmJobsAvailable = (state = [], action) =>{
    if(action.type === 'SET_JOBS'){
      console.log(action.payload);
      return action.payload
     
    } else {
      return state
    }
    
  }
  
  export default FarmJobsAvailable;