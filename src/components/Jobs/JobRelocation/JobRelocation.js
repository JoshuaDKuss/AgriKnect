import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { TextField, Typography, RadioGroup, FormControlLabel, FormLabel, FormControl, Radio, Card, CardContent, CardHeader } from '@material-ui/core';

export class JobRelocation extends Component {
    chooseAccomodation(event) {
        this.props.dispatch({ type: 'SET_ACCOMODATION', payload: event.target.value })
        
    }

    sendDescription(event) {
        this.props.dispatch({ type: 'SET_ACCOMODATION_DESCRIPTION', payload: event.target.value })
    }

     chooseRelocation(event) {
        this.props.dispatch({ type: 'SET_RELOCATION', payload: event.target.value })
    }

    render() { 
        const { classes } = this.props; //need this for Material UI

        let housingDescription = ''; 
        if (this.props.housing.housingProvided == 'true') {
            housingDescription = <div> <TextField
                id="outlined-multiline-flexible"
                label="Description"
                multiline
                rowsMax={4}
                value={this.props.housing.housingDetails}
                onChange={(event) => this.sendDescription(event)}
                variant="outlined"
            />
            </div >
        }
        return (
            <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes={{ title: classes.title }} title="What type of job are you filling?" />

                <CardContent style={{ textAlign: 'center' }}  >
                <FormControl component="fieldset">
                    <FormLabel component="legend">Will housing accomodation be provided?</FormLabel>
                    <RadioGroup value={this.props.housing.housingProvided} aria-label="accomodation" name="accomodation" onChange={(event) => this.chooseAccomodation(event)}>
                        <FormControlLabel value ="true" control={<Radio />} label="Yes" />
                        <FormControlLabel value="false" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {housingDescription}

                    <CardContent style={{ textAlign: 'center' }}  >
                <FormControl component="fieldset">
                    <FormLabel component="legend">Will a relocation stipend be provided?</FormLabel>
                        <RadioGroup value={this.props.housing.relocationProvided} aria-label="relocation" name="relocation" onChange={(event) => this.chooseRelocation(event)}>
                        <FormControlLabel value="true" control={<Radio />} label="Yes" />
                        <FormControlLabel value="false" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                </CardContent>
           </CardContent>
           </Card>
        )
    }
}

JobRelocation.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    housing: state.jobPostingReducer
});

export default connect(mapStateToProps)(withStyles(styles)(JobRelocation)); 
