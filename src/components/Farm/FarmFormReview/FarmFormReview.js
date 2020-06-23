import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {Button} from '@material-ui/core';

export class FarmFormReview extends Component {
    
    //sends bio to redux state to add or delete 
    addFarmFormReview = (event, property) => {
        console.log('add farm form review');
        // this.
        
    } //end of addFarmFormReview  

    render() {
        return (
            <div>
                <h3> Review </h3>
                <h4>Farm Name and address: </h4><br/>
                <h4>Phone Number and Email address: </h4><br/>
                <h4>Farm Size: </h4>
                <h4>Farm Type: </h4><br/>
                <h4>Bio: </h4>
            </div>
        )
    }
}

// const reduxStateToProps = (reduxState) => {
//     return {
//         FarmFormReview: reduxState.farmForm.FarmFormReview
//     }
// }

// export default connect (reduxStateToProps) (FarmFormReview); 

export default FarmFormReview;