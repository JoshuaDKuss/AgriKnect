import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { TextField, Typography } from '@material-ui/core';

export class Bio extends Component {

    state = {
        bio: ''
    }

    componentWillUnmount() {
        this.props.dispatch({ type: 'SET_BIO', payload: this.state })
    }
    addBio = (event) => {
        this.setState({
            bio: event.target.value
        })
        console.log(event.target.value)
    }
    render() {
        const { classes } = this.props; //need this for Material UI

        return (
            <div>
                <Typography> Please include a short bio </Typography>

              
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Bio"
                        multiline
                        rowsMax={4}
                        
                        onChange={this.addBio}
                        variant="outlined"
                    />

              
            </div>
        )
    }
}

Bio.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(Bio)); 