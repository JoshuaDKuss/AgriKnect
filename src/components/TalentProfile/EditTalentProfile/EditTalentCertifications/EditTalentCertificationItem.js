import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import { TextField, Typography, Button } from '@material-ui/core';

export class EditTalentCertificationsItem extends Component {

    componentWillUnmount() {
        console.log('item component unmounted')
        // this.props.dispatch({ type: 'UPDATE_CERTIFICATION', payload: { state: this.state } })
    }
    

    state = {

        certificate: '',
        issuingCompany: '',
        issueDate: 0,
        expirationDate: 0
    }


    addCertificate = (event, property) => {

        this.setState({
            ...this.state,
            [property]: event.target.value,
        })
        console.log(this.props.certification[this.props.item],)

    }

    sendData = (event) => {
        this.props.dispatch({ type: 'SET_EDITED_CERTIFICATION', payload: { state: this.state, expirationDate: event.target.value } })
        this.setState({
            ...this.state,
            numberOfChanges: this.state.numberOfChanges + 1
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
                <div>


                    <Typography>License or certificate: </Typography>

                    <div ref={node => this.inCertificate = node}>
                        <TextField id="standard-basic" label="Standard" onChange={(event) => this.addCertificate(event, 'certificate')} />
                    </div>
                    <Typography>Issuing Company: </Typography>
                    <TextField onChange={(event) => this.addCertificate(event, 'issuingCompany')} id="standard-basic" label="Standard" />

                    <div>
                        <TextField
                            id="date"
                            label="Issue Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addCertificate(event, 'issueDate')}

                        />
                        <TextField
                            id="date"
                            label="Expiration Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addCertificate(event, 'expirationDate')}

                        />
                    </div>


                </div>
            </div>
        )
    }
}

EditTalentCertificationsItem.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    certification: state.talentForm.formData.certification,
});

export default connect(mapStateToProps)(withStyles(styles)(EditTalentCertificationsItem)); 