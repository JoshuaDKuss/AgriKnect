import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';

export class JobReview extends Component {
    sendJobPosting = () => {
        console.log('in jobPosting')
        this.props.dispatch({ type: 'SET_JOB_POSTING', payload: this.props.job })
    }

    render() {
        return (
            <div>
                <button onClick={(event) => this.sendJobPosting(event)}> Send Saga</button> 
            </div>
        )
    }
}

JobReview.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => {
    return {
        job: reduxState.jobPostingReducer
    }
}

export default connect(reduxStateToProps)(withStyles(styles)(JobReview)); 
