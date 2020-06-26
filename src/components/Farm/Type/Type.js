import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { Typography } from '@material-ui/core';

//import rowCrop from './documentation/agriknect_icons/rowCrop.png';
//import livestock from './documentation/agriknect_icons/livestock.png';
//import dairy from './documentation/agriknect_icons/dairy.png';

export class Type extends Component {

               
    // componentDidMount( ) {
    //     this.props.type.map(type => {
    //         for (let i = 0; i < this.state.listOfProperties.length; i++){
    //             if (type === this.state.listOfProperties[i]) {
    //                 this.setState({
    //                     ...this.state,
    //                     [this.state.listOfProperties[i]]: 'primary'
    //                 }) //end of setState
    //         } //end of conditional
    //     }
    //     })
    // }

           

    state = {
        // type = {
        rowCropColor: '',
        livestockColor: '',
        dairyColor: '',
        listOfProperties: ['Row Crop', 'Livestock', 'Dairy']
        // }
    }
    
    //sends type to redux state 
    addType = (event, property, stateToChange) => {
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
        } //end of conditional 
        console.log(this.state);
        this.props.dispatch({ type: 'SET_FARM_TYPE', payload: property })
        
    } //end of addType function 

    render() {
        const { classes } = this.props; //need this for Material UI
          let color = ''; 
         
      
        if (this.state.tillageColor === false) {

        }
        return (
            <div>
                <Typography> What type of farming do you do? </Typography>
                
                {/* <img src={rowCrop} onClick={(event) => this.addType(event, 'Row Crop')}> Row Crop </img> */}
                <Button variant='contained' color={this.state.rowCropColor} 
                onClick={(event) => this.addType(event, 'Row Crop', 'rowCropColor')}> Row Crop </Button>
                <Button variant='contained' color={this.state.livestockColor} 
                onClick={(event) => this.addType(event, 'Livestock', 'livestockColor')}> Livestock </Button>
                <Button variant='contained' color={this.state.dairyColor} 
                onClick={(event) => this.addType(event, 'Dairy', 'dairyColor')}> Dairy </Button>
                <br/><br/>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => {
    return {
        type: reduxState.farmForm.type
    }
}

Type.propTypes = { classes: PropTypes.object.isRequired };

export default connect(reduxStateToProps)(withStyles(styles)(Type)); 