import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import FarmDetails from '../FarmDetails/FarmDetails'
import './farm.css';
import FarmJobsAvailable from '../FarmJobAvailable/FarmJobAvailable';
import { Button, Grid } from '@material-ui/core';
import styles from '../../Styles/styles';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'; 
import CardMedia from '@material-ui/core/CardMedia';
import RowCropBio from './row-crop-field2.png';
import Icon from './farm-icon.png';
// import { sizing } from '@material-ui/system';
// import rowCrop from './rowCrop.png';
// import dairy from './dairy.png';
// import livestock from './livestock.png';


export class farmBio extends Component {
    componentDidMount() {
        console.log('this is params.id', this.props.match.params.id);
        this.props.dispatch({ type: "FETCH_FARM", payload: this.props.match.params.id });
    }

    editFarmBio = () =>{
        console.log('editFarmBio clicked');
        this.props.history.push(`/EditFarm/${this.props.match.params.id}`);
    }

    render() {


        const {classes} = this.props;
        // console.log('in profile farm', this.props.reduxState.farmBioReducer)
        // const classes = useStyles();
        // const bull = <span className={classes.bullet}>•</span>;
        let editButtonControl = <span> </span>
        if (this.props.reduxState.user.id == this.props.match.params.id) {
            editButtonControl = <Button variant="outlined" onClick={(event) => this.editFarmBio(event)}>edit farm</Button>
        }
        
        // let iconToRender = <span> </span>
        //  if(this.props.details.type === 'Row Crop'){
        //      iconToRender = <img src={rowCrop} alt="rowCrop" className={'bioIconType'}></img>
        // }
        //     if(this.props.details.type === 'Dairy'){
        //     iconToRender = <img src={dairy} alt="dairy" className={'bioIconType'}></img>
        // }
        //     if(this.props.details.type === 'Row Crop'){
        //     iconToRender = <img src={livestock} alt="livestock" className={'bioIconType'}></img>
        // }
    
        
        return (
            <>

                {/* <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                        be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card> */}

                
            <div >
                <Grid container direction="row" 
                    //className={classes.gridRoot} 
                    className={classes.bioCard} 
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
                    style={{width: 1000}}
                    >
                        <CardContent>
                            <Typography>

                            <div className={'farmBio'}>
                            {this.props.reduxState.farmBioReducer.map((bio) => {
                            return (
                            <>
                            <div>
                            <img src={Icon} alt="Icon" className={'bioIcon'}></img>
                            </div>
                                <div className={'bioName'} key={bio.id}>
                                    <h2>{bio.farm_name}</h2>
                                    <p>{bio.street_address}<br/>
                                    {bio.city}, {bio.state}
                                    &nbsp;{bio.zipcode}</p>
                                    
                                    {/* <p>Email: {bio.username}<br/>
                                    Owner: {bio.first_name} &nbsp;
                                    {bio.last_name} <br/>
                                    Phone: {bio.phone}</p> */}
                                </div>
                                

                                {/* <div className={'farmBioSize'}>
                                    <h2>About</h2>
                                    <p>{bio.bio}</p>
                                </div> */}

                                <div className={'bioButton'}>
                                    <Button variant="outlined" 
                                    onClick={(event) => this.editFarmBio(event)}>edit farm</Button>
                                    {/* <h4>Farm Size </h4>&nbsp;
                                    <a>{bio.size} </a> */}
                                    <h4>Farm Size: {bio.size} </h4>
                                </div>

                                
                                {/* <img src={RowCrop} alt="" className={'bioImage'}></img> */}
                                

                            </>
                            
                            )
                            })}
                            
                            </div> 
                            
                            <img src={RowCropBio} alt="bioImage" className={'bioImage'}></img>

                            </Typography>
                        </CardContent>
                    </Card>
                    
                </Grid>

            
                <Grid item lg={10} >
                    
                        <Card 
                        //className={classes.root}
                        variant="outlined"
                        alignItems="center" 
                        spacing = {2}
                        style={{width: 1000}}>
                            {/* <CardMedia
                                component="img"
                                className={classes.media}
                                src="images/Apartment.jpeg"
                                title= "Apartment"
                            /> */}
                            <CardContent>
                                <Typography>
                                
                                <div className={'farmDetails'}>
                                {/* {JSON.stringify(this.props.reduxState.farmBioReducer)} */}
                                <h3 className={"centerIt"}
                                // className={'farmDetailsHeader'}
                                >Farm Details</h3>
                                {this.props.reduxState.farmBioReducer.map((details) => {
                                return (
                                <FarmDetails details={details} key={details.id} history={this.props.history} />
                                )
                            })}
                            
                        </div>
                        </Typography>
                        </CardContent>
                        </Card>
                    
                </Grid>
                

             <Grid item xl={20} >    
                <Card variant="outlined"
                    alignItems="center" 
                    style={{width: 1000}}
                    spacing = {2}>
                    {/* className={classes.root} */}
                
                    {/* <CardMedia
                        component="img"
                        className={classes.media}
                        src="images/Trivia.jpeg"
                        title="Apartment"
                    /> */}
                    <CardContent>
                        {/* <Typography> */}
                        <div className={'farmJobsAvailable'}>
                            {/* {JSON.stringify(this.props.reduxState.farmJobsAvailable)} */}
                            <h3 className={'farmJobs'}>Available Jobs </h3>
                            <ul>
                                {this.props.reduxState.farmJobsAvailable.map((job) => {
                                    return (

                                        <FarmJobsAvailable job={job} key={job.id} history={this.props.history} />
                                    )
                                })}
                            </ul>
                        </div>
                       {/* </Typography> */}

                    </CardContent>
                </Card>
                </Grid>
           
            </Grid>
                
            </div>
                
                                
                {/* <div className={'farmBio'}>
                    
                    {this.props.reduxState.farmBioReducer.map((bio) => {
                        return (
                            <>
                                <div key={bio.id}>
                                    <h2>{bio.farm_name}</h2>
                                    <span>{bio.street_address}</span><br/>
                                    <span>{bio.city}</span>, <span>{bio.state}</span>&nbsp;<span>{bio.zipcode}</span>
                                    <p>Email: {bio.username}</p>
                                    <span>Owner: {bio.first_name} </span>
                                    <span>{bio.last_name}</span>
                                    <p>Phone: {bio.phone}</p>
                                </div>
                                <div className={'farmBioSize'}>
                                    <h2>About</h2>
                                    <p>{bio.bio}</p>
                                </div>
                                <div>
                                   {editButtonControl} 
                                    {/* <Button variant="outlined" onClick={(event) => this.editFarmBio(event)}>edit farm</Button> */}
                                {/* </div> */}
                            {/* </> */}
                        {/* ) */}
                    {/* })} */}
                {/* </div> */} 

                {/* <div className={'farmDetails'}>
                    <h3 className={'farmDetailsHeader'}>Farm Details</h3>
                    {this.props.reduxState.farmBioReducer.map((details) => {
                        return (
                            <FarmDetails details={details} key={details.id} history={this.props.history} />
                        )
                    })}
                </div> */}

                {/* <div className={'farmJobsAvailable'}>
                    
                    <h3 className={'farmJobs'}>Available Jobs</h3>
                    <ul>
                        {this.props.reduxState.farmJobsAvailable.map((job) => {
                            return (

                                <FarmJobsAvailable job={job} key={job.id} history={this.props.history} />
                            )
                        })}
                    </ul>
                </div> */}
            </>
        )
    }
}

farmBio.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(withStyles(styles)(farmBio));