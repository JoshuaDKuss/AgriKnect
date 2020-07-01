import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core';
import { withRouter } from 'react-router-dom';

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