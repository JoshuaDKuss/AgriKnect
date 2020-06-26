import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { Select, MenuItem, InputLabel, Input, InputAdornment } from '@material-ui/core';

export class JobPay extends Component {

    handlePaymentSelection= (event) => {
        this.props.dispatch({ type: 'SET_PAYMENT_TYPE', payload: event.target.value })
    }
   
     handlePaymentAmount = (event) => {
         this.props.dispatch({ type: 'SET_PAYMENT_AMOUNT', payload: event.target.value })
     }
    render() {
        return (
            <div>
                <h3> What type of payments will be provided for this job</h3>
                <Select onChange={this.handlePaymentSelection}   >
                    <MenuItem> </MenuItem>
                    <MenuItem value='hourly' > Hourly </MenuItem>
                    <MenuItem value='monthly'> Monthly </MenuItem>
                    <MenuItem value='yearly'> Yearly </MenuItem>
                    <MenuItem value='lump sum'> Lump Sum </MenuItem>
                </Select>
            <div>
                
                    <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        // value={'hello'}
                        onChange={this.handlePaymentAmount}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
             
            </div>
            </div>
        )
    }
}

JobPay.propTypes = { classes: PropTypes.object.isRequired };

// const reduxStateToProps = (reduxState) => {
//     return {
//         skills: reduxState.talentForm.formData.initialSkills
//     }
// }

export default connect()(withStyles(styles)(JobPay)); 
