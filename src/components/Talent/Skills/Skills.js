import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Skills extends Component {
    
    //sends skill to redux state to add or delete 
    addOrDeleteSkill = (event, property) => {
        this.props.dispatch({ type: 'SET_INITIAL_SKILLS', payload: property })
        
    } //end of addOrDelete function 

    render() {
        return (
            <div>
                <h3> What skills do you have?  </h3>
                <p>General Agriculture </p>
                <button onClick={(event) => this.addOrDeleteSkill(event, 'Tillage')}> Tillage </button>
                <button onClick={(event) => this.addOrDeleteSkill(event, 'Planting')}> Planting </button>
                <button onClick={(event) => this.addOrDeleteSkill(event, 'Harvesting')}> Harvesting </button>
                <button onClick={(event) => this.addOrDeleteSkill(event, 'Chemical/fertilizer application')}> Chemical/fertilizer application </button>

                <p>Precision Farming Technology </p>
                <button onClick={(event) => this.addOrDeleteSkill(event, 'John Deere Autotrac')}> John Deere Autotrac </button>
                <p>Maintenance and Mechanics </p>
                <button onClick={(event) => this.addOrDeleteSkill(event, 'Construction')}> Construction </button>
                <p>Trucking </p>
                <button onClick={(event) => this.addOrDeleteSkill(event, 'Semi-truck')}> Semi-truck </button>
            </div>
        )
    }
}

export default connect() (Skills);
