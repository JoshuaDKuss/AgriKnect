import React, { Component } from 'react'; 
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 

export class Equipment extends Component {
    state = {
        tractorColor: '',
        frontColor: '', 
        fourColor: '', 
        chiselColor: '', 
        discRipperColor: '',
        discColor: '',
        fieldColor: '',
        rowCropColor: '', 
        grainDrillColor: '',
        airSeederColor: '',
        centerFillColor: '', 
        boxRowColor:  '',
        stipColor: '',
        pullBehindColor: '',
        selfSprayerColor: '',
        selfPropelledColor: '',
        pullCartColor: '',
        floaterColor: '', 
        manureColor: '',
        liquidManureColor: '',
        feedMixColor: '',
        pullBehindChopperColor: '',
        selfPropelledColor: '',
        combineColor: '',
        grainCartColor: '',
        gravityColor: '',
        straightTruckColor: '',
        semiTruckColor: '',
        ptoColor: '',
    }


    //sends skill to redux state to add or delete 
    addOrDeleteEquipment = (event, property, stateToChange) => {
            if (this.state[stateToChange] === '') {
                console.log('YES');

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
            console.log(this.state);
        this.props.dispatch({ type: 'SET_EQUIPMENT', payload: property })
    } //end of addOrDelete function 

    render() {
        const { classes } = this.props; //need this for Material UI
        return (
            <div>
                <h3> What equipment do you have experience with?  </h3>

                <Button variant= 'contained' color = {this.state.tractorColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Tractor (any size)', 'tractorColor' )}> Tractor (any size) </Button>
                <Button variant='contained' color={this.state.frontColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Front wheel assist tractor', 'frontColor')}> Front wheel assist tractor </Button>
                <Button variant='contained' color={this.state.fourColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Four wheel drive tractor', 'fourColor')}> Four wheel drive tractor </Button>
                <Button variant='contained' color={this.state.chiselColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Chisel', 'chiselColor')}> Chisel </Button>
                <Button variant='contained' color={this.state.discRipperColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Disc ripper', 'discRipperColor')}> Disc ripper </Button>
                <Button variant='contained' color={this.state.discColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Disc', 'discColor')}> Disc </Button>
                <Button variant='contained' color={this.state.fieldColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Field cultivator', 'fieldColor')}> Field cultivator </Button>
                <Button variant='contained' color={this.state.rowCropColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Row crop cultivator', 'rowCropColor')}> Row crop cultivator </Button>
                <Button variant='contained' color={this.state.grainDrillColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Grain drill', 'grainDrillColor')}> Grain drill </Button>
                <Button variant='contained' color={this.state.airSeederColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Air seeder', 'airSeederColor')}> Air seeder </Button>
                <Button variant='contained' color={this.state.centerFillColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Center fill planter', 'centerFillColor')}> Center fill planter </Button>
                <Button variant='contained' color={this.state.boxRowColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Box row planter', 'boxRowColor')}> Box row planter </Button>
                <Button variant='contained' color={this.state.stipColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Stip-till machine', 'stipColor')}> Stip-till machine </Button>
                <Button variant='contained' color={this.state.pullBehindColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Pull behind sprayer', 'pullBehindColor')}> Pull behind sprayer </Button>
                <Button variant='contained' color={this.state.selfSprayerColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Self-propelled sprayer', 'selfSprayerColor')}> Self-propelled sprayer </Button>
                <Button variant='contained' color={this.state.selfPropelledColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Self-propelled fertilizer spreader', 'selfPropelledColor')}> Self-propelled fertilizer spreader </Button>
                <Button variant='contained' color={this.state.pullCartColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Pull cart spreader', 'pullCartColor')}> Pull cart spreader </Button>
                <Button variant='contained' color={this.state.floaterColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Floater', 'floaterColor' )}> Floater </Button>
                <Button variant='contained' color={this.state.manureColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Manure spreader', 'manureColor')}> Manure spreader </Button>
                <Button variant='contained' color={this.state.liquidManureColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Liquid manure spreader', 'liquidManureColor' )}> Liquid manure spreader </Button>
                <Button variant='contained' color={this.state.feedMixColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Feed/mixer wagon', 'feedMixColor')}> Feed/mixer wagon </Button>
                <Button variant='contained' color={this.state.pullBehindChopperColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Pull behind silage chopper', 'pullBehindChopperColor')}> Pull behind silage chopper </Button>
                <Button variant='contained' color={this.state.selfPropelledColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Self-propelled silage chopper', 'selfPropelledColor')}> Self-propelled silage chopper </Button>
                <Button variant='contained' color={this.state.combineColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Combine', 'combineColor')}> Combine </Button>
                <Button variant='contained' color={this.state.grainCartColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Grain cart', 'grainCartColor')}> Grain cart </Button>
                <Button variant='contained' color={this.state.gravityColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Gravity wagon', 'gravityColor')}> Gravity wagon </Button>
                <Button variant='contained' color={this.state.straightTruckColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Straight truck', 'straightTruckColor')}> Straight truck </Button>
                <Button variant='contained' color={this.state.semiTruckColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Semi-truck', 'semiTruckColor')}> Semi-truck</Button>
                <Button variant='contained' color={this.state.ptoColor} onClick={(event) => this.addOrDeleteEquipment(event, 'PTO-Augers', 'ptoColor')}> PTO-Augers </Button>
            </div>
        ) //end return 
    } // end render
} //end class component 

Equipment.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(Equipment)); 