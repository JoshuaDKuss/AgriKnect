import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import { Button } from '@material-ui/core';
import EditTalentEducationItem from './EditTalentEducationItem';
import EditTalentEducationItemServer from './EditTalentEducationItemServer'; 



export class EditTalentCertifications extends Component {

    componentWillUnmount() {
        console.log('big component unmounted')
    }

    state = {
        counter: -1,
        certificateList: []

    }

    submitEditedCertificates = () => {
        this.props.dispatch({ type: 'UPDATE_EDUCATION', payload: this.props.certifications })
        this.props.dispatch({ type: 'DELETE_ALL_EDUCATION' })
        this.props.history.push(`/talentProfile/${this.props.reduxState.user.id}`);
    }

    //adds a certificate to list 
    addCertificate = () => {
        this.setState(previousState => ({
            counter: this.state.counter - 1,
            certificateList: [...previousState.certificateList, this.state.counter - 1]
        }));
        console.log(this.state)
    }


    render() {
        const { classes } = this.props; //need this for Material UI

        return (
            <div>
                <ul>
                    <h3> Add any certifications or licenses you have </h3>
                    {this.props.certifications.map((item) => {
                        return (
                            <EditTalentEducationItemServer item={item} key={item.id} />
                        )

                    })}

                    {this.state.certificateList.map((item) => {
                        return (
                            <EditTalentEducationItem item={item} key={item.counter} />
                        )

                    })}
                </ul>

                <Button onClick={this.addCertificate} variant='outlined'> Add another license/certificate</Button>
                <Button onClick={this.submitEditedCertificates} variant="outlined"> Submit </Button>


            </div>

        )
    }
}

EditTalentCertifications.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    certifications: state.editedTalentCertification
});

export default connect(mapStateToProps)(withStyles(styles)(EditTalentCertifications)); 