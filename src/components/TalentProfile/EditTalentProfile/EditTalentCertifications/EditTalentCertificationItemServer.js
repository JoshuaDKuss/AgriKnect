import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import { TextField, Typography, Button } from '@material-ui/core';
import moment from 'moment';
import './EditTalentCertification.css'; 

export class EditTalentCertificationsItemServer extends Component {


    state = {
        id: this.props.item.id,
        certificate: this.props.item.certificate,
        issuingCompany: this.props.item.issuingCompany,
        issueDate: this.props.item.issueDate,
        expirationDate: this.props.item.expirationDate,
        editMode: false,
       
    }


    addCertificate = (event, property) => {

        this.setState({
            ...this.state,
            [property]: event.target.value,
        })
   

    }

    deleteCertificate = () => {
        this.props.dispatch({ type: 'DELETE_EDITED_CERTIFICATE', payload: this.state})
    }


    toggleEditMode = () => {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode
        })
    }

    toggleEditModeSave = () => {
        this.props.dispatch({ type: 'SET_EDITED_CERTIFICATION', payload: this.state})
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
                            defaultValue={moment(this.state.issueDate).format(("YYYY-MM-DD"))}
                            label="Issue Date"
                            type="date"
                           
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addCertificate(event, 'issueDate')}

                        />
                        <TextField
                            id="date"
                            defaultValue={moment(this.state.expirationDate).format(("YYYY-MM-DD"))}
                            label="Expiration Date"
                            type="date"
                        
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addCertificate(event, 'expirationDate')}

                        />
                        <Button variant="outlined" onClick={this.toggleEditModeSave}> Save </Button> 
                    <Button variant="outlined" onClick={this.deleteCertificate}> Delete </Button> 
                    </div> 
             </>
        } else {
            JSXToRender = 
                
               <>
                <div className='buttons'>

                    <h4 className='label'> Certificate Name: </h4> 
                <p className='content'>{this.state.certificate}  </p> 
                    </div>
                <h4 className='label'>Issuing Company: </h4>
                <p className='content'>{this.state.issuingCompany}  </p> 
                  

                    <div>
                    <h4 className='label'>Issue Date: </h4>
                    <p className='content'>{moment(this.state.issueDate).format(('MMMM Do YYYY'))} </p> 
                    </div>
                    <div>
                    <h4 className='label'>Expiration Date:</h4>
                    <p className='content'>{moment(this.state.expirationDate).format(('MMMM Do YYYY'))} </p> 
                    </div>
                    <div  >
                        <Button variant="outlined" onClick={this.toggleEditMode}> Edit </Button>
                    <Button variant="outlined" onClick={this.deleteCertificate}> Delete </Button> 
                    </div> 
                </>
              
        }


        const { classes } = this.props; //need this for Material UI
        return (
            <>
            {JSXToRender}
            </>
           
        )
    }
}

EditTalentCertificationsItemServer.propTypes = { classes: PropTypes.object.isRequired };


export default connect()(withStyles(styles)(EditTalentCertificationsItemServer)); 