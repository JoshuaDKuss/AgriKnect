import React, { Component } from 'react'; 
import Skills from '../Skills/Skills'; 
import ExpertiseLevel from '../ExpertiseLevel/ExpertiseLevel'; 
import Equipment from '../Equipment/Equipment'; 
import Brands from '../Brands/Brands';
import Certifications from '../Certifications/Certifications'; 
import Education from '../Education/Education'; 
import Employment from '../Employment/Employment'; 
import Location from '../Location/Location';
import Bio from '../Bio/Bio'; 
import ReviewPage from '../ReviewPage/ReviewPage';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { Button, Grid, Box} from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@material-ui/lab';

export class TalentForm extends Component {
    state = {
        formCounter: 0,
        colorOne: '',
        colorTwo: '',
        colorThree: '',
        colorFour: '',
        colorFive: '',
        colorOne: '',
        
    }

    

    //changes this.state.formCounter so that the correct part of the form is rendered to the page
    changeFormCounter = (event, property) => {
        if(property === 'add') {
            this.setState({
                ...this.state,
                formCounter: this.state.formCounter + 1
            })
        } else {
            this.setState({
                ...this.state,
                formCounter: this.state.formCounter - 1
            })
        }
    }

    render() {
        let formToShow = <span> </span>
        if (this.state.formCounter === 0) {
            formToShow =  <Education />
        } else if (this.state.formCounter === 1) {
            formToShow = <Employment /> 
        } else if (this.state.formCounter === 2) {
            formToShow = <Certifications />
        } else if (this.state.formCounter === 3) {
            formToShow = <Skills /> 
        } else if (this.state.formCounter === 4) {
            formToShow = <ExpertiseLevel /> 
        } else if (this.state.formCounter === 5) {
            formToShow =  <Equipment />
        } else if (this.state.formCounter === 6) {
            formToShow =  <Brands /> 
        } else if (this.state.formCounter === 7) {
            formToShow = <Location />
        } else if (this.state.formCounter === 8) {
            formToShow = <Bio />
        } else if (this.state.formCounter ===9) {
            formToShow = <ReviewPage />
        }

        let backButton = <span></span>
        // if (this.state.formCounter === 0) {
        //     backButton = <span> </span>
        // } else {
           
        //     backButton = <Box display='inline' ml={25} > <Button variant="outlined" onClick={(event) => this.changeFormCounter(event, 'subtract')}> Back </Button> </Box>  
        // }


        let nextButton = <span></span>
        if (this.state.formCounter === 9) {
            nextButton = <span></span>
        } else {
            
            nextButton =
            
                <Box display='inline' ml={115} > <Button variant="outlined" onClick={(event) => this.changeFormCounter(event, 'add')}> Next</Button>   </Box>       }
       
        let colorOne = ''
        if (this.state.formCounter === 0 || this.state.formCounter === 1 ) {
            colorOne = 'primary'
        } else {
            colorOne = ''
        }

        let colorTwo = ''
        if (this.state.formCounter === 2) {
            colorTwo = 'primary'
        } else {
            colorTwo = ''
        }

        let colorThree= ''
        if (this.state.formCounter === 3 || this.state.formCounter === 4) {
            colorThree = 'primary'
        } else {
            colorThree = ''
        }

        let colorFour = ''
        if (this.state.formCounter === 5 || this.state.formCounter === 6) {
            colorFour = 'primary'
        } else {
            colorFour = ''
        }

        let colorFive = ''
        if (this.state.formCounter === 7 || this.state.formCounter === 8) {
            colorFive = 'primary'
        } else {
            colorFive = ''
        }
        let colorSix = ''
        if (this.state.formCounter === 9)  {
            colorSix = 'primary'
        } else {
            colorSix = ''
        }
        return (
            <>
                <Grid container direction="row"  alignItems="top" spacing={2}>
                    <Grid item xs={4} >

            <Timeline align="right">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={colorOne} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Education and <div>Employment History</div></TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={colorTwo} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Certifications</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={colorThree} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Skills</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={colorFour} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Equipment and <div> Brand Experience </div></TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={colorFive} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Bio</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={colorSix} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Review</TimelineContent>
                    </TimelineItem>
            </Timeline>

       
                </Grid>
           
                    <Grid item xs={5} >
       
        
            {formToShow}
            </Grid>
            <Grid item container xs={12}>
            <Grid item xs={2}>
                {backButton}
            </Grid>
            <Grid item xs={4}/>
            <Grid item xs={3}>
                {nextButton}
            </Grid>    
            </Grid>

          
           
             
                
               
               
                
            </Grid>
           



            
            </>
        )
    }
}

const mapStateToProps = state => ({
    proficiencies: state.talentForm.proficiencies,
  });

TalentForm.propTypes = { classes: PropTypes.object.isRequired };

export default connect(mapStateToProps)(withStyles(styles)(TalentForm)); 
