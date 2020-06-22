import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {Button} from '@material-ui/core';

export class NameLocation extends Component {
    
    //sends skill to redux state to add or delete 
    addOrDeleteNameLocation = (event, property) => {
        this.props.dispatch({ type: 'SET_FARM_NAME', payload: property })
        
    } //end of addOrDelete function 

    render() {
        return (
            <div>
                <h3> What is the name of your farm and where it is located? </h3>
                <input onClick={(event) => this.addOrDeleteNameLocation(event, 'Name')}></input>
                <button onClick={(event) => this.addOrDeleteNameLocation(event, 'Chemical/fertilizer application')}> Chemical/ </button>

                
                
                <p>Maintenance and Mechanics </p>
                <button onClick={(event) => this.addOrDeleteNameLocation(event, 'Construction')}> Construction </button>
                <p>Trucking </p>
                <button onClick={(event) => this.addOrDeleteNameLocation(event, 'Semi-truck')}> Semi-truck </button>
            </div>
        )
    }
}

export default connect() (NameLocation);