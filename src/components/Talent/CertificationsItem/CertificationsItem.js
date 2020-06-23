import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import {TextField, Typography } from '@material-ui/core';
import CertificateName from '../CertificateName/CertificateName'; 

export class CertificationsItem extends Component {


    addCertificate = (event) => {
        this.props.dispatch({ type: 'SET_CERTIFICATE', payload: event.target.value })
    }

    addIssuingCompany = (event) => {
        this.props.dispatch({ type: 'SET_ISSUING_COMPANY', payload: event.target.value })
        
    }

    render() {
        const { classes } = this.props; //need this for Material UI
        return (
            <div>
                <div>

                    <Typography>License or certificate: </Typography>
                    {/* <CertificateName /> */}
                    <div ref={node => this.inCertificate = node}>
                    <TextField id="standard-basic" label="Standard" onChange={(event) => this.addCertificate(event)} />
                    </div>
                    <Typography>Issuing Company: </Typography>
                    <TextField onChange={(event) => this.addIssuingCompany(event)} id="standard-basic" label="Standard" />

                    <div>
                        <TextField
                            id="date"
                            label="Issue Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="date"
                            label="Expiration Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>

                   




                </div>
            </div>
        )
    }
}

CertificationsItem.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(CertificationsItem)); 
