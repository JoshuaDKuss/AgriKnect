import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 
import JobSkillsItem from '../JobSkillsItem/JobSkillsItem';

export class JobSkills extends Component {
    render() {
        const { classes } = this.props; //need this for Material UI
        return (
            <div>
               
                    <h3> What skills are you looking for?  </h3>
                    <h4> General Agriculture </h4>

                    <ul>
                        {this.props.proficiencies.generalAgriculture.map((item) => {
                            return (
                                <JobSkillsItem item={item} key={item.id} />
                            )

                        })}



                    </ul>

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
                
            </div>
        )
    }
}

JobSkills.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    proficiencies: state.talentForm.proficiencies,
});

export default connect(mapStateToProps)(withStyles(styles)(JobSkills)); 