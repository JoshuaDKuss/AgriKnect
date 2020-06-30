import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import { TextField, Typography, Button } from '@material-ui/core';

export class EditTalentEmploymentItem extends Component {

    state = {
        id: this.props.item,
        title: '',
        company: '',
        startDate: '2020-01-01',
        endDate: '2020-01-01',
        editMode: true,
    }

    addEmployment = (event, property) => {
        console.log(event.target.value)
        this.setState({
            ...this.state,
            [property]: event.target.value,
        })
        console.log(this.state);

    }

    toggleEditMode = () => {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode
        })
    }

    toggleEditModeSave = () => {
        this.props.dispatch({ type: 'SET_EDITED_EMPLOYMENT', payload: this.state })
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
                 <Typography>Title</Typography>
                    <TextField defaultValue={this.state.title} id="standard-basic" label="Standard" onChange={(event) => this.addEmployment(event, 'title')} />
                </div>
                    <Typography>Company: </Typography>
                    <TextField defaultValue={this.state.company} onChange={(event) => this.addEmployment(event, 'company')} id="standard-basic" label="Standard" />

                    <div>
                        <TextField
                            id="date"
                            defaultValue={this.state.startDate}
                            label="Start Date"
                            type="date"
                           
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addEmployment(event, 'startDate')}

                        />
                        <TextField
                            id="date"
                            defaultValue={this.state.endDate}
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

EditTalentEmploymentItem.propTypes = { classes: PropTypes.object.isRequired };

// const mapStateToProps = state => ({
//     certification: state.talentForm.formData.certification,
// });

export default connect()(withStyles(styles)(EditTalentEmploymentItem)); 