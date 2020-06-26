import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core';

export class FarmFormReview extends Component {

    sendToServer = () => {
        this.props.dispatch({ type: 'SEND_FARM_FORM', payload: this.props.reduxState.farmForm })  //.farmForm
        //this.props.history.push('/FarmProfile');
    }

    //sends bio to redux state to add or delete 
    // addFarmFormReview = (event, property) => {
    //     console.log('add farm form review');
    // } //end of addFarmFormReview  

    render() {
        return (
            <div>
                <h3> Review your information </h3>
                <h4>Farm Name and address: </h4>
                
                <p>{this.props.reduxState.farmForm.farm_name}</p>
                <p>{this.props.reduxState.farmForm.street_address}</p>
                <p>{this.props.reduxState.farmForm.city},
                {this.props.reduxState.farmForm.state}
                {this.props.reduxState.farmForm.zipcode}</p><br/>

                <h4>Farm Size, Type and Description: </h4>
                <p>{this.props.reduxState.farmForm.size}</p>
                <p>{this.props.reduxState.farmForm.type}</p>
                <p>{this.props.reduxState.farmForm.bio}</p>
                
                <h4>Contact: </h4>
                <p>{this.props.reduxState.farmForm.phone}</p>
                <div>
                <Button variant='contained' onClick={this.sendToServer}> Save Farm Profile </Button>
                </div>
                <br/>
                
            </div>
        )
    }
}



const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(FarmFormReview);

// const reduxStateToProps = (reduxState) => {
//     return {
//         talentForm: reduxState.talentForm,
//     }
// }

// export default connect(reduxStateToProps)(ReviewPage); 