import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

export class EditFarm extends Component {

    componentDidMount(){
        const prevInfo = this.props.match.params.id
        console.log("edit pg name:", prevInfo);
    }

    sendUpdateToServer = () => {
        //console.log(id);
        this.props.dispatch({ type: 'UPDATE_FARM_PROFILE', payload: this.props.reduxState.editFarmProfile })  //.farmForm
        this.props.history.push(`/farmProfile/${this.props.reduxState.user.id}`);
    }

    updateFarmName = (event) => {
        console.log(this.props);
        this.props.dispatch({ type: 'UPDATE_FARM_NAME', payload: event.target.value})
    }
    updateStreetAddress = (event) => {
        console.log(this.props);
        this.props.dispatch({ type: 'UPDATE_FARM_ADDRESS', payload: event.target.value})
    }
    updateFarmCity = (event) => {
        console.log(this.props);
        this.props.dispatch({ type: 'UPDATE_FARM_CITY', payload: event.target.value})
    }
    updateFarmState = (event) => {
        console.log(this.props);
        this.props.dispatch({ type: 'UPDATE_FARM_STATE', payload: event.target.value})
    }
    updateFarmZip = (event) => {
        console.log(this.props);
        this.props.dispatch({ type: 'UPDATE_FARM_ZIP', payload: event.target.value})
    }
    updateFarmPhone = (event) => {
        console.log(this.props);
        this.props.dispatch({ type: 'UPDATE_FARM_PHONE', payload: event.target.value})
    }
    updateFarmBio = (event) => {
        console.log('add farm bio', this.props);
        this.props.dispatch({ type: 'UPDATE_FARM_BIO', payload: { bio: event.target.value } }) 
    } //end of updateFarmBio  
    handleSizeSelection = (event, property) => {
        console.log(event.target.value);
        this.props.dispatch({ type: 'UPDATE_FARM_SIZE', payload: { size: event.target.value} })
    } // end hss
    cancelEdit = (event) =>{
        console.log('cancel the edit');
        this.props.history.push(`/farmProfile/${this.props.reduxState.user.id}`);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <p>{JSON.stringify(this.props.reduxState.farmBioReducer)}</p>
                <h4>Farm Name and address: </h4>

                {this.props.reduxState.farmBioReducer.map((bio) => {
                        return (
                            <>
                                <div key={bio.id}>
                                    <h2>{bio.farm_name}</h2>
                                    <span>{bio.city}</span>, <span>{bio.state}</span>
                                    <p>Email: {bio.username}</p>
                                    <span>Owner: {bio.first_name}, </span>
                                    <span>{bio.last_name}</span>
                                    <p>Phone: {bio.phone}</p>
                                </div>
                                <div className={'farmBioSize'}>
                                    <h2>About</h2>
                                    <p>{bio.bio}</p>
                                </div>
                                <div>
                                    <Button variant="outlined" onClick={(event) => this.cancelEdit(event)}>CANCEL EDIT</Button>
                                </div>
                            </>
                        )
                    })}
                
                <input placeholder={this.props.reduxState.farmForm.farm_name}></input>

                {/* <TextField id="standard-basic" value={this.props.farm_name} label="Farm Name" onChange={(event) => this.addFarmName(event, 'farm_name')} /> &nbsp;
                <TextField id="standard-basic" value={this.props.street_address} label="Address" onChange={(event) => this.addStreetAddress(event, 'street_address')} />  
                
                <br/>

                <TextField id="standard-basic" value={this.props.city} label="City" onChange={(event) => this.addFarmCity(event, 'city')} /> &nbsp;
                <TextField id="standard-basic" value={this.props.state} label="State" onChange={(event) => this.addFarmState(event, 'state')} /><br/>
                <TextField id="standard-basic" value={this.props.zipcode} label="Zip Code" onChange={(event) => this.addFarmZip(event, 'zipcode')} />

                <br/><br/>
                <TextField id="outlined-basic" value={this.props.phone} label="Phone Number" variant="outlined" onChange={(event) => this.addFarmPhone(event, 'phone')} /> 
                <br/> */}

                <p>{this.props.reduxState.farmForm.street_address}</p>
                <p>{this.props.reduxState.farmForm.city},&nbsp;
                {this.props.reduxState.farmForm.state} &nbsp;
                {this.props.reduxState.farmForm.zipcode}</p><br/>

                {/* <h4>Farm Size, Type and Description: </h4> */}
                <p>Size: {this.props.reduxState.farmForm.size}</p>
                <p>Type: {this.props.reduxState.farmForm.type}&nbsp;</p>
                <p>Description: {this.props.reduxState.farmForm.bio}</p>
                
                {/* <h4>Contact: </h4> */}
                <p>Contact: {this.props.reduxState.farmForm.phone}</p>
                <div>
                <Button variant='contained' 
                onClick={this.sendUpdateToServer}
                > Update Farm Profile </Button>
                </div>
                <br/>
                
            </div>
        )
    }
}



const mapStateToProps = (reduxState) => ({ reduxState })

EditFarm.propTypes = { classes: PropTypes.object.isRequired };

export default connect(mapStateToProps)(withRouter(EditFarm));

// const reduxStateToProps = (reduxState) => {
//     return {
//         talentForm: reduxState.talentForm,
//     }
// }
