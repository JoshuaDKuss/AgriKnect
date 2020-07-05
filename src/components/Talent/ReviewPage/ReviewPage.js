import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import styles from '../../Styles/styles';
import moment from "moment";
import { Grid, Button, Card, CardContent, CardHeader} from "@material-ui/core";
import './ReviewPage.css';

export class ReviewPage extends Component {
    sendToServer = () => {
        this.props.dispatch({ type: 'SEND_TALENT_FORM', payload: this.props.talentForm })
        this.props.history.push(`/ThankYouPageTalent`);

       
    }

    render() {
        const { classes } = this.props; //need this for cards 

        return (
            <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes={{ title: classes.title }} title="Please review your information" />

                <CardContent  >

                 <h2> About me </h2> 
                 
                <div>
                 <h4 className='label'> Biography: </h4> <p className='content'>{this.props.talentForm.bio} </p> 
                 </div>
                 <h4 className='label'> 
                    Location: 
                  </h4> 
                    <p className='content'>
                     {this.props.talentForm.city} {this.props.talentForm.state} {this.props.talentForm.zipcode}
                    </p>
                  

                <h2>Education </h2>
                {this.props.talentForm.education.map((item) => {
                    return (
                        <ul>
                            <p className='content'> {item.school} {moment(item.startDate).format('MMMM Do YYYY')} - {moment(item.endDate).format('MMMM Do YYYY')}   </p> 
                        <div>
                        <p className='content'>
                            {item.degree}
                        </p>
                        </div>
                         </ul>

                    )

                })}
               

                <h2>Employment </h2>
                {this.props.talentForm.employment.map((item) => {
                    return (
                        <ul>
                            <p className='content'> {item.company} {moment(item.startDate).format('MMMM Do YYYY')} - {moment(item.endDate).format('MMMM Do YYYY')}</p>
                        <div>
                        <p className='content'> 
                            {item.title}
                            </p>
                        </div>
                        
                        </ul>

                    )

                })}

                <h2>Certifications </h2>
                {this.props.talentForm.certification.map((item) => {
                    return (
                         <ul>
                            <p className='content'>{item.certificate} expires {moment(item.expirationDate).format('MMMM Do YYYY')} </p>
                            <div>
                            <p className='content'>
                             Issued by:   {item.issuingCompany}
                             </p>
                            </div>
                      
                        </ul>

                    )

                })}

                <h2> Skills </h2> 
                {this.props.talentForm.skillsExpertise.map((item) => {
                    return (
                        <ul>
                        <p className='content'>{item.skillName} for {item.time}  </p>
                        </ul>
                    )

                })}

                <h2> Equipment </h2> 

                {this.props.talentForm.equipment.map((item) => {
                    return (
                         <ul>
                            <p className='content'>{item.proficiency_name}  </p>
                        </ul>
                    )

                })}

                <h2> Brands </h2> 
                {this.props.talentForm.brands.map((item) => {
                    return (
                        <ul>
                            <p className='content'> {item.proficiency_name} </p>
                        </ul>
                    )

                })}
                    <Grid container direction="row" alignItems="top" spacing={2}>
                <Grid item xs={9}/>
                <Grid item xs={2}>
                <Button color="primary" variant="outlined" onClick= {this.sendToServer}> Save Profile </Button>
                </Grid>
                </Grid>
             </CardContent  >
             </Card>
        ) 
    }
}

const reduxStateToProps = (reduxState) => {
    return {
        talentForm: reduxState.talentForm.formData,
        
    }
}

export default connect(reduxStateToProps)(withRouter(withStyles(styles)(ReviewPage)));


