import React, { Component } from 'react'; 
import NameLocation from '../NameLocation/NameLocation'; 
import Size from '../Size/Size';
import Type from '../Type/Type'; 
import FarmBio from '../FarmBio/FarmBio'; 
import FarmFormReview from '../FarmFormReview/FarmFormReview';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { Button, Grid, Box } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@material-ui/lab';

export class FarmForm extends Component {
    state = {
        farmFormCounter: 0,
        generalFarmInfo: [],
        colorZero: '',
        colorOne: '',
        colorTwo: '',
        colorThree: '',
        colorFour: '',
    }

    //changes this.state.farmFormCounter so that the correct part of the form is rendered to the page
    changeFarmFormCounter = (event, property) => {
        if(property === 'add') {
            this.setState({
                ...this.state,
                farmFormCounter: this.state.farmFormCounter + 1
            })
            console.log(this.state.farmFormCounter)
        } else {
            this.setState({
                ...this.state,
                farmFormCounter: this.state.farmFormCounter - 1
            })
            console.log(this.state.farmFormCounter)
        }
    }

    render() {
        let farmFormToShow = <span> </span>
        if (this.state.farmFormCounter === 0) {
            farmFormToShow = <NameLocation />
        } else if (this.state.farmFormCounter === 1) {
            farmFormToShow = <Size />
        } else if (this.state.farmFormCounter === 2) {
            farmFormToShow = <Type />
        } else if (this.state.farmFormCounter === 3) {
            farmFormToShow = <FarmBio />
        } else if (this.state.farmFormCounter === 4) {
            farmFormToShow = <FarmFormReview />
        }

        let backButton = <span></span>
        if (this.state.farmFormCounter === 0) {
            backButton = <span> </span>
        } else {
           
            backButton = <Box display='inline' ml={25} > <Button variant="outlined" onClick={(event) => this.changeFarmFormCounter(event, 'subtract')}> Back </Button> </Box>  
        }

        let nextButton = <span></span>
        if (this.state.farmFormCounter === 4) {
            nextButton = <span></span>
        } else {
            nextButton =
            
                <Box display='inline' ml={115} > <Button variant="outlined" onClick={(event) => this.changeFarmFormCounter(event, 'add')}> Next</Button>   </Box>       }
       
            let colorZero = ''
                if (this.state.farmFormCounter === 0) {
                    colorZero = 'primary'
                } else {
                    colorZero = ''
                }

            let colorOne = ''
                if (this.state.farmFormCounter === 1 ) {
                    colorOne = 'primary'
                } else {
                    colorOne = ''
                }
        
            let colorTwo = ''
                if (this.state.farmFormCounter === 2) {
                    colorTwo = 'primary'
                } else {
                    colorTwo = ''
                }
        
            let colorThree= ''
                if (this.state.farmFormCounter === 3) {
                    colorThree = 'primary'
                } else {
                    colorThree = ''
                }

            let colorFour = ''
                if (this.state.farmFormCounter === 4)  {
                    colorFour = 'primary'
                } else {
                    colorFour = ''
                }

        return (
            <>
            {/* <div className={"centerIt"}> */}
               {/* <h1> Farm Form </h1>  */}

               <Grid container direction="row"  alignItems="top" spacing={2}>
                    <Grid item xs={4} >

            <Timeline align="right">
        
            <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={colorZero} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Name & Location</TimelineContent>
                    </TimelineItem>

            <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={colorOne} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Size</TimelineContent>
                    </TimelineItem>

            <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={colorTwo} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Type</TimelineContent>
                    </TimelineItem>

            <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={colorThree} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Bio</TimelineContent>
                    </TimelineItem>

            <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={colorFour} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Review</TimelineContent>
                    </TimelineItem>
            </Timeline>

       
                </Grid>
           
                    <Grid item xs={5} >


            {farmFormToShow}
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

const mapStateToProps = (reduxState) => ({ reduxState })

FarmForm.propTypes = { classes: PropTypes.object.isRequired };

export default connect(mapStateToProps)(withStyles(styles)(FarmForm)); 
