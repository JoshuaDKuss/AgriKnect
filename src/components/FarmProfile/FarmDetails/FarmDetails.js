import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import styles from '../../Styles/styles';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'; 
import rowCrop from './rowCrop.png';
import dairy from './dairy.png';
import livestock from './livestock.png';

export class FarmDetails extends Component {


    render() {
        const {classes} = this.props;

        let iconToRender = <span> </span>
         if(this.props.details.type = "Row Crop"){
            iconToRender = <img src={rowCrop} alt="rowCrop" className={'bioIconType'}></img>
        } 
            if(this.props.details.type = "Dairy"){
            iconToRender = <img src={dairy} alt="dairy" className={'bioIconType'}></img>
        }
            if(this.props.details.type = "Livestock"){
            iconToRender = <img src={livestock} alt="livestock" className={'bioIconType'}></img>
        }

        return (
            <>
            <div className={'farmDetailItem'}>
                <div>
                    <p>Size: {this.props.details.size} </p>
                </div>
                <div>
                <p>Farm Type: {iconToRender}{this.props.details.type}</p>
                </div>
            </div>
            </>
        )
    }
}

FarmDetails.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(withStyles(styles)(FarmDetails));