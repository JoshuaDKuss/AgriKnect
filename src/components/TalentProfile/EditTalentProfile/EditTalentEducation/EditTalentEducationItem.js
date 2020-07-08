import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import { TextField, Typography, Button } from '@material-ui/core';

export class EditTalentEducationItem extends Component {

    state = {
        id: this.props.item,
        degree: null,
        school: null,
        startDate: null,
        endDate: null,
        editMode: true,
    }

    addEducation = (event, property) => {
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
        this.props.dispatch({ type: 'SET_EDITED_EDUCATION', payload: this.state })
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
                
                    <TextField defaultValue={this.state.degree} id="standard-basic" label="Degree" onChange={(event) => this.addEducation(event, 'degree')} />
                </div>
                   
                    <TextField defaultValue={this.state.school} onChange={(event) => this.addEducation(event, 'school')} id="standard-basic" label="School" />

                    <div>
                        <TextField
                            id="date"
                            defaultValue={this.state.startDate}
                            label="Start Date"
                            type="date"
                           
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addEducation(event, 'startDate')}

                        />
                        <TextField
                            id="date"
                            defaultValue={this.state.endDate}
                            label="End Date"
                            type="date"
                        
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addEducation(event, 'endDate')}

                        />
                        <Button variant="outlined" onClick={this.toggleEditModeSave}> Save </Button> 
                    {/* <Button variant="outlined" onClick={this.deleteEducation}> Delete </Button>  */}
                    </div> 
             </>
        } else {
            JSXToRender = 
                <> </>
        }


        const { classes } = this.props; //need this for Material UI
        return (
            <div>
                {JSXToRender}
            </div>
        )
    }
}

EditTalentEducationItem.propTypes = { classes: PropTypes.object.isRequired };



export default connect()(withStyles(styles)(EditTalentEducationItem)); 
