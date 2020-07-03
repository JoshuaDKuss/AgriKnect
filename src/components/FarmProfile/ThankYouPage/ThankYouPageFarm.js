import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import styles from '../../Styles/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export class ThankYouPageFarm extends Component {

    goToFarmProfile = () =>{
        console.log('go to farm profile clicked');
        this.props.history.push(`/farmProfile/${this.props.reduxState.user.id}`);
    }
    render() {
        
        return (
            <div>
                <h2 id="thankYou">Thank you for creating your profile!</h2>
                <br/>
                <div className={"centerIt"}>
                <Button variant='contained' 
                color="primary"
                onClick={this.goToFarmProfile}>Go To Profile</Button>
            
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(withRouter(ThankYouPageFarm));
