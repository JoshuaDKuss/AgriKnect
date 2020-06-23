import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {Button} from '@material-ui/core';
//import rowCrop from './documentation/agriknect_icons/rowCrop.png'
//import livestock from './documentation/agriknect_icons/livestock.png'
//import dairy from './documentation/agriknect_icons/dairy.png'

export class Type extends Component {
    
    //sends type to redux state 
    addType = (event, property) => {
        console.log('add farm type');
        //this.props.dispatch({ type: 'SET_FARM_TYPE', payload: property })
        
    } //end of addType function 

    render() {
        return (
            <div>
                <h3> What type of farming do you do?  </h3>
                
                {/* <img src={rowCrop} onClick={(event) => this.addType(event, 'Row Crop')}> Row Crop </img> */}
                <button onClick={(event) => this.addType(event, 'Row Crop')}> Row Crop </button>
                <button onClick={(event) => this.addType(event, 'Livestock')}> Livestock </button>
                <button onClick={(event) => this.addType(event, 'Dairy')}> Dairy </button>
                
            </div>
        )
    }
}


// const reduxStateToProps = (reduxState) => {
//     return {
//         type: reduxState.farmForm.type
//     }
// }

// export default connect (reduxStateToProps) (Type); 

export default Type;