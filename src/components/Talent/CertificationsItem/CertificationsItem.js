import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import {TextField, Typography } from '@material-ui/core';

export class CertificationsItem extends Component {

    state = {
        key: this.props.item, 
        numberOfChanges: 0,
        certificate: '',
        issuingCompany: '',
        issueDate: '',
        expirationDate: ''
    }


    addCertificate = (event, property) => {
        if(this.state.numberOfChanges < 1) {
        this.setState({
            ...this.state,
            [property]: event.target.value,
        })
        console.log(this.state)
    } else {
            this.props.dispatch({ type: 'EDIT_CERTIFICATE', payload: { state: this.state, property: property, newValue: event.target.value } })
    }
    }

    sendData = (event) => {
        this.props.dispatch({ type: 'SET_CERTIFICATE', payload: {state: this.state, expirationDate: event.target.value } })
        this.setState({
            ...this.state,
            numberOfChanges: this.state.numberOfChanges + 1
        })
    }

    render() {
        const { classes } = this.props; //need this for Material UI
        return (
            <div>
                <div>
                   

                    <Typography>License or certificate: </Typography>
                    {/* <CertificateName /> */}
                    <div ref={node => this.inCertificate = node}>
                    <TextField id="standard-basic" label="Standard" onChange={(event) => this.addCertificate(event, 'certificate')} />
                    </div>
                    <Typography>Issuing Company: </Typography>
                    <TextField onChange={(event) => this.addCertificate(event, 'issuingCompany' )} id="standard-basic" label="Standard" />

                    <div>
                        <TextField
                            id="date"
                            label="Issue Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        onChange={(event) => this.addCertificate(event, 'issueDate' )}

                        />
                        <TextField
                            id="date"
                            label="Expiration Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        onChange={(event) => this.sendData(event)}
                        />
                    </div>

                   




                </div>
            </div>
        )
    }
}

CertificationsItem.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(CertificationsItem)); 
