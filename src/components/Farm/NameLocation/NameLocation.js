import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 
//import { Input } from '@material-ui/core';
import { TextField, Typography } from '@material-ui/core';
//import { sizing } from '@material-ui/system';

export class NameLocation extends Component {

    state = {
        // nameLocation
        fName: this.props.fName,
        fAddress: this.props.fAddress,
        fCity: this.props.fCity,
        fState: this.props.fState,
        fZip: this.props.fZip,
        fPhone: this.props.fPhone,
        fEmail: this.props.fEmail,
    }

    componentDidMount = () => {
        console.log(this.props.nameLocation);
    }

    // componentWillUnmount(){
    //     this.props.dispatch({ type: 'SET_FARM_NAME_LOCATION', payload: this.state })
    // }

    addFarmNameLocation = (event, property) => {
        console.log(this.state);
        this.props.dispatch({ type: 'SET_FARM_NAME_LOCATION', payload: this.state })
        this.setState({
                ...this.state,
                [property]: event.target.value,
            })
    }
    
    //sends name and location to redux state to add or delete 
    // addFarmNameLocation = (event, property) => {
    //     console.log('add Farm N L');
    //     //this.props.dispatch({ type: 'SET_FARM_NAME_LOCATION', payload: property })
    // } //end of addFarmNameLocation function 

    render() {
        const { classes } = this.props; //need this for Material UI
        return (
            <div>
                <Typography> What is the name of your farm and where is it located? </Typography>
                
                <TextField id="standard-basic" value={this.state.fName} label="Farm Name" onChange={(event) => this.addFarmNameLocation(event, 'fName')} />
                <TextField id="standard-basic" value={this.state.fAddress} label="Address" onChange={(event) => this.addFarmNameLocation(event, 'fAddress')} />
                
                <br/>

                <TextField id="standard-basic" value={this.state.fCity} label="City" onChange={(event) => this.addFarmNameLocation(event, 'fCity')} />
                <TextField id="standard-basic" value={this.state.fState} label="State" onChange={(event) => this.addFarmNameLocation(event, 'fState')} /><br/>
                <TextField id="standard-basic" value={this.state.fZip} label="Zip Code" onChange={(event) => this.addFarmNameLocation(event, 'fZip')} />

                <br/>
                <TextField id="outlined-basic" value={this.state.fPhone} label="Phone Number" variant="outlined" onChange={(event) => this.addFarmNameLocation(event, 'fPhone')} /><br/>
                <TextField id="outlined-basic" value={this.state.fEmail} label="Email Address" variant="outlined" onChange={(event) => this.addFarmNameLocation(event, 'fEmail')} />
                
                <br/>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => {
    return {
        nameLocation: reduxState.farmForm.nameLocation
    }
}

NameLocation.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(NameLocation)); 

// const reduxStateToProps = (reduxState) => {
//     return {nameLocation: reduxState.farmForm.nameLocation};}
