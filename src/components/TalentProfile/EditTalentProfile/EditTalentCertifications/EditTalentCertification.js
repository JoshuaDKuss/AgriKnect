import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'; 
import EditTalentCertificationsItem from './EditTalentCertificationItem';
import EditTalentCertificationsItemServer from './EditTalentCertificationItemServer';



export class EditTalentCertifications extends Component {

    componentWillUnmount() {
        console.log('big component unmounted')
        // this.props.dispatch({ type: 'UPDATE_CERTIFICATION', payload: { state: this.state } })
    }

    state = {
        counter: 0,
        certificateList: []

    }

    handleClick = () => {
        console.log('button clicked')
    }

    //adds a certificate to list 
    addCertificate = () => {
        this.setState(previousState => ({
            counter: this.state.counter + 1,
            certificateList: [...previousState.certificateList, this.state.counter + 1]
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
                            <EditTalentCertificationsItemServer item={item} />
                        )

                    })}

                    {this.state.certificateList.map((item) => {
                        return (
                            <EditTalentCertificationsItem item={item} />
                        )

                    })}
                </ul>

                <Button onClick={this.addCertificate} variant='outlined'> Add another license/certificate</Button>
                 <Button onClick={this.handleClick} variant="outlined"> Save </Button> 


            </div>

        )
    }
}

EditTalentCertifications.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    certifications: state.editedTalentCertification
});

export default connect(mapStateToProps)(withStyles(styles)(EditTalentCertifications)); 