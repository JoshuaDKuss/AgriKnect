import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import FarmDetails from '../FarmDetails/FarmDetails'
import './farm.css'
import FarmJobsAvailable from '../FarmJobAvailable/FarmJobAvailable';
import { Button, Grid } from '@material-ui/core';
import styles from '../../Styles/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'; 
import CardMedia from '@material-ui/core/CardMedia';


export class farmBio extends Component {

    // const useStyles = styles({
    //     root: {
    //       minWidth: 275,
    //     },
    //     bullet: {
    //       display: 'inline-block',
    //       margin: '0 2px',
    //       transform: 'scale(0.8)',
    //     },
    //     title: {
    //       fontSize: 14,
    //     },
    //     pos: {
    //       marginBottom: 12,
    //     },
    //   });


    componentDidMount() {
        console.log('this is params.id', this.props.match.params.id);
        this.props.dispatch({ type: "FETCH_FARM", payload: this.props.match.params.id });
    }

    editFarmBio = () =>{
        console.log('editFarmBio clicked');
        this.props.history.push(`/EditFarm/${this.props.match.params.id}`);
    }

    render() {
        const styles = {
            root: {
                maxWidth: 345,
            },
            media: {
                height: 140,
            },
            gridRoot: {
                flexGrow: 1,
                padding: 10,
        
            },
            paper: {
                textAlign: 'center',
            },
            marginOne: {
                marginLeft: 50
            },
            marginTwo: {
                marginLeft: 60
            },
            recipe: {
                marginLeft: 60,
            },
            directions: {
                marginTop: 40,
                maxWidth: 300,
            },
            backButton: {
                marginTop: 40,
            },
            image: {
                height: "70 %",
                width: " 60 %",
            },
            marginLeft: {
                marginLeft: 70,
            },
            searchBar: {
                marginTop: 30
            },
            video: {
                marginLeft: 120
            },
            button: {
                marginLeft: 20
            },
            buttonTwo: {
                marginLeft: 40
            },
            userPage: {
                display: 'inline',
                marginLeft: 20
            },
            textField: {
                marginLeft: 20
            }
        }
        const {classes} = this.props;
        // console.log('in profile farm', this.props.reduxState.farmBioReducer)
        // const classes = useStyles();
        // const bull = <span className={classes.bullet}>•</span>;
        let editButtonControl = <span> </span>
        if (this.props.reduxState.user.id == this.props.match.params.id) {
            editButtonControl = <Button variant="outlined" onClick={(event) => this.editFarmBio(event)}>edit farm</Button>


        }
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

                
            <div>
                <Grid container direction="row" 
                    //className={classes.gridRoot} 
                    alignItems="top" 
                    spacing = {2}>
         
                <Grid item xs={9} >
                    {/* <Link to="/theBar">  */}
                    <Card variant="outlined"
                    alignItems="center" 
                    spacing = {2}>
                        <CardContent>
                            <Typography>

                            <div className={'farmBio'}>
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
                                    <Button variant="outlined" onClick={(event) => this.editFarmBio(event)}>edit farm</Button>
                                </div>
                            </>
                            )
                            })}
                            </div> 

                            </Typography>
                        </CardContent>
                    </Card>
                    {/* </Link> */}
                </Grid>

            
                <Grid item xs={9} >
                    {/* <Link to="/apartmentHunt"> */}
                        <Card 
                        //className={classes.root}
                        >
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
                                <h3 className={'farmDetailsHeader'}>Farm Details</h3>
                                {this.props.reduxState.farmBioReducer.map((details) => {
                                return (
                                <FarmDetails details={details} key={details.id} history={this.props.history} />
                                )
                            })}
                        </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    {/* </Link> */}
                </Grid>
                

             <Grid item xs={9} >    
                <Card 
                //className={classes.root}
                >
                    {/* <CardMedia
                        component="img"
                        className={classes.media}
                        src="images/Trivia.jpeg"
                        title="Apartment"
                    /> */}
                    <CardContent>
                        <Typography>
                        <div className={'farmJobsAvailable'}>
                            {/* {JSON.stringify(this.props.reduxState.farmJobsAvailable)} */}
                            <h3 className={'farmJobs'}>Available Jobs</h3>
                            <ul>
                                {this.props.reduxState.farmJobsAvailable.map((job) => {
                                    return (

                                        <FarmJobsAvailable job={job} key={job.id} history={this.props.history} />
                                    )
                                })}
                            </ul>
                        </div>
                       </Typography>

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
                                {/* </div>
                            </>
                        )
                    })}
                </div> */} */}

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

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(farmBio);