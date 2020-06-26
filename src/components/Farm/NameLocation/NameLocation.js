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

    // state = {
    //     // nameLocation
    //     farm_name: this.props.farm_name,
    //     street_address: this.props.street_address,
    //     city: this.props.city,
    //     state: this.props.state,
    //     zipcode: this.props.zipcode,
    //     phone: this.props.phone,
    //     //fEmail: this.props.fEmail,
    // }

    componentDidMount = () => {
        console.log(this.props.farm_name);
    }

    addFarmName = (event) => {
        console.log(this.props);
        this.props.dispatch({ type: 'SET_FARM_NAME', payload: event.target.value})
    }
    addFarmAddress = (event) => {
        console.log(this.props);
        this.props.dispatch({ type: 'SET_FARM_ADDRESS', payload: event.target.value})
    }
    addFarmCity = (event) => {
        console.log(this.props);
        this.props.dispatch({ type: 'SET_FARM_CITY', payload: event.target.value})
    }
    addFarmState = (event) => {
        console.log(this.props);
        this.props.dispatch({ type: 'SET_FARM_STATE', payload: event.target.value})
    }
    addFarmZip = (event) => {
        console.log(this.props);
        this.props.dispatch({ type: 'SET_FARM_ZIP', payload: event.target.value})
    }
    addFarmPhone = (event) => {
        console.log(this.props);
        this.props.dispatch({ type: 'SET_FARM_PHONE', payload: event.target.value})
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
                
                <TextField id="standard-basic" value={this.props.farm_name} label="Farm Name" onChange={(event) => this.addFarmName(event, 'farm_name')} />
                <TextField id="standard-basic" value={this.props.farm_address} label="Address" onChange={(event) => this.addFarmAddress(event, 'street_address')} />  
                
                <br/>

                <TextField id="standard-basic" value={this.props.city} label="City" onChange={(event) => this.addFarmCity(event, 'city')} />
                <TextField id="standard-basic" value={this.props.state} label="State" onChange={(event) => this.addFarmState(event, 'state')} /><br/>
                <TextField id="standard-basic" value={this.props.zipcode} label="Zip Code" onChange={(event) => this.addFarmZip(event, 'zipcode')} />

                <br/><br/>
                <TextField id="outlined-basic" value={this.props.phone} label="Phone Number" variant="outlined" onChange={(event) => this.addFarmPhone(event, 'phone')} />
            
                
                <br/>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => {
    return {
        farm_name: reduxState.farmForm.farm_name,
        farm_address: reduxState.farmForm.farm_address,
        city: reduxState.farmForm.city,
        state: reduxState.farmForm.state,
        zipcode: reduxState.farmForm.zipcode,
        phone: reduxState.farmForm.phone
    }
}

NameLocation.propTypes = { classes: PropTypes.object.isRequired };

export default connect(reduxStateToProps)(withStyles(styles)(NameLocation)); 
