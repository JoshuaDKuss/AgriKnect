import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { TextField, Typography, CardContent } from '@material-ui/core';

export class EmploymentItem extends Component {

    componentWillUnmount() {
        this.props.dispatch({ type: 'SET_EMPLOYMENT', payload: { state: this.state } })
    }

    state = {
        company: '',
        title: '',
        startDate: '2020-01-01',
        endDate: '2020-01-01'
    }

    addEmployment = (event, property) => {
       
            this.setState({
                ...this.state,
                [property]: event.target.value,
            })
            console.log(event.target.value);
            console.log('STATE', this.state)
        
    }

    sendData = (event) => {
        this.props.dispatch({ type: 'SET_EMPLOYMENT', payload: { state: this.state, endDate: event.target.value } })
        this.setState({
            ...this.state,
            numberOfChanges: this.state.numberOfChanges + 1
        })
    }

    fillForm = () => {
        this.setState({
            company: 'Blue Skys Farm',
            title: 'Farm Agricultural Equipment Operator',
            startDate: '2017-10-15',
            endDate: '2019-09-02'
        })
    }

    render() {
        const { classes } = this.props; //need this for Material UI
        return (
            <div>
                <button className="fillBtn" onClick={this.fillForm}>Fill</button>


                    <CardContent style={{ paddingLeft: 150}}>

                    <div ref={node => this.inCertificate = node}>
                        <TextField value={this.state.company} id="standard-basic" label="company" onChange={(event) => this.addEmployment(event, 'company')} />
                    </div>

                    <TextField value={this.state.title} onChange={(event) => this.addEmployment(event, 'title')} id="standard-basic" label="title" />

                    </CardContent>

                <CardContent style={{ textAlign: 'center' }}>
                    <div>
                        <TextField
                            id="date"
                            value={this.state.startDate}
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
                            value={this.state.endDate}
                            label="End Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addEmployment(event, 'endDate')}
                        />
                    </div>




                    </CardContent>

               

            </div>
        )
    }
}

EmploymentItem.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(EmploymentItem)); 