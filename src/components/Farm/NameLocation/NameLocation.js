import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {Button} from '@material-ui/core';

export class NameLocation extends Component {
    
    //sends name and location to redux state to add or delete 
    addFarmNameLocation = (event, property) => {
        console.log('add Farm N L');
        //this.props.dispatch({ type: 'SET_FARM_NAME_LOCATION', payload: property })
        
    } //end of addFarmNameLocation function 

    render() {
        return (
            <div>
                <h3> What is the name of your farm and where is it located? </h3>
                <input size="60" placeholder="Farm Name" onClick={(event) => this.addFarmNameLocation(event, 'Name')}></input><br/>
                <input size="60" placeholder="Address" onClick={(event) => this.addFarmNameLocation(event, 'Address')}></input><br/>
                <input size="35" placeholder="City" onClick={(event) => this.addFarmNameLocation(event, 'City')}></input>
                <input size="5"  placeholder="State" onClick={(event) => this.addFarmNameLocation(event, 'State')}></input>
                <input size="10" placeholder="Postal Code" onClick={(event) => this.addFarmNameLocation(event, 'Postal Code')}></input>
                <br/>
                <input size="15" placeholder="Phone Number" onClick={(event) => this.addFarmNameLocation(event, 'Phone Number')}></input>
                <input size="42" placeholder="Email Address" onClick={(event) => this.addFarmNameLocation(event, 'Email Address')}></input>
            </div>
        )
    }
}


// const reduxStateToProps = (reduxState) => {
//     return {nameLocation: reduxState.farmForm.nameLocation};}

// export default connect(reduxStateToProps)(NameLocation); 

export default NameLocation;