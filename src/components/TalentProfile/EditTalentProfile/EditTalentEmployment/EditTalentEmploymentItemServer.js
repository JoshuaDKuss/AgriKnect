import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import { TextField, Typography, Button } from '@material-ui/core';
import moment from 'moment';

export class EditTalentEmploymentItemServer extends Component {
     state = {
        id: this.props.item.id,
        title: this.props.item.title,
        company: this.props.item.company,
        startDate: this.props.item.startDate,
        endDate: this.props.item.endDate,
        editMode: false,
       
    }

    addEmployment= (event, property) => {

        this.setState({
            ...this.state,
            [property]: event.target.value,
        })
        console.log(this.state)

    }

    deleteEmployment = () => {
        console.log('delete',this.state.certificate)
        this.props.dispatch({ type: 'DELETE_EDITED_EMPLOYMENT', payload: this.state})
    }

     toggleEditMode = () => {
        console.log(this.state.id)
        this.setState({
            ...this.state,
            editMode: !this.state.editMode
        })
    }

     toggleEditModeSave = () => {
        this.props.dispatch({ type:'SET_EDITED_EMPLOYMENT', payload: this.state})
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
                
                    <TextField defaultValue={this.state.title} id="standard-basic" label="Title" onChange={(event) => this.addEmployment(event, 'title')} />
                </div>
                    <Typography>Company: </Typography>
                    <TextField defaultValue={this.state.company} onChange={(event) => this.addEmployment(event, 'degree')} id="standard-basic" label="Company" />

                    <div>
                        <TextField
                            id="date"
                            defaultValue={moment(this.state.startDate).format(("YYYY-MM-DD"))}
                            label="Start Date"
                            type="date"
                           
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addEmployment(event, 'startDate')}

                        />
                        <TextField
                            id="date"
                            defaultValue={moment(this.state.endDate).format(("YYYY-MM-DD"))}
                            label="End Date"
                            type="date"
                        
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addEmployment(event, 'endDate')}

                        />
                        <Button variant="outlined" onClick={this.toggleEditModeSave}> Save </Button> 
                    <Button variant="outlined" onClick={this.deleteEmployment}> Delete </Button> 
                    </div> 
             </>
        } else {
            JSXToRender = 
                
               <>
                     <div>

                    <Typography> Title: {this.state.title}  </Typography>
                    </div>
                <Typography>Company: {this.state.company}  </Typography>
                  

                    <div>
                    <Typography> Start Date: {moment(this.state.startDate).format(("YYYY-MM-DD"))}</Typography>
                    <Typography> End Date: {moment(this.state.endDate).format(("YYYY-MM-DD"))}</Typography>
                       
                        <Button variant="outlined" onClick={this.toggleEditMode}> Edit </Button>
                    <Button variant="outlined" onClick={this.deleteEmployment}> Delete </Button> 
                    </div> 
                </>
              
        }


        const { classes } = this.props; //need this for Material UI

        return (
            <div>
                {JSXToRender}
            </div>
        )
    }
}

EditTalentEmploymentItemServer.propTypes = { classes: PropTypes.object.isRequired };

// const mapStateToProps = state => ({
//     certification: state.talentForm.formData.certification,
// });

export default connect()(withStyles(styles)(EditTalentEmploymentItemServer)); 