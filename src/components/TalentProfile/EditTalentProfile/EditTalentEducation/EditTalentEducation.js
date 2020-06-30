import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import { Button } from '@material-ui/core';
import EditTalentEducationItem from './EditTalentEducationItem';
import EditTalentEducationItemServer from './EditTalentEducationItemServer'; 



export class EditTalentCertifications extends Component {


    state = {
        counter: -1,
        educationList: []

    }

    submitEditedEducation = () => {
        this.props.dispatch({ type: 'UPDATE_EDUCATION', payload: this.props.certifications })
        this.props.dispatch({ type: 'DELETE_ALL_EDUCATION' })
        this.props.history.push(`/talentProfile/${this.props.reduxState.user.id}`);
    }

    //adds education to list 
    addEducation = () => {
        this.setState(previousState => ({
            counter: this.state.counter - 1,
            educationList: [...previousState.educationList, this.state.counter - 1]
        }));
        console.log(this.state)
    }


    render() {
        const { classes } = this.props; //need this for Material UI

        return (
            <div>
                <ul>
                    <h3> Add any certifications or licenses you have </h3>
                    {this.props.education.map((item) => {
                        return (
                            <EditTalentEducationItemServer item={item} key={item.id} />
                        )

                    })}

                    {this.state.educationList.map((item) => {
                        return (
                            <EditTalentEducationItem item={item} key={item.counter} />
                        )

                    })}
                </ul>

                <Button onClick={this.addEducation} variant='outlined'> Add another license/certificate</Button>
                <Button onClick={this.submitEditedEducation} variant="outlined"> Submit </Button>


            </div>

        )
    }
}

EditTalentCertifications.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    education: state.editedTalentEducation
});

export default connect(mapStateToProps)(withStyles(styles)(EditTalentCertifications)); 