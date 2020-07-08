import React, { Component } from 'react';
import { Button, Grid, Card, CardContent, CardHeader } from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import TalentProfileEquipmentItem from './TalentProfileEquipmentBrandItem';

export class TalentProfileEquipment extends Component {


    submitEditedEquipment = () => {
        this.props.dispatch({ type: 'RUN_UPDATE_BRANDS_LOGIC', payload: { id: this.props.match.params.id, skills: this.props.equipment }, history: this.props.history })
    }


    render() {
        const { classes } = this.props; //need this for Material UI
        return (
            <>
                <Grid container direction="row" alignItems="top" spacing={2}>
                    <Grid item xs={4} />
                    <Grid item xs={4}>
                        <Card >
                            <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes={{ title: classes.title }} title="What equipment and brands do you have experience with?" />

                            <CardContent  >
                <div>
                <h3> Equipment  </h3>
                {this.props.proficiencies.equipment.map((item) => {
                    return (
                        <TalentProfileEquipmentItem item={item} key={item.id} />
                    )

                })}


            </div>

            <div>
                <h3> Brands  </h3>

                {this.props.proficiencies.brands.map((item) => {
                    return (
                        <TalentProfileEquipmentItem item={item} key={item.id} />
                    )

                })}


            </div>
            </CardContent>
         </Card>
        </Grid>
            <Grid item xs={9}/>
            <Grid item xs={2}>
                
                <Button color="primary" variant="outlined" onClick={this.submitEditedEquipment}> Submit </Button>
            </Grid>
                    <Grid item xs={12} />
            </Grid>
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