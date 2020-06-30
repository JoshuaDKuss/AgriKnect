const editedTalentEducation = (state = [], action) => {
    if (action.type === 'SET_INITIAL_EDUCATION') {
        // for(let i = 0; i < action.payload.length; i++ ) {
        const index = state.findIndex(item => item.id == action.payload.id)
        if (index < 0) {
            let educationToAdd = {
                id: '',
                school: '',
                degree: '',
                startDate: '',
                endDate: ''
            }//end of certificate to add 
            // certificateToAdd.id = action.payload.id;
            // certificateToAdd.certificate = action.payload.certification_name;
            // certificateToAdd.issuingCompany = action.payload.issuing_company;
            // certificateToAdd.issueDate = action.payload.issue_date;
            // certificateToAdd.expirationDate = action.payload.expiration_date;
            console.log('need to add')
            educationToAdd.id = action.payload.id
            educationToAdd.school = action.payload.institution_name;
            educationToAdd.degree = action.payload.degree;
            educationToAdd.startDate = action.payload.start_date;
            educationToAdd.endDate = action.payload.end_date;

            // state.education.push(educationToAdd);

            return [...state, educationToAdd]
        } else {
            return state
        }
        // }
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
        console.log('!!!!!!!!!!!!', filteredCertificates)
        return filteredCertificates;
    } else if (action.type === 'DELETE_ALL_CERTIFICATIONS') {
        return []
    } else {
        return state;
    }
}



export default editedTalentEducation;