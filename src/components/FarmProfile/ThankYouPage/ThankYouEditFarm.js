import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../FarmBio/farm.css';
import { withRouter } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import styles from '../../Styles/styles';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export class ThankYouEditFarm extends Component {

    goToFarmProfile = () =>{
        console.log('go to farm profile clicked');
        this.props.history.push(`/farmProfile/${this.props.reduxState.user.id}`);
    }
    render() {
        const {classes} = this.props;
        
        return (
            <div>
                <h2 id="thankYou">Your edits have been saved</h2>
                <br/>
                <Button color="primary" variant="contained" 
                className="centerButton" onClick={this.goToFarmProfile}>Go To Profile</Button>
                {/* /onClick={(event) => this.editFarmBio(event)} */}
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(withRouter(ThankYouEditFarm));
