import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select, MenuItem, Button, Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
//import InlineEdit from 'react-edit-inline';
import styles from '../../Styles/styles';
//import { withStyles } from '@material-ui/core/styles';
//import '.../FarmProfile/FarmBio/farm.css';

import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export class EditFarm extends Component {
    state = {
        id: this.props.reduxState.farmBioReducer[0].id,
        farm_name: this.props.reduxState.farmBioReducer[0].farm_name,
        street_address: this.props.reduxState.farmBioReducer[0].street_address,
        city: this.props.reduxState.farmBioReducer[0].city,
        state: this.props.reduxState.farmBioReducer[0].state,
        zipcode: this.props.reduxState.farmBioReducer[0].zipcode,
        phone: this.props.reduxState.farmBioReducer[0].phone,
        bio: this.props.reduxState.farmBioReducer[0].bio,
        size: this.props.reduxState.farmBioReducer[0].size,
    }

    componentDidMount(){
        const prevInfo = this.props.match.params.id
        console.log("edit pg name:", prevInfo);
    }

    sendUpdateToServer = () => {
        console.log(this.state);
        this.props.dispatch({ type: 'SET_EDIT_FARM_PROFILE', payload: this.state, history: this.props.history });  //.reduxState.editFarmProfile  //match.params.id
        //this.props.history.push(`/farmProfile/${this.props.reduxState.user.id}`);
    }

    updateFarmName = (event) => {
        //console.log(this.props);
        //this.setState({ type: 'SET_EDIT_FARM_NAME', payload: event.target.value})
        this.setState({ farm_name: event.target.value })
    }
    updateStreetAddress = (event) => {
        console.log(this.props);
        //this.props.dispatch({ type: 'SET_EDIT_FARM_ADDRESS', payload: event.target.value})
        this.setState({ street_address: event.target.value })
    }
    updateFarmCity = (event) => {
        console.log(this.props);
        //this.props.dispatch({ type: 'SET_EDIT_FARM_CITY', payload: event.target.value})
        this.setState({ city: event.target.value })
    }
    updateFarmState = (event) => {
        console.log(this.props);
        //this.props.dispatch({ type: 'SET_EDIT_FARM_STATE', payload: event.target.value})
        this.setState({ state: event.target.value })
    }
    updateFarmZip = (event) => {
        console.log(this.props);
        // this.props.dispatch({ type: 'SET_EDIT_FARM_ZIP', payload: event.target.value})
        this.setState({ zipcode: event.target.value })
    }
    updateFarmPhone = (event) => {
        console.log(this.props);
        // this.props.dispatch({ type: 'SET_EDIT_FARM_PHONE', payload: event.target.value})
        this.setState({ phone: event.target.value })
    }
    updateFarmBio = (event) => {
        console.log('add farm bio', this.props);
        // this.props.dispatch({ type: 'SET_EDIT_FARM_BIO', payload: event.target.value }) //{ bio: event.target.value }
        this.setState({ bio: event.target.value })
    } //end of updateFarmBio  
    updateSizeSelection = (event) => {
        console.log(event.target.value);
        // this.props.dispatch({ type: 'SET_EDIT_FARM_SIZE', payload: event.target.value }) // { size: event.target.value}
        this.setState({ size: event.target.value })
    } // end hss
    // updateType = (property) => {
    //     console.log(this.state);
    //     this.props.dispatch({ type: 'SET_EDIT_FARM_TYPE', payload: property })
    // } //end of addType function 

    cancelEdit = (event) =>{
        console.log('cancel the edit');
        this.props.history.push(`/farmProfile/${this.props.reduxState.user.id}`);
    }

    render() {
        //const { classes } = this.props;

        // let rowCropColor = '';
        // if (this.props.type.includes("Row Crop")) { 
        //     rowCropColor = 'primary';
        //   }
        //   else {
        //    rowCropColor = '';
        //   }
        //   let livestockColor = '';
        //   if (this.props.type.includes("Livestock")) { 
        //     livestockColor = 'primary';
        //   }
        //   else {
        //     livestockColor = '';
        //   }
        //   let dairyColor = '';
        //   if (this.props.type.includes("Dairy")) { 
        //     dairyColor = 'primary';
        //   }
        //   else {
        //     dairyColor = '';
        //   }
        return (
            <div className={"centerIt"}>
                {/* <p>{JSON.stringify(this.props.reduxState.farmBioReducer)}</p> */}
                

                <div 
                // className={'farmBio'}
                >
                    {/* {JSON.stringify(this.props.reduxState.farmBioReducer)} */}
                    {this.props.reduxState.farmBioReducer.map((bio) => {
                        return (
                            <>

                <div className={"bioWidth"}>
                <Grid container direction="row" 
                    //className={classes.gridRoot} 
                    //className={classes.bioCard} 
                    alignItems="top" 
                    direction="column"
                    alignItems="center"
                    justify="center"
                    width="100%"
                    //setWidth="500"
                    spacing = {2}>
         
                <Grid item lg={10} >
                    
                    <Card variant="outlined"
                    alignItems="center" 
                    spacing = {2}
                    
                    >
                        <CardContent>
                            <Typography>

                                <div key={bio.id}><br/>
                                    <a>Farm Name: </a><br/>
                                    <input placeholder={bio.farm_name} 
                                    value={this.props.farm_name} 
                                    onChange={(event) => this.updateFarmName(event, 'farm_name')}></input><br/>

                                    <a>Address: </a><br/>
                                    <input placeholder={bio.street_address} 
                                    value={this.props.street_address}
                                    onChange={(event) => this.updateStreetAddress(event, 'street_address')}></input>&nbsp;
                                    
                                    <input placeholder={bio.city} 
                                    value={this.props.city}
                                    onChange={(event) => this.updateFarmCity(event, 'city')}></input><br/>

                                    <input placeholder={bio.state} 
                                    value={this.props.state}
                                    onChange={(event) => this.updateFarmState(event, 'state')}></input>

                                    <input placeholder={bio.zipcode} 
                                    value={this.props.zipcode}
                                    onChange={(event) => this.updateFarmZip(event, 'zipcode')}></input><br/>

                                    <a>Phone: </a><br/>
                                    <input placeholder={bio.phone} 
                                    value={this.props.phone}
                                    onChange={(event) => this.updateFarmPhone(event, 'phone')}></input>

                                    <br/>
                                    <select onChange={(event) => this.updateSizeSelection(event, 'size')} 
                                    value={this.props.size}>
                                    <option> Number of employees </option>
                                    <option value = "1-10 employees"> 1-10 employees </option>
                                    <option value = "10-25 employees"> 10-25 employees </option>
                                    <option value = "25-50 employees"> 25-50 employees </option>
                                    <option value = "50-75 employees"> 50-75 employees </option>
                                    <option value = "75-100 employees"> 75-100 employees </option>
                                    <option value = "100+ employees"> 100+ employees </option>
                                    </select>
          
                                    
                                </div>
                                <br/>
                                <div className={'farmBioSize'}><br/>
                                    <a>About:</a>
                                    <textarea rows="6" cols="30" placeholder={bio.bio}
                                    onChange={(event) => this.updateFarmBio(event, 'bio')}
                                    value={this.props.bio}></textarea>
                                </div>
                                
                                {/* <div>
                                <Button variant='contained' 
                                color={rowCropColor} 
                                onClick={(event) => this.addType( 'Row Crop' )}> Row Crop </Button>&nbsp; 
                                <Button variant='contained' 
                                color={livestockColor} 
                                onClick={(event) => this.addType( 'Livestock' )}> Livestock </Button>&nbsp; 
                                <Button variant='contained' 
                                color={dairyColor} 
                                onClick={(event) => this.addType( 'Dairy' )}> Dairy </Button>
                                </div> */}

                        </Typography>
                        </CardContent>
                    </Card>
                    
                </Grid>
                </Grid>
                </div>

                            </>
                        )
                    })}
                    </div>
                                <div>
                                    <Button variant="outlined" onClick={(event) => this.cancelEdit(event)}>CANCEL </Button> &nbsp;
                                    <Button variant="outlined" onClick={(event) => this.sendUpdateToServer(event)}> Save Update </Button>
                                </div>
                


                
                
            </div>
        )
    }
}

//EditFarm.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = (reduxState) => ({ reduxState })


export default connect(mapStateToProps)(withRouter(EditFarm));
