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

    // componentWillUnmount(){
    //     this.props.dispatch({ type: 'SET_FARM_NAME_LOCATION', payload: this.state })
    // }

    addFarmNameLocation = (event, property) => {
        console.log(this.props);
        this.props.dispatch({ type: 'SET_FARM_NAME_LOCATION', 
                payload: {
                    [property]: event.target.value,
                } 
            })
        // this.setState({
        //         ...this.state,
        //         [property]: event.target.value,
        //     })
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
                
                <TextField id="standard-basic" value={this.props.farm_name} label="Farm Name" onChange={(event) => this.addFarmNameLocation(event, 'farm_name')} />
                <TextField id="standard-basic" value={this.props.street_address} label="Address" onChange={(event) => this.addFarmNameLocation(event, 'street_address')} />  
                {/* this.props.nameLocation.street_address */}
                
                <br/>

                <TextField id="standard-basic" value={this.props.city} label="City" onChange={(event) => this.addFarmNameLocation(event, 'city')} />
                <TextField id="standard-basic" value={this.props.state} label="State" onChange={(event) => this.addFarmNameLocation(event, 'state')} /><br/>
                <TextField id="standard-basic" value={this.props.zipcode} label="Zip Code" onChange={(event) => this.addFarmNameLocation(event, 'zipcode')} />

                <br/><br/>
                <TextField id="outlined-basic" value={this.props.phone} label="Phone Number" variant="outlined" onChange={(event) => this.addFarmNameLocation(event, 'phone')} />
            
                
                <br/>
            </div>
        )
    }
}

// const reduxStateToProps = (reduxState) => {
//     return {
//         farm_name: reduxState.farmForm.farm_name,
//         farm_address: reduxState.farmForm.farm_address,
//         city: reduxState.farmForm.city,
//         state: reduxState.farmForm.state,
//         zipcode: reduxState.farmForm.zipcode,
//         phone: reduxState.farmForm.phone
//     }
// }

NameLocation.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(NameLocation)); 

// const reduxStateToProps = (reduxState) => {
//     return {nameLocation: reduxState.farmForm.nameLocation};}
