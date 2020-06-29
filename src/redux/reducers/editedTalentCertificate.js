const editedTalentCertification = (state = [], action) => {
    if (action.type === 'SET_EDITED_CERTIFICATION') {
        let certificateToAdd = {
            certificate: '',
            issuingCompany: '',
            issueDate: '',
            expirationDate: ''
        }
        certificateToAdd.certificate = action.payload.state.certificate;
        certificateToAdd.issuingCompany = action.payload.state.issuingCompany;
        certificateToAdd.issueDate = action.payload.state.issueDate;
        certificateToAdd.expirationDate = action.payload.state.expirationDate;

        return [...state.certification, certificateToAdd] 
    } else {
        return state
    }
};


export default editedTalentCertification;