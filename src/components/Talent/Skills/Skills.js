import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import SkillsItem from '../SkillsItem/SkillsItem'; 
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 
import {Card, CardContent, Typography, CardHeader, CardActions } from '@material-ui/core';



export class Skills extends Component {


    render() {
        const { classes } = this.props; //need this for Material UI
        

        return (
            <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes={{ title: classes.title }} title="What skills do you have?" />

                <CardContent  >
                
               
               <h4> General Agriculture </h4>
                {/* <div> */}
               
                    {this.props.proficiencies.generalAgriculture.map((item) => {
                        return (
                            <SkillsItem item={item}  key={item.id} />
                        )

                    })}

                  

           
              
                <h4> Precision Farming Technology  </h4>
              
                {this.props.proficiencies.precisionFarmingTechnology.map((item) => {
                    return (
                        <SkillsItem item={item} key={item.id} />
                    )

                })}

                {/* </div> */}
               

                <h4> Maintenance and Mechanics  </h4>
                {/* <div> */}
                {this.props.proficiencies.maintenanceAndMechanics.map((item) => {
                    return (
                        <SkillsItem item={item} key={item.id} />
                    )

                })}
                {/* </div> */}
                <h4>Trucking </h4>

                {this.props.proficiencies.trucking.map((item) => {
                    return (
                        <SkillsItem item={item} key={item.id} />
                    )

                })}
                 </CardContent>
                </Card>
                
            
        )
    }
}

Skills.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    proficiencies: state.talentForm.proficiencies,
});

export default connect(mapStateToProps)(withStyles(styles)(Skills)); 
