import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 
import { Button} from '@material-ui/core';
import CertificationsItem from '../CertificationsItem/CertificationsItem'; 


export class Certifications extends Component {

    state = {
        counter: 0,
        certificateList : [0]
       
    }

    //adds a certificate to list 
    addCertificate = () => {
        this.setState(previousState => ({
            counter: this.state.counter +1, 
            certificateList: [...previousState.certificateList, this.state.counter +1]
        }));
        console.log(this.state)
    }

    render() {
        const { classes } = this.props; //need this for Material UI

        return (
            <div>
                <ul>
                    <h3> Add any certifications or licenses you have </h3>
                    {this.state.certificateList.map((item) => {
                        return (
                            <CertificationsItem item={item}  />
                        )

                    })}
                </ul>

            <Button onClick={this.addCertificate} variant='outlined'> Add another license/certificate</Button>

            </div>

        )
    }
}

Certifications.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    certifications: state.talentForm.formData.certification,
});

export default connect(mapStateToProps)(withStyles(styles)(Certifications)); 