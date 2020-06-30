import React, { Component } from 'react';
import { connect } from 'react-redux'; 
//import {Button} from '@material-ui/core';
import { Typography, Select, MenuItem, 
        //FormControl, InputLabel, FormHelperText 
        } from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { withStyles } from '@material-ui/core/styles';

// const useStyles = {
//     FormControl: {
//             // margin: theme.spacing(1),
//             minWidth: 250,
//         }
// }    // needed this for MUI select

// const useStyles = makeStyles((theme) => ({
//     FormControl: {
//       margin: theme.spacing(1),
//       minWidth: 250,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(3),
//     },
//   }));

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
            <div>
                <Typography>  What is the size of your farm? </Typography> <br/>
                <ul>
                            <li>
                                <Select variant="outlined" onChange={this.handleSizeSelection} value={this.props.size}>
                                    <MenuItem> Number of employees </MenuItem>
                                    <MenuItem value = "1-10 employees"> 1-10 employees </MenuItem>
                                    <MenuItem value = "10-25 employees"> 10-25 employees </MenuItem>
                                    <MenuItem value = "25-50 employees"> 25-50 employees </MenuItem>
                                    <MenuItem value = "50-75 employees"> 50-75 employees </MenuItem>
                                    <MenuItem value = "75-100 employees"> 75-100 employees </MenuItem>
                                    <MenuItem value = "100+ employees"> 100+ employees </MenuItem>
                                </Select> <br/>
                            </li>
                </ul>
            </div>
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