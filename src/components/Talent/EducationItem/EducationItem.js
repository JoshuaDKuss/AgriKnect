import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { TextField, Typography, Card, CardContent, CardActions } from '@material-ui/core';

export class EducationItem extends Component {
    componentWillUnmount() {
        if(this.state.school === null && this.state.degree === null && this.state.startDate === null && this.state.endDate === null) {
            console.log('no education')
        } else{
            this.props.dispatch({ type: 'SET_EDUCATION', payload: { state: this.state } })
        }
        
    }

    componentDidMount() {
        console.log('STATE STATE STATE', this.props.item)
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

    fillForm = () => {
        this.setState({
            school: 'Mankato East Senior High School',
            degree: 'High School Diploma',
            startDate: '2005-08-15',
            endDate: '2009-06-15'
        })
    }

    render() {
        const { classes } = this.props; //need this for Material UI
        return (
            <div>
                <button className="fillBtn" onClick={this.fillForm}>Fill</button>
                {/* <div> */}


                  {/* <Card>
                      <CardActions> */}

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
                            value={this.state.startDate}
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
                            value={this.state.endDate}
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