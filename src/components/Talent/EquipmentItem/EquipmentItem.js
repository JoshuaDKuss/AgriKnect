import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';

export class EquipmentItem extends Component {
    state = {
        color: ''
    }

    addOrDeleteSkill = (event, property) => {
        if (this.state.color === '') {


            this.setState({
                ...this.state,
                color: 'primary'
            })
        } else {
            this.setState({
                ...this.state,
                color: ''
            })
        } //end of conditional 
        console.log(this.state)
        this.props.dispatch({ type: 'SET_EQUIPMENT', payload: property })

    } //end of addOrDelete function 

    render() {
        return (
            <div>
                <Button variant='contained' color={this.state.color} onClick={(event) => this.addOrDeleteSkill(event, this.props.item.proficiency_name)}> {this.props.item.proficiency_name} </Button>

            </div>
        )
    }
}



EquipmentItem.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(EquipmentItem)); 