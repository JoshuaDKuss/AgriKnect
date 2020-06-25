import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {Button} from '@material-ui/core';
import { TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';

export class FarmBio extends Component {
    // state = {
    //     fBio: this.props.fBio
    // }

    componentDidMount = () => {
        console.log(this.props.fBio);
    }

    //sends bio to redux state to add or delete 
    addFarmBio = (event, property) => {
        console.log('add farm bio', this.state);

        this.props.dispatch({ type: 'SET_FARM_BIO', payload: { fBio: event.target.value } }) ///payload: property
        // this.setState({
        //     fBio: event.target.value
        // })
    } //end of addFarmBio  

    render() {
        return (
            <div>
                <Typography> Please tell us about your farm </Typography>
                <textarea rows="10" cols="70" 
                value={this.props.fBio} 
                placeholder="Tell us about your farm" onChange={(event) => this.addFarmBio(event)}></textarea>
            
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => {
    return {
        fBio: reduxState.farmForm.fBio
    }
}

FarmBio.propTypes = { classes: PropTypes.object.isRequired };

export default connect(reduxStateToProps)(withStyles(styles)(FarmBio)); 