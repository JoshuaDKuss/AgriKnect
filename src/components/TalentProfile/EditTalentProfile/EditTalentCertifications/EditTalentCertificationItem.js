import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import { TextField, Typography, Button } from '@material-ui/core';
import moment from 'moment';

export class EditTalentCertificationsItem extends Component {



    state = {
        id: this.props.item,
        certificate: null,
        issuingCompany: null,
        issueDate: null,
        expirationDate: null,
        editMode: true,
    }


    addCertificate = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value,
        })

    }




    toggleEditMode = () => {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode
        })
    }

    toggleEditModeSave = () => {
        this.props.dispatch({ type: 'SET_EDITED_CERTIFICATION', payload: this.state })
        this.setState({
            ...this.state,
            editMode: !this.state.editMode
        })
    }

    render() {
        let JSXToRender = <span> </span>
        if (this.state.editMode) {
            JSXToRender = 
            <>
           
                <div>
                 
                    <TextField defaultValue={this.state.certificate} id="standard-basic" label="Certificate Name" onChange={(event) => this.addCertificate(event, 'certificate')} />
                </div>
                    
                    <TextField defaultValue={this.state.issuingCompany} onChange={(event) => this.addCertificate(event, 'issuingCompany')} id="standard-basic" label="Issuing Company" />

                    <div>
                        <TextField
                            id="date"
                            defaultValue={this.state.issueDate}
                            label="Issue Date"
                            type="date"
                           
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addCertificate(event, 'issueDate')}

                        />
                        <TextField
                            id="date"
                            defaultValue={this.state.expirationDate}
                            label="Expiration Date"
                            type="date"
                        
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addCertificate(event, 'expirationDate')}

                        />
                        <Button variant="outlined" onClick={this.toggleEditModeSave}> Save </Button> 
                 
                    </div> 
             </>
        } else {
            JSXToRender = 
                <> </>
          
              
        }


        const { classes } = this.props; //need this for Material UI
        return (
            <>
            {JSXToRender}
            </>

        )
    }
}

EditTalentCertificationsItem.propTypes = { classes: PropTypes.object.isRequired };


export default connect()(withStyles(styles)(EditTalentCertificationsItem)); 