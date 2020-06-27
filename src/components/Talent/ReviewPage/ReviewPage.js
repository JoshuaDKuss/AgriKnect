import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../Styles/styles';
import { Typography, TextField } from "@material-ui/core";

export class ReviewPage extends Component {
    sendToServer = () => {
        this.props.dispatch({ type: 'SEND_TALENT_FORM', payload: this.props.talentForm })
    }

    render() {
        return (
            <div>
                <h1> Please review your information </h1> 

                 <h2> About me </h2> 
                 
                <div>
                 <Typography> Biography: {this.props.talentForm.bio} </Typography>
                 </div>
                 <Typography> 
                    Location: {this.props.talentForm.location.city} {this.props.talentForm.location.state} {this.props.talentForm.location.zipcode}
                </Typography>
                  

                <h2>Education </h2>
                {this.props.talentForm.education.map((item) => {
                    return (
                        <Typography> {item.school} {item.startDate} - {item.endDate} 
                        <div>
                            {item.degree}
                        </div>
                        </Typography>

                    )

                })}
               

                <h2>Employment </h2>
                {this.props.talentForm.employment.map((item) => {
                    return (
                        <Typography> {item.company} {item.startDate} - {item.endDate} 
                        <div>
                            {item.title}
                        </div>
                        </Typography>

                    )

                })}

                <h2>Certifications </h2>
                {this.props.talentForm.certification.map((item) => {
                    return (
                        <Typography> {item.certificate} expires {item.expirationDate}
                            <div>
                             Issued by:   {item.issuingCompany}
                            </div>
                        </Typography>

                    )

                })}

                <h2> Skills </h2> 
                {this.props.talentForm.skillsExpertise.map((item) => {
                    return (
                    <Typography> {item.skillName} for {item.time}  </Typography>
                    )

                })}

                <h2> Equipment </h2> 

                {this.props.talentForm.equipment.map((item) => {
                    return (
                        <Typography> {item.proficiency_name} </Typography>
                    )

                })}

                <h2> Brands </h2> 
                {this.props.talentForm.brands.map((item) => {
                    return (
                        <Typography> {item.proficiency_name} </Typography>
                    )

                })}
                <button onClick= {this.sendToServer}> Send SAGA </button>
            </div>
        ) 
    }
}

const reduxStateToProps = (reduxState) => {
    return {
        talentForm: reduxState.talentForm.formData,
        
    }
}

export default connect(reduxStateToProps)(withStyles(styles)(ReviewPage));


