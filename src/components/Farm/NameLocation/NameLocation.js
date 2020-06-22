import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {Button} from '@material-ui/core';

export class NameLocation extends Component {
    
    //sends skill to redux state to add or delete 
    addOrDeleteNameLocation = (event, property) => {
        this.props.dispatch({ type: 'SET_FARM_NAME_LOCATION', payload: property })
        
    } //end of addOrDelete function 

    render() {
        return (
            <div>
                <h3> What is the name of your farm and where it is located? </h3>
                <input placeholder="Farm Name" onClick={(event) => this.addOrDeleteNameLocation(event, 'Name')}></input>
                <input placeholder="Address" onClick={(event) => this.addOrDeleteNameLocation(event, 'Address')}></input>
                <input placeholder="City" onClick={(event) => this.addOrDeleteNameLocation(event, 'City')}></input>
                <input placeholder="State" onClick={(event) => this.addOrDeleteNameLocation(event, 'State')}></input>
                <input placeholder="Postal Code" onClick={(event) => this.addOrDeleteNameLocation(event, 'Postal Code')}></input>
                <input placeholder="Country" onClick={(event) => this.addOrDeleteNameLocation(event, 'Country')}></input>
                <input placeholder="Phone Number" onClick={(event) => this.addOrDeleteNameLocation(event, 'Phone Number')}></input>
                <input placeholder="Email Address" onClick={(event) => this.addOrDeleteNameLocation(event, 'Email Address')}></input>
                {/* <Button variant= 'outlined' onClick={(event) => this.addOrDeleteNameLocation(event, 'Chemical/fertilizer application')}> Chemical/ </Button> */}

                
            
            </div>
        )
    }
}

export default connect() (NameLocation);