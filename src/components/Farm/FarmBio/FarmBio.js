import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {Button} from '@material-ui/core';

export class FarmBio extends Component {
    
    //sends bio to redux state to add or delete 
    addFarmBio = (event, property) => {
        this.props.dispatch({ type: 'SET_FARM_BIO', payload: property })
        
    } //end of addFarmBio  

    render() {
        return (
            <div>
                <h3> Please tell us about your farm </h3>
                <input placeholder="Tell us about your farm" onClick={(event) => this.addFarmBio(event, 'Farm Bio')}></input>
            
            </div>
        )
    }
}

export default connect() (FarmBio);