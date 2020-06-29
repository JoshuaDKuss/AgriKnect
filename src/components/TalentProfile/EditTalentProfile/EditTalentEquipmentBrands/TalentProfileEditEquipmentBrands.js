import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import TalentProfileEquipmentItem from './TalentProfileEquipmentBrandItem';

export class TalentProfileEquipment extends Component {

    submitEditedEquipment = () => {
        this.props.dispatch({ type: 'UPDATE_EQUIPMENT_BRANDS', payload: { id: this.props.match.params.id, skills: this.props.equipment} })
    }


    render() {
        const { classes } = this.props; //need this for Material UI
        return (
            <>
            <div>
                <h3> What equipment do you have experience with?  </h3>

                {this.props.proficiencies.equipment.map((item) => {
                    return (
                        <TalentProfileEquipmentItem item={item} key={item.id} />
                    )

                })}


            </div>

            <div>
                <h3> What brands do you have experience with?  </h3>

                {this.props.proficiencies.brands.map((item) => {
                    return (
                        <TalentProfileEquipmentItem item={item} key={item.id} />
                    )

                })}


            </div>
                <Button onClick={this.submitEditedEquipment}> Submit </Button>
         </>
        ) //end return 
    } // end render
} //end class component 

TalentProfileEquipment.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    proficiencies: state.talentForm.proficiencies,
    equipment: state.editedTalentEquipmentReducer

});

export default connect(mapStateToProps)(withStyles(styles)(TalentProfileEquipment)); 