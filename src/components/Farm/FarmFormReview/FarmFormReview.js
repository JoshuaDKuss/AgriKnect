import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {Button} from '@material-ui/core';

export class FarmFormReview extends Component {

    state = {
        fName: "",
        fAddress: "",
        fCity: "",
        fState: "",
        fZip: "",
        fPhone: "",
        fEmail: "",
        fSize: ""
    }
    
    //sends bio to redux state to add or delete 
    addFarmFormReview = (event, property) => {
        console.log('add farm form review');
        // this.
        
    } //end of addFarmFormReview  

    render() {
        return (
            <div>
                <h3> Review your information </h3>
                <h4>Farm Name and address: </h4><br/>
                <p>{JSON.stringify(this.props.reduxState.farmForm)}</p>
                {/* <p>{this.props.reduxState.fName}</p><br/>
                <p>{this.props.reduxState.fAddress}, {this.props.reduxState.fCity}, 
                {this.props.reduxState.fState}  {this.props.reduxState.fZip}</p> */}
                
                <h4>Phone Number and Email address: </h4><br/>
                {/* <p>{this.props.reduxState.fPhone}</p><br/>
                <p>{this.props.reduxState.fEmail}</p>
                <h4>Farm Size: </h4>
                <p>{this.props.reduxState.fSize}</p>
                <h4>Farm Type: </h4>
                <p>{this.props.reduxState.fType}</p>
                <h4>Bio: </h4>
                <p>{this.props.reduxState.fBio}</p> */}
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