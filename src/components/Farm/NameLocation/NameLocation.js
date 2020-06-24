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
        fName: '',
        fAddress: '',
        fCity: '',
        fState: '',
        fZip: '',
        fPhone: '',
        fEmail: ''
    }

    componentWillUnmount(){
        this.props.dispatch({ type: 'SET_FARM_NAME_LOCATION', payload: this.state })
    }

    addFarmNameLocation = (event, property) => {
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
                
                <TextField id="standard-basic" label="Farm Name" onClick={(event) => this.addFarmNameLocation(event, 'fName')} />
                <TextField id="standard-basic" label="Address" onClick={(event) => this.addFarmNameLocation(event, 'fAddress')} />
                
                <br/>

                <TextField id="standard-basic" label="City" onClick={(event) => this.addFarmNameLocation(event, 'fCity')} />
                <TextField id="standard-basic" label="State" onClick={(event) => this.addFarmNameLocation(event, 'fState')} /><br/>
                <TextField id="standard-basic" label="Zip Code" onClick={(event) => this.addFarmNameLocation(event, 'fZip')} />

                <br/>
                <TextField id="outlined-basic" label="Phone Number" variant="outlined" onClick={(event) => this.addFarmNameLocation(event, 'fPhone')} /><br/>
                <TextField id="outlined-basic" label="Email Address" variant="outlined" onClick={(event) => this.addFarmNameLocation(event, 'fEmail')} />
                
                <br/>
            </div>
        )
    }
}

NameLocation.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(NameLocation)); 

// const reduxStateToProps = (reduxState) => {
//     return {nameLocation: reduxState.farmForm.nameLocation};}

// export default connect(reduxStateToProps)(NameLocation); 