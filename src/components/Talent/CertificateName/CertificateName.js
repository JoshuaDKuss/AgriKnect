import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import {TextField} from '@material-ui/core';

export class CertificateName extends Component {
    state = {
        certificate: ''
    }

    addCertificate = (event) => {
        console.log(event.target.value);
                // this.setState({
        //     ...this.state,
        //     certificate: event.target.value
        // })
        // console.log('STATE', this.state.certificate)

        // if (this.inCertificate.contains(event.target)) {
        //     console.log('in click')
        // } else {
        //     console.log('OUT OUT OUT')
        // }

    }


    render() {
        const { classes } = this.props; //need this for Material UI
        return (
                <div ref={node => this.inCertificate = node}>
                    <TextField id="standard-basic" label="Standard" onChange={(event) => this.addCertificate(event)} />
                </div>
        )
    }
}

CertificateName.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(CertificateName)); 
