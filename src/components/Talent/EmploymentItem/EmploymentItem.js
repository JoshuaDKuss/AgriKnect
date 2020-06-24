import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { TextField, Typography } from '@material-ui/core';

export class EmploymentItem extends Component {
    state = {
        key: this.props.item,
        numberOfChanges: 0,
        company: '',
        title: '',
        startDate: '',
        endDate: ''
    }

    addEmployment = (event, property) => {
        if (this.state.numberOfChanges < 1) {
            this.setState({
                ...this.state,
                [property]: event.target.value,
            })
            console.log(event.target.value);
            console.log('STATE', this.state)
        } else {
            // this.props.dispatch({ type: 'EDIT_SCHOOL', payload: { state: this.state, property: property, newValue: event.target.value } })
        }
    }

    sendData = (event) => {
        this.props.dispatch({ type: 'SET_EMPLOYMENT', payload: { state: this.state, endDate: event.target.value } })
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




                    <div ref={node => this.inCertificate = node}>
                        <TextField id="standard-basic" label="company" onChange={(event) => this.addEmployment(event, 'company')} />
                    </div>

                    <TextField onChange={(event) => this.addEmployment(event, 'title')} id="standard-basic" label="title" />



                    <div>
                        <TextField
                            id="date"
                            label="Start Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addEmployment(event, 'startDate')}

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

EmploymentItem.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(EmploymentItem)); 