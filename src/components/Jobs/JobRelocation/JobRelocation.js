import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { TextField, Typography, RadioGroup, FormControlLabel, FormLabel, FormControl, Radio } from '@material-ui/core';

export class JobRelocation extends Component {
    chooseAccomodation(event) {
        console.log(event.target.value)
        this.props.dispatch({ type: 'SET_ACCOMODATION', payload: event.target.value })
    }

    sendDescription(event) {
        this.props.dispatch({ type: 'SET_ACCOMODATION_DESCRIPTION', payload: event.target.value })
    }

     chooseRelocation(event) {
        console.log(event.target.value)
        this.props.dispatch({ type: 'SET_RELOCATION', payload: event.target.value })
    }

    render() { 
        

        let housingDescription = ''; 
        if (this.props.housing) {
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
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Will housing accomodation be provided?</FormLabel>
                    <RadioGroup value={this.props.housing.housingProvided} aria-label="accomodation" name="accomodation" onChange={(event) => this.chooseAccomodation(event)}>
                        <FormControlLabel value ={true} control={<Radio />} label="Yes" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {housingDescription}

             <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Will a relocation stipend be provided?</FormLabel>
                    <RadioGroup aria-label="relocation" name="relocation" onChange={(event) => this.chooseRelocation(event)}>
                        <FormControlLabel value="true" control={<Radio />} label="Yes" />
                        <FormControlLabel value="false" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                </div>
            </div>
        )
    }
}

JobRelocation.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    housing: state.jobPostingReducer.housingProvided
});

export default connect(mapStateToProps)(withStyles(styles)(JobRelocation)); 
