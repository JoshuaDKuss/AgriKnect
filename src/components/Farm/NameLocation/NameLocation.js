import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {Button} from '@material-ui/core';

export class NameLocation extends Component {
    
    //sends name and location to redux state to add or delete 
    addFarmNameLocation = (event, property) => {
        this.props.dispatch({ type: 'SET_FARM_NAME_LOCATION', payload: property })
        
    } //end of addFarmNameLocation function 

    render() {
        return (
            <div>
                <h3> What is the name of your farm and where it is located? </h3>
                <input placeholder="Farm Name" onClick={(event) => this.addFarmNameLocation(event, 'Name')}></input>
                <input placeholder="Address" onClick={(event) => this.addFarmNameLocation(event, 'Address')}></input>
                <input placeholder="City" onClick={(event) => this.addFarmNameLocation(event, 'City')}></input>
                <input placeholder="State" onClick={(event) => this.addFarmNameLocation(event, 'State')}></input>
                <input placeholder="Postal Code" onClick={(event) => this.addFarmNameLocation(event, 'Postal Code')}></input>
                <input placeholder="Country" onClick={(event) => this.addFarmNameLocation(event, 'Country')}></input>
                <input placeholder="Phone Number" onClick={(event) => this.addFarmNameLocation(event, 'Phone Number')}></input>
                <input placeholder="Email Address" onClick={(event) => this.addFarmNameLocation(event, 'Email Address')}></input>
            </div>
        )
    }
}


const reduxStateToProps = (reduxState) => {
    return {
        nameLocation: reduxState.farmForm.nameLocation
    }
}

export default connect (reduxStateToProps) (NameLocation); 