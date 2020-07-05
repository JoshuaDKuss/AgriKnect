import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 
import JobSkillsItem from '../JobSkillsItem/JobSkillsItem';

export class JobSkills extends Component {
    render() {
        const { classes } = this.props; //need this for Material UI
        return (
        
               
                <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes={{ title: classes.title }} title="What skills does the job require?" />

                <CardContent  >
                    <h4> General Agriculture </h4>

<<<<<<< HEAD
                    {/* <ul> */}
                        <div>
=======
                  
>>>>>>> 3157b393a1624cf7c2d291bd51ca01a3f8c923f2
                        {this.props.proficiencies.generalAgriculture.map((item) => {
                            return (
                                <JobSkillsItem item={item} key={item.id} />
                            )

                        })}


<<<<<<< HEAD
                    </div>
                    {/* </ul> */}
=======
>>>>>>> 3157b393a1624cf7c2d291bd51ca01a3f8c923f2

                    <h4> Precision Farming Technology  </h4>

                    {this.props.proficiencies.precisionFarmingTechnology.map((item) => {
                        return (
                            <JobSkillsItem item={item} key={item.id} />
                        )

                    })}

                    <h4> Maintenance and Mechanics  </h4>

                    {this.props.proficiencies.maintenanceAndMechanics.map((item) => {
                        return (
                            <JobSkillsItem item={item} key={item.id} />
                        )

                    })}

                    <h4>Trucking </h4>

                    {this.props.proficiencies.trucking.map((item) => {
                        return (
                            <JobSkillsItem item={item} key={item.id} />
                        )

                    })}
                
          </CardContent>
        </Card >
        )
    }
}

JobSkills.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    proficiencies: state.talentForm.proficiencies,
});

export default connect(mapStateToProps)(withStyles(styles)(JobSkills)); 