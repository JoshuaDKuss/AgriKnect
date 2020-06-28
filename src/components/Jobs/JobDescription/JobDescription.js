import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { TextField, Typography, RadioGroup, FormControlLabel, FormLabel, FormControl, Radio } from '@material-ui/core';

export class JobDescription extends Component {

    sendTitle(event) {
        this.props.dispatch({ type: 'SET_JOB_TITLE', payload: event.target.value})
    }

    sendDescription(event) {
        this.props.dispatch({ type: 'SET_JOB_DESCRIPTION', payload: event.target.value})
    }

    sendType(event) {
        this.props.dispatch({ type: 'SET_JOB_TYPE', payload: event.target.value })
    }

    sendDates(event, property) {
        if (property === 'startDate') {
        this.props.dispatch({ type: 'SET_START_DATE', payload: event.target.value })
        } else {
            this.props.dispatch({ type: 'SET_END_DATE', payload: event.target.value })
        }
    }

    render() {
        return (
            <div>
                <Typography> What type of job are you looking to fill </Typography>

                <TextField value={this.props.job.jobTitle} id="standard-basic" label="Job Title" onChange={(event) => this.sendTitle(event)} />
                <div> 
                 <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        multiline
                        rowsMax={4}
                        value={this.props.job.jobDescription}
                        onChange={(event) => this.sendDescription(event)}
                        variant="outlined"
                    />
                </div>

                <FormControl component="fieldset">
                    <FormLabel component="legend">Type of Work</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={this.props.job.jobType} onChange={(event) => this.sendType(event)}>
                        <FormControlLabel value="Permanent" control={<Radio />} label="Permanent" />
                        <FormControlLabel value="Seasonal" control={<Radio />} label="Seasonal" />
                    </RadioGroup>
                </FormControl>

                <div>
                    <TextField
                        id="date"
                        label="Start Date"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={this.props.job.startDate}
                        onChange={(event) => this.sendDates(event, 'startDate')}

                    />
                    <TextField
                        id="date"
                        label="End Date"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={this.props.job.endDate}
                        onChange={(event) => this.sendDates(event, 'endDate')}

                    />
                </div>
                
            </div>
        )
    }
}

JobDescription.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => {
    return {
        job: reduxState.jobPostingReducer
    }
}

export default connect(reduxStateToProps)(withStyles(styles)(JobDescription)); 