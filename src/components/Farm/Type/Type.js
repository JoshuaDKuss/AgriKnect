import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { Card, CardHeader, CardContent, Grid } from '@material-ui/core';

//import rowCrop from './documentation/agriknect_icons/rowCrop.png';
//import livestock from './documentation/agriknect_icons/livestock.png';
//import dairy from './documentation/agriknect_icons/dairy.png';

export class Type extends Component {
    
    //sends type to redux state 
    
    addType = (property) => {
        console.log(this.state);
        this.props.dispatch({ type: 'SET_FARM_TYPE', payload: property })
    } //end of addType function 

    render() {
        const { classes } = this.props; //need this for Material UI
          let rowCropColor = '';
          if (this.props.type.includes("Row Crop")) { 
            rowCropColor = 'primary';
          }
          else {
           rowCropColor = '';
          }
          let livestockColor = '';
          if (this.props.type.includes("Livestock")) { 
            livestockColor = 'primary';
          }
          else {
            livestockColor = '';
          }
          let dairyColor = '';
          if (this.props.type.includes("Dairy")) { 
            dairyColor = 'primary';
          }
          else {
            dairyColor = '';
          }
        
        return (
            <>
                
                <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} 
                //classes={{ title: classes.title }} 
                title="What type of farming do you do?" />

                <CardContent  >
                <Grid container spacing={2} >
                
                {/* <img src={rowCrop} onClick={(event) => this.addType(event, 'Row Crop')}> Row Crop </img> */}
                <Button variant='contained' 
                color={rowCropColor} 
                onClick={(event) => this.addType( 'Row Crop' )}> Row Crop </Button>&nbsp; &nbsp; 
                <Button variant='contained' 
                color={livestockColor} 
                onClick={(event) => this.addType( 'Livestock' )}> Livestock </Button> &nbsp; &nbsp; 
                <Button variant='contained' 
                color={dairyColor} 
                onClick={(event) => this.addType( 'Dairy' )}> Dairy </Button>
                <br/><br/>
                </Grid>
                </CardContent>
                </Card>
            </>
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