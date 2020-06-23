import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 
import { Button} from '@material-ui/core';
import CertificationsItem from '../CertificationsItem/CertificationsItem'; 


export class Certifications extends Component {

    state = {
        certificateList : ['certificate1']
    }

    //adds a certificate to list 
    addCertificate = () => {
        this.setState(previousState => ({
            certificateList: [...previousState.certificateList, 'newCertificate']
        }));
    }

    render() {
        const { classes } = this.props; //need this for Material UI

        return (
            <div>
                <ul>
                    {this.state.certificateList.map((item) => {
                        return (
                            <CertificationsItem item={item} />
                        )

                    })}
                </ul>

            <Button onClick={this.addCertificate} variant='outlined'> Add another license/certificate</Button>

            </div>

        )
    }
}

Certifications.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(Certifications)); 