import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import talentForm from './talentFormReducer'; 
import farmForm from './farmFormReducer'; 
import talentProfileReducer from './talentProfileReducer'
import jobPostingReducer from './jobPostingReducer'; 
import talentProficiencyReducer from './talentProficiencyReducer'
import talentProficiencyCert from './TalentProficiencyCert';
import talentEducationReducer from './TalentEducationReducer';
import talentEmploymentReducer from './TalentEmploymentReducer';
import farmBioReducer from './FarmBioReducer';
import farmJobsAvailable from './FarmJobsAvailable'
import editedTalentSkillsReducer from './editedTalentSkillsReducer'; 
import editedTalentEquipmentReducer from './editedTalentEquipmentReducer';
//import farmForm from './farmFormReducer'; 
import jobSearch from './jobSearchReducer'; 
import editedTalentCertification from './editedTalentCertificate';
import editFarmProfile from './editFarmProfileReducer';
import matchData from './matchReducer'; 
import editedTalentEducation from './editedTalentEducation'; 


// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  talentForm, //sets information for farm talent 
  farmForm,
  talentProfileReducer, //information for talent profile page
  jobPostingReducer, //information for job posting 
  talentProficiencyReducer, //proficiency information talent profile page
  talentProficiencyCert, //for talent certification, profile page. 
  talentEducationReducer, //for talent education, profile page.
  talentEmploymentReducer, //talent employment, profile page. 
  farmBioReducer, 
  farmJobsAvailable,
  editedTalentSkillsReducer,  //stores edited skills for talent
  editedTalentEquipmentReducer, //stores edited equipment and brands for talent 
  
  jobSearch,
  editedTalentCertification, //stores edited certifications
  // matchData,
  editedTalentEducation
  editFarmProfile,
  matchData
});

export default rootReducer;
