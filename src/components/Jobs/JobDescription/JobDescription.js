import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { TextField, Typography, RadioGroup, FormControlLabel, FormLabel, FormControl, Radio, CardContent, Card, CardHeader } from '@material-ui/core';

export class JobDescription extends Component {

    state = {
        jobTitle: null,
        jobDescription: null,
        startDate: null,
        endDate: null
    }

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
        const { classes } = this.props; //need this for Material UI
        return (
            <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes={{ title: classes.title }} title="What type of job are you filling?" />

                <CardContent style={{ textAlign: 'center' }}  >
                <TextField value={this.props.job.jobTitle} id="standard-basic" label="Job Title" onChange={(event) => this.sendTitle(event)} />
                </CardContent>
                 
                <CardContent style={{ textAlign: 'center' }}  >
                    <div> 
                 <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        multiline
                        rows={6}
                        value={this.props.job.jobDescription}
                        onChange={(event) => this.sendDescription(event)}
                        variant="outlined"
                    />
                </div>
                </CardContent>
                <CardContent style={{ textAlign: 'center' }}  >
                <FormControl component="fieldset">
                    <FormLabel component="legend">Type of Work</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={this.props.job.jobType} onChange={(event) => this.sendType(event)}>
                        <FormControlLabel value="Permanent" control={<Radio />} label="Permanent" />
                        <FormControlLabel value="Seasonal" control={<Radio />} label="Seasonal" />
                    </RadioGroup>
                </FormControl>
                </CardContent>
                <CardContent style={{textAlign: 'center'}}>
                <div>
                    <TextField
                        id="date"
                        label="Start Date"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(event) => this.sendDates(event, 'startDate')}

                    />
                    <TextField
                        id="date"
                        label="End Date"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(event) => this.sendDates(event, 'endDate')}

                    />
                </div>
                </CardContent>
                
                
                </Card>
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