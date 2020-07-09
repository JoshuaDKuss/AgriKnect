import React, { Component } from 'react';
import { connect } from 'react-redux'; 
//import {Button} from '@material-ui/core';
import { Select, MenuItem, 
        Card, CardContent, CardHeader } from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { withStyles } from '@material-ui/core/styles';



export class Size extends Component {

    componentDidMount = () => {
        console.log(this.props.size);
    }

    handleSizeSelection = (event, property) => {
        console.log(event.target.value);
        this.props.dispatch({ type: 'SET_FARM_SIZE', payload: { size: event.target.value} })
    } // end hss

    render() {
        const { classes } = this.props; //need this for Material UI    
        return (
            // <div className={"centerIt"}>

                <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} 
                //classes={{ title: classes.title }} 
                title="What is the size of your farm?" />

                <CardContent>

                                <Select 
                                variant="outlined" 
                                onChange={this.handleSizeSelection} 
                                value={this.props.size}
                                style={{width: 200}}>
                                    <MenuItem> Number of employees </MenuItem>
                                    <MenuItem value = "1-10 employees"> 1-10 employees </MenuItem>
                                    <MenuItem value = "10-25 employees"> 10-25 employees </MenuItem>
                                    <MenuItem value = "25-50 employees"> 25-50 employees </MenuItem>
                                    <MenuItem value = "50-75 employees"> 50-75 employees </MenuItem>
                                    <MenuItem value = "75-100 employees"> 75-100 employees </MenuItem>
                                    <MenuItem value = "100+ employees"> 100+ employees </MenuItem>
                                </Select> <br/>
                            
            </CardContent>
            </Card >
        )
    }
}

const reduxStateToProps = (reduxState) => {
    return {
        size: reduxState.farmForm.size
    }
}

Size.propTypes = { classes: PropTypes.object.isRequired };

export default connect(reduxStateToProps)(withStyles(styles)(Size)); 