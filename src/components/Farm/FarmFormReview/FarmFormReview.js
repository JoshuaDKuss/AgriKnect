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
                <h3> Review your information </h3>
                <h4>Farm Name and address: </h4>
                {/* <p>{JSON.stringify(this.props.reduxState.farmForm)}</p> */}
                <p>{this.props.reduxState.farmForm.farm_name}</p>
                <p>{this.props.reduxState.farmForm.street_address}</p>
                <p>{this.props.reduxState.farmForm.city},
                {this.props.reduxState.farmForm.state}
                {this.props.reduxState.farmForm.zipcode}</p><br/>
                <h4>Farm Size, Type and Description: </h4>
                <p>{this.props.reduxState.farmForm.size}</p>
                <p>{this.props.reduxState.farmForm.type}</p>
                <p>{this.props.reduxState.farmForm.bio}</p>
                {/* <p>{this.props.reduxState.fName}</p><br/>
                <p>{this.props.reduxState.street_address}, {this.props.reduxState.city}, 
                {this.props.reduxState.state}  {this.props.reduxState.zipcode}</p> */}
                
                <h4>Contact: </h4>
                <p>{this.props.reduxState.farmForm.phone}</p>
                
                {/* <p>{this.props.reduxState.phone}</p><br/>
                <p>{this.props.reduxState.fEmail}</p>
                <h4>Farm Size: </h4>
                <p>{this.props.reduxState.size}</p>
                <h4>Farm Type: </h4>
                <p>{this.props.reduxState.type}</p>
                <h4>Bio: </h4>
                <p>{this.props.reduxState.bio}</p> */}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(FarmFormReview);

// const reduxStateToProps = (reduxState) => {
//     return {
//         FarmFormReview: reduxState.farmForm.FarmFormReview
//     }
// }

// export default connect (reduxStateToProps) (FarmFormReview); 

//export default FarmFormReview;