import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { TextField, Typography } from '@material-ui/core';

export class JobDescription extends Component {

    sendTitle(event) {
        this.props.dispatch({ type: 'SET_JOB_TITLE', payload: event.target.value})
    }

    sendDescription(event) {
        this.props.dispatch({ type: 'SET_JOB_DESCRIPTION', payload: event.target.value})
    }

    render() {
        return (
            <div>
                <Typography> What type of job are you looking to fill </Typography>

                <TextField id="standard-basic" label="Job Title" onChange={(event) => this.sendTitle(event)} />
                <div> 
                 <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        multiline
                        rowsMax={4}
                        
                        onChange={(event) => this.sendDescription(event)}
                        variant="outlined"
                    />
                </div>
                
            </div>
        )
    }
}

JobDescription.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(JobDescription)); 