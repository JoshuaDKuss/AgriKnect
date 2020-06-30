import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import { TextField, Typography, Button } from '@material-ui/core';
import moment from 'moment';

export class EditTalentEducationItemServer extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

EditTalentEducationItemServer.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    certification: state.talentForm.formData.certification,
});

export default connect(mapStateToProps)(withStyles(styles)(EditTalentEducationItemServer)); 
