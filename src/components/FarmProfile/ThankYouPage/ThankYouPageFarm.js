import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core';
import { withRouter } from 'react-router-dom';

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
                <Button variant='contained' onClick={this.goToFarmProfile}>Go To Profile</Button>
                {/* /onClick={(event) => this.editFarmBio(event)} */}
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({ reduxState })

export default connect(mapStateToProps)(withRouter(ThankYouPageFarm));
