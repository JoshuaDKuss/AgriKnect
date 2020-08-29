const editedTalentCertification = (state = [], action) => {
    if (action.type === 'SET_INITIAL_CERTIFICATIONS') {
        // for(let i = 0; i < action.payload.length; i++ ) {
        const index = state.findIndex(item => item.id == action.payload.id)
        if (index < 0) {
         let certificateToAdd = {
                id: null,
                certificate: null,
                issuingCompany: null,
                issueDate: null,
                 expirationDate: null
            } //end of certificate to add 
            certificateToAdd.id = action.payload.id;
            certificateToAdd.certificate = action.payload.certification_name;
            certificateToAdd.issuingCompany = action.payload.issuing_company;
        certificateToAdd.issueDate = action.payload.issue_date;
            certificateToAdd.expirationDate = action.payload.expiration_date;
            console.log('need to add')
            return [...state, certificateToAdd] 
        } else {
            return state
        }
        // }
    } else if (action.type === 'SET_EDITED_CERTIFICATION') {
        const index = state.findIndex(item => item.id == action.payload.id)
        if (index < 0) {
            let certificateToAdd = {
                id: null,
                certificate: null,
                issuingCompany: null,
                issueDate: null,
                expirationDate: null
            } //end of certificate to add 
            certificateToAdd.id = action.payload.id;
            certificateToAdd.certificate = action.payload.certificate;
            certificateToAdd.issuingCompany = action.payload.issuingCompany;
            certificateToAdd.issueDate = action.payload.issueDate;
            certificateToAdd.expirationDate = action.payload.expirationDate;
            console.log('need to add')
            return [...state, certificateToAdd] 

        } else {

            let certificateToAdd = {
                id: null,
                certificate: null,
                issuingCompany: null,
                issueDate: null,
                expirationDate: null
            } //end of certificate to add 
            certificateToAdd.id = action.payload.id;
            certificateToAdd.certificate = action.payload.certificate;
            certificateToAdd.issuingCompany = action.payload.issuingCompany;
            certificateToAdd.issueDate = action.payload.issueDate;
            certificateToAdd.expirationDate = action.payload.expirationDate;
            console.log('need to delete');
            let filteredCertificates = state.filter(certificate => {
                return certificate.id !== action.payload.id
            }) //end of filter
        
            filteredCertificates.push(certificateToAdd)
        return filteredCertificates; 
        } //end of else
     } else if (action.type === 'DELETE_EDITED_CERTIFICATE') {
            let filteredCertificates = state.filter(certificate => {
                return certificate.id !== action.payload.id
            }) //end of filter
            console.log('!!!!!!!!!!!!',filteredCertificates)
        return filteredCertificates; 
     } else if (action.type === 'DELETE_ALL_CERTIFICATIONS'){
         return []
     }else {
        return state; 
    }
}

export default editedTalentCertification;
