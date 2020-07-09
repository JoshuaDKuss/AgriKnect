import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { TextField, Typography, CardContent } from '@material-ui/core';

export class EmploymentItem extends Component {

    componentWillUnmount() {
        if (this.state.company === null && this.state.title === null && this.state.startDate === null && this.state.endDate === null) {
        } else {
            this.props.dispatch({ type: 'SET_EMPLOYMENT', payload: { state: this.state } })
        }
    }

    state = {
        company: null,
        title: null,
        startDate: null,
        endDate: null
    }

    addEmployment = (event, property) => {
       
            this.setState({
                ...this.state,
                [property]: event.target.value,
            })
          
        
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

                    <CardContent style={{ paddingLeft: 150}}>

                    <div ref={node => this.inCertificate = node}>
                        <TextField 
                        // value={this.state.company} 
                        id="standard-basic" label="company" onChange={(event) => this.addEmployment(event, 'company')} />
                    </div>

                    <TextField 
                    // value={this.state.title} 
                    onChange={(event) => this.addEmployment(event, 'title')} id="standard-basic" label="title" />

                    </CardContent>

                <CardContent style={{ textAlign: 'center' }}>
                    <div>
                        <TextField
                            id="date"
                            // value={this.state.startDate}
                            label="Start Date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addEmployment(event, 'startDate')}

                        />
                        <TextField
                            id="date"
                            // value={this.state.endDate}
                            label="End Date"
                            type="date"
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