import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import styles from '../../Styles/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export class ThankYouPageTalent extends Component {

    goToTalentProfile = () =>{
        console.log('go to talent profile clicked');
        this.props.history.push(`/talentProfile/${this.props.reduxState.user.id}`);
    }
    render() {
        
        return (
            <div>
                <h2 id="thankYou">Thank you for creating your profile!</h2>
                <br/>
                <Button variant='contained' onClick={this.goToTalentProfile}>Go To Profile</Button>
                {/* /onClick={(event) => this.editTalentBio(event)} */}
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(withRouter(ThankYouPageTalent));