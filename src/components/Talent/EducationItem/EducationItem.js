import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { TextField, Typography, Card, CardContent, CardActions } from '@material-ui/core';

export class EducationItem extends Component {
    componentWillUnmount() {
        if(this.state.school === null && this.state.degree === null && this.state.startDate === null && this.state.endDate === null) {
        } else{
            this.props.dispatch({ type: 'SET_EDUCATION', payload: { state: this.state } })
        }
        
    }

    state = {
     
        school: null,
        degree: null,
        startDate: null,
        endDate: null
    }

    addEducation = (event, property) => {
            this.setState({
                ...this.state,
                [property]: event.target.value,
            })
           
       
    }

    sendData = (event) => {
        this.props.dispatch({ type: 'SET_EDUCATION', payload: { state: this.state } })
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
                        <TextField defaultValue={this.state.school} value={this.state.school} id="standard-basic" label="school" onChange={(event) => this.addEducation(event, 'school')} />
                    </div>

              
                    
                    <TextField value={this.state.degree} onChange={(event) => this.addEducation(event, 'degree')} id="standard-basic" label="degree" />

                </CardContent>

                <CardContent style={{textAlign: 'center'}}>

                    <div>
                        <TextField
                            id="date"
                            // value={this.state.startDate}
                            label="Start Date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addEducation(event, 'startDate')}

                        />
                        <TextField
                            id="date"
                            // value={this.state.endDate}
                            label="End Date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.addEducation(event, 'endDate')}
 
                        />
                    </div>
                </CardContent>
                
            </div>
        )
    }
}

EducationItem.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(EducationItem)); 