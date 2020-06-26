import React, { Component } from 'react';
import { connect } from 'react-redux'; 
//import {Button} from '@material-ui/core';
import { Typography, 
        // Select, MenuItem, FormControl, InputLabel, FormHelperText 
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

 
//const classes = useStyles();
//const [size, setSize] = React.useState('');
  
    // const handleChange = (event) => {
    //   setAge(event.target.value);
    // };


export class Size extends Component {

    state = {
        size: this.props.size
    }

    componentDidMount = () => {
        console.log(this.props.size);
    }

    // export default function SimpleSelects() {
    //const classes = useStyles();
    //     const [state, setState] = React.useState({
    //       age: '',
    //       name: 'hai',
    //     });
      
    //     const handleChange = (event) => {
    //       const name = event.target.name;
    //       setState({
    //         ...state,
    //         [name]: event.target.value,
    //       });
    //     };

    handleSizeSelection = (event) => {
        console.log(event.target.value);
        this.props.dispatch({ type: 'SET_FARM_SIZE', payload: { size: event.target.value} })
        this.setState({
            size: event.target.value
        })
    } // end hss

    render() {
        const { classes } = this.props; //useStyles(); //need this for Material UI    
        return (
            <div>
                <Typography>  What is the size of your farm?  (Number of employees) </Typography>
                <ul>
                            <li>
                                {/* {size} */}
                                <select value={this.state.size} onChange={this.handleSizeSelection} 
                                //size={size}
                                > 
                                    <option> </option>
                                    <option value = "1-10 employees"> 1-10 employees </option>
                                    <option value = "10-25 employees"> 10-25 employees </option>
                                    <option value = "25-50 employees"> 25-50 employees </option>
                                    <option value = "50-75 employees"> 50-75 employees </option>
                                    <option value = "75-100 employees"> 75-100 employees</option>
                                    <option value = "100+ employees"> 100+ employees </option>
                                </select>

                                {/* <FormControl variant="outlined" 
                                // className={classes.formControl}
                                >
                                    <InputLabel id="demo-simple-select-outlined-label">Number of employees</InputLabel>
                                    <Select  
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            // value={size}
                                            // onChange={handleChange}
                                            // onChange={handleSizeSelection}
                                            label="Size">
                                            <MenuItem value="">
                                              <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"1-10 employees"}>1-10 employees</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl> */}
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

export default connect()(withStyles(styles)(Size)); 