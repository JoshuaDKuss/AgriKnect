const editedTalentCertification = (state = [], action) => {
    if (action.type === 'SET_INITIAL_CERTIFICATIONS') {
        for(let i = 0; i < action.payload.length; i++ ) {
         let certificateToAdd = {
                id: '',
                certificate: '',
                issuingCompany: '',
                issueDate: '',
                expirationDate: ''
            } //end of certificate to add 
            certificateToAdd.id = action.payload[i].id;
            certificateToAdd.certificate = action.payload[i].certification_name;
            certificateToAdd.issuingCompany = action.payload[i].issuing_company;
        certificateToAdd.issueDate = action.payload[i].issue_date;
            certificateToAdd.expirationDate = action.payload[i].expiration_date;
            console.log('need to add')
            return [...state, certificateToAdd] 
        }
    } else if (action.type === 'SET_EDITED_CERTIFICATION') {
        const index = state.findIndex(item => item.id == action.payload.id)
        if (index < 0) {
            let certificateToAdd = {
                id: '',
                certificate: '',
                issuingCompany: '',
                issueDate: '',
                expirationDate: ''
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
                id: '',
                certificate: '',
                issuingCompany: '',
                issueDate: '',
                expirationDate: ''
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

        return filteredCertificates; 
     } else {
        return state; 
    }
}



export default editedTalentCertification;