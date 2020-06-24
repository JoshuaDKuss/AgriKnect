import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { TextField, Typography } from '@material-ui/core';

export class Location extends Component {

    state = {
        city: '',
        state: '',
        zipcode: ''
    }

    componentWillUnmount(){
        this.props.dispatch({ type: 'SET_LOCATION', payload: this.state })
    }
    addLocation = (event, property) => {
        this.setState({
                ...this.state,
                [property]: event.target.value,
            })
    }
    render() {
        const { classes } = this.props; //need this for Material UI

        return (
            <div>
               <Typography> Where are you looking for work?  </Typography> 

                <TextField id="standard-basic" label="City" onChange={(event) => this.addLocation(event, 'city')} />
                 <TextField id="standard-basic" label="State" onChange={(event) => this.addLocation(event, 'state')} />
                <TextField id="standard-basic" label="Zip Code" onChange={(event) => this.addLocation(event, 'zipcode')} />
            </div>
        )
    }
}

Location.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(Location)); 