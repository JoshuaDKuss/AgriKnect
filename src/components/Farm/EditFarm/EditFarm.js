import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import InlineEdit from 'react-edit-inline';

export class EditFarm extends Component {
    // constructor(props){
    //     super(props);
    //     this.dataChanged = this.dataChanged.bind(this);
    //     this.state = {
    //       message: 'ReactInline demo'
    //     }
    //   }

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
    handleSizeSelection = (event) => {
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

                <div className={'farmBio'}>
                    {/* {JSON.stringify(this.props.reduxState.farmBioReducer)} */}
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
                                    <p placeholder={bio.bio}></p>
                                </div>
                            </>
                        )
                    })}
                    </div>
                                <div>
                                    <Button variant="outlined" onClick={(event) => this.cancelEdit(event)}>CANCEL EDIT</Button>
                                </div>
                
                <input placeholder={this.props.reduxState.farmBioReducer}></input>


                
                
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
