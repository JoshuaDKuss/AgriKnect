import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import {TextField, Typography, CardContent } from '@material-ui/core';

export class CertificationsItem extends Component {

    componentWillUnmount() {
        if (this.state.certificate === null && this.state.issuingCompany === null && this.state.issueDate === null && this.state.expirationDate === null) {
            console.log('no employment')
        } else {
        this.props.dispatch({ type: 'SET_CERTIFICATE', payload: { state: this.state} })
        }
    }

    state = {
       
        certificate: null,
        issuingCompany: null,
        issueDate: null,
        expirationDate: null
    }


    addCertificate = (event, property) => {
      
        this.setState({
            ...this.state,
            [property]: event.target.value,
        })
        console.log(this.props.certification[this.props.item], )
   
    }

    sendData = (event) => {
        this.props.dispatch({ type: 'SET_CERTIFICATE', payload: {state: this.state, expirationDate: event.target.value } })
        this.setState({
            ...this.state,
            numberOfChanges: this.state.numberOfChanges + 1
        })
    }

    fillForm = () => {
        this.setState({
            certificate: 'Class A CDL',
            issuingCompany: 'State of MN',
            issueDate: '2019-02-17',
            expirationDate: '2023-02-17'
        })
    }

    render() {
        let certificateValue = ''
        if (this.props.certification[this.props.item] !== undefined) {
            certificateValue = this.props.certification[this.props.item].certificate
        } 
        // value={certificateValue}

        const { classes } = this.props; //need this for Material UI
        return (
            <div>
                   
                   <button className="fillBtn" onClick={this.fillForm}>Fill</button>
                 
                 <CardContent style={{ paddingLeft: 150}}>
                    <div ref={node => this.inCertificate = node}>
                        <TextField value={this.state.certificate} id="standard-basic" label="License or certificate" onChange={(event) => this.addCertificate(event, 'certificate')} />
                    </div>
  
                    <TextField value={this.state.issuingCompany} onChange={(event) => this.addCertificate(event, 'issuingCompany')} id="standard-basic" label="Issuing Company" />

                </CardContent>
                <CardContent style={{ textAlign: 'center' }}>
                    <div>
                        <TextField
                            value={this.state.issueDate}
                            id="date"
                            label="Issue Date"
                            type="date"
                            // defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        onChange={(event) => this.addCertificate(event, 'issueDate' )}

                        />
                        <TextField
                            id="date"
                            value={this.state.expirationDate}
                            label="Expiration Date"
                            type="date"
                            // defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addCertificate(event, 'expirationDate')}
               
                        />
                    </div>
                    </CardContent>

            </div>
        )
    }
}

CertificationsItem.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    certification: state.talentForm.formData.certification,
});

export default connect(mapStateToProps)(withStyles(styles)(CertificationsItem)); 
