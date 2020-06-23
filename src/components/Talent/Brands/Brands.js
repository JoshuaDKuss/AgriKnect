import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 

export class Brands extends Component {
    state = {
        johnDeereColor: '',
        caseIhColor: '',
        newHollandColor: '',
        caterpillarColor: '',
        masseyColor: '',
        claasColor: '',
        kubotaColor: '',
        allisChalmersColor: '',
    }

    addOrDeleteEquipment = (event, property, stateToChange) => {
        if (this.state[stateToChange] === '') {
            this.setState({
                ...this.state, 
                [stateToChange]: 'primary'
            })
    } else {
        this.setState({
            ...this.state, 
            [stateToChange]: ''
        })
    }
        console.log(this.state)
        this.props.dispatch({ type: 'SET_BRANDS', payload: property })
        
    } //end of addOrDelete function 

    render() {
        const { classes } = this.props;
        return (
            <div>
                <h3> What equipment do you have experience with?  </h3>

                <Button variant='contained' color={this.state.johnDeereColor} onClick={(event) => this.addOrDeleteEquipment(event, 'John Deere', 'johnDeereColor')}> John Deere </Button>
                <Button variant='contained' color={this.state.caseIhColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Case IH', 'caseIhColor')}> Case IH</Button>
                <Button variant='contained' color={this.state.newHollandColor} onClick={(event) => this.addOrDeleteEquipment(event, 'New Holland', 'newHollandColor')}> New Holland </Button>
                <Button variant='contained' color={this.state.caterpillarColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Caterpillar', 'caterpillarColor')}> Caterpillar </Button>
                <Button variant='contained' color={this.state.masseyColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Massey Fergueson', 'masseyColor')}> Massey Fergueson </Button>
                <Button variant='contained' color={this.state.claasColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Claas', 'claasColor')}> Claas </Button>
                <Button variant='contained' color={this.state.kubotaColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Kubota', 'kubotaColor')}> Kubota</Button>
                <Button variant='contained' color={this.state.allisChalmersColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Allis Chalmers', 'allisChalmersColor')}> Allis Chalmers </Button>


            </div>
        )
    }
}

Brands.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(Brands)); 
