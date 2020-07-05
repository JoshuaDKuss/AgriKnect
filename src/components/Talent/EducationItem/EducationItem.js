import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { TextField, Typography, Card, CardContent, CardActions } from '@material-ui/core';

export class EducationItem extends Component {
    componentWillUnmount() {
        this.props.dispatch({ type: 'SET_EDUCATION', payload: { state: this.state } })
    }

    componentDidMount() {
        console.log('STATE STATE STATE', this.props.item)
    }

    state = {
     
        school: '',
        degree: '',
        startDate: '2017-01-01',
        endDate: '2020-01-01'
    }

    addEducation = (event, property) => {
            this.setState({
                ...this.state,
                [property]: event.target.value,
            })
            console.log(event.target.value);
            console.log('STATE', this.state)
       
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
                {/* <div> */}


                  {/* <Card>
                      <CardActions> */}

                <CardContent style={{ paddingLeft: 150}}>
                   
                    <div ref={node => this.inCertificate = node}>
                        <TextField defaultValue={this.state.school} id="standard-basic" label="school" onChange={(event) => this.addEducation(event, 'school')} />
                    </div>

              
                    
                    <TextField onChange={(event) => this.addEducation(event, 'degree')} id="standard-basic" label="degree" />

                </CardContent>

                <CardContent style={{textAlign: 'center'}}>

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