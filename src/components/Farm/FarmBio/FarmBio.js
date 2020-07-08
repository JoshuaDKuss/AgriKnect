import React, { Component } from 'react';
import { connect } from 'react-redux';

//import { TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { TextField, Card, CardContent, CardHeader } from '@material-ui/core';

export class FarmBio extends Component {
    // state = {
    //     bio: this.props.bio
    // }

    componentDidMount = () => {
        console.log(this.props.bio);
    }

    //sends bio to redux state to add or delete 
    addFarmBio = (event, property) => {
        console.log('add farm bio', this.state);
        this.props.dispatch({ type: 'SET_FARM_BIO', payload: { bio: event.target.value } }) 
    } //end of addFarmBio  

    render() {
        return (
            <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} 
                //classes={{ title: classes.title }} 
                title="Please tell us about your farm" />

                <CardContent  >

            {/* <div>
                <Typography> Please tell us about your farm </Typography>
                <textarea rows="10" cols="70" value={this.props.bio} 
                placeholder="Tell us about your farm" onChange={(event) => this.addFarmBio(event)}></textarea>
            </div> */}

                <TextField
                        id="outlined-multiline-flexible"
                        label="Farm bio"
                        multiline
                        fullWidth
                        rows={6}
                    value={this.props.bio} 
                        
                    onChange={(event) => this.addFarmBio(event)}
                        variant="outlined"
                    />

            </CardContent>
            </Card>
        )
    }
}

const reduxStateToProps = (reduxState) => {
    return {
        bio: reduxState.farmForm.bio
    }
}

FarmBio.propTypes = { classes: PropTypes.object.isRequired };

export default connect(reduxStateToProps)(withStyles(styles)(FarmBio)); 