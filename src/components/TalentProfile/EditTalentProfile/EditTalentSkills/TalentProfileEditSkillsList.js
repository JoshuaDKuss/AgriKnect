import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardContent, CardHeader, Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import TalentProfileEditSkillsItem from './TalentProfileEditSkillsItem'; 



export class TalentProfileEditSkillsList extends Component {



    render() {

        const { classes } = this.props; //need this for Material UI
       


        return (
             <Grid container direction="row"  alignItems="top" spacing={2}>
                 <Grid item xs={4}/>
                 <Grid item xs={4}>
            <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes={{ title: classes.title }} title="What skills do you have?" />

                <CardContent  >
                <h4> General Agriculture </h4>

             
                    {this.props.proficiencies.generalAgriculture.map((item) => {
                        return (
                            <TalentProfileEditSkillsItem item={item} key={item.id} />
                        )

                    })}



               

                <h4> Precision Farming Technology  </h4>

                {this.props.proficiencies.precisionFarmingTechnology.map((item) => {
                    return (
                        <TalentProfileEditSkillsItem item={item} key={item.id} />
                    )

                })}

                <h4> Maintenance and Mechanics  </h4>

                {this.props.proficiencies.maintenanceAndMechanics.map((item) => {
                    return (
                        <TalentProfileEditSkillsItem item={item} key={item.id} />
                    )

                })}

                <h4>Trucking </h4>

                {this.props.proficiencies.trucking.map((item) => {
                    return (
                        <TalentProfileEditSkillsItem item={item} key={item.id} />
                    )

                })}

        
         </CardContent>
         </Card>
            </Grid>
            </Grid>
        )
    }
}

TalentProfileEditSkillsList.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    proficiencies: state.talentForm.proficiencies,
});

export default connect(mapStateToProps)(withStyles(styles)(TalentProfileEditSkillsList)); 