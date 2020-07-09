import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
        Typography, 
        Grid, Button, 
        Card, CardContent, CardHeader } from '@material-ui/core';
//import styles from '../../Styles/styles';

import CardActions from '@material-ui/core/CardActions';



export class FarmFormReview extends Component {

    sendToServer = () => {
        
        this.props.dispatch({ type: 'SEND_FARM_FORM', payload: this.props.reduxState.farmForm })  //.farmForm
        //this.props.history.push(`/farmProfile/${this.props.reduxState.user.id}`);
        this.props.history.push('/ThankYouPageFarm');
    }

    render() {
        const { classes } = this.props;
        return (
            <>
            <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} 
                //classes={{ title: classes.title }} 
                title="Please review your information" />

                <CardContent  >

            {/* <div className={"centerIt"}> */}
                <Grid container direction="row" 
                    //className={classes.gridRoot} 
                    alignItems="top" 
                    direction="column"
                    alignItems="center"
                    justify="center"
                    width="100%"
                    spacing = {2}>
         
                <Grid item xs={9} >
                    {/* <Link to="/theBar">  */}
                    <Card variant="outlined"
                    alignItems="center" 
                    spacing = {2}>
                        <CardContent>
                            <Typography>
                <h3> Review your information </h3>
                <h4>Farm Name and address: </h4>
                
                <p>{this.props.reduxState.farmForm.farm_name}</p>
                <p>{this.props.reduxState.farmForm.street_address}</p>
                <p>{this.props.reduxState.farmForm.city},&nbsp;
                {this.props.reduxState.farmForm.state} &nbsp;
                {this.props.reduxState.farmForm.zipcode}</p><br/>
               
                

                {/* <h4>Farm Size, Type and Description: </h4> */}
                <p>Size: {this.props.reduxState.farmForm.size}&nbsp;
                Type: {this.props.reduxState.farmForm.type}&nbsp;</p>
                <p>Description: {this.props.reduxState.farmForm.bio}</p>
                
                {/* <h4>Contact: </h4> */}
                <p>Contact: {this.props.reduxState.farmForm.phone}</p>

                <div>
                <Button variant='contained' onClick={this.sendToServer}> Save Farm Profile </Button>
                </div>

                </Typography>
                    </CardContent>
                    </Card>
                    {/* </Link> */}
                </Grid>
                
                <br/>


                </Grid>
            {/* </div> */}
                </CardContent  >
             </Card>
            </>
        )
    }
}



const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(withRouter(FarmFormReview));