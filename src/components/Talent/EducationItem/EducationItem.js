import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { TextField, Typography } from '@material-ui/core';

export class EducationItem extends Component {
    state = {
        key: this.props.item,
        numberOfChanges: 0,
        school: '',
        degree: '',
        startDate: '',
        endDate: ''
    }

    addEducation = (event, property) => {
        if (this.state.numberOfChanges < 1) {
            this.setState({
                ...this.state,
                [property]: event.target.value,
            })
            // console.log(this.state)
        } else {
            // this.props.dispatch({ type: 'EDIT_SCHOOL', payload: { state: this.state, property: property, newValue: event.target.value } })
        }
    }

    sendData = (event) => {
        this.props.dispatch({ type: 'SET_EDUCATION', payload: { state: this.state, endDate: event.target.value } })
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


                    <Typography>School</Typography>
                   
                    <div ref={node => this.inCertificate = node}>
                        <TextField id="standard-basic" label="Standard" onChange={(event) => this.addEducation(event, 'school')} />
                    </div>
                    <Typography>Degree: </Typography>
                    <TextField onChange={(event) => this.addEducation(event, 'issuingCompany')} id="standard-basic" label="degree" />

                   

                    <div>
                        <TextField
                            id="date"
                            label="Start Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addEducation(event, 'startDate')}

                        />
                        <TextField
                            id="date"
                            label="End Date"
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

EducationItem.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(EducationItem)); 