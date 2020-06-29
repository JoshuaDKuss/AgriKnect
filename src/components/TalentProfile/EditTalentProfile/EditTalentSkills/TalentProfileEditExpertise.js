import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import { Select, MenuItem } from '@material-ui/core';

export class TalentProfileEditExpertise extends Component {
    handleYearSelection = (event) => {
        console.log(event.target.value)
        this.props.dispatch({ type: 'SET_EDITED_SKILLS_EXPERTISE', payload: { skillID: event.target.value.skill, skillName: event.target.value.name, time: event.target.value.time } })
        // skillId: event.target.dataset.skill, skillName: event.target.dataset.proficiency_name,
    }

    render() {
        return (
            <div>
                <h3>  What is your expertise level for each skill? </h3>
                <ul>
                    {this.props.skills.map(skill => {
                        return (
                            <li>
                                {skill.proficiency_name}
                                {/* data-skill={skill.id} */}
                                <Select onChange={this.handleYearSelection}   >
                                    <MenuItem> </MenuItem>
                                    <MenuItem value={{ time: "less than 1 year", skill: skill.id }} > Less than 1 year </MenuItem>
                                    <MenuItem value={{ time: "2 years", skill: skill.id, name: skill.proficiency_name }}> 2 years </MenuItem>
                                    <MenuItem value={{ time: "3 years", skill: skill.id, name: skill.proficiency_name }}> 3 years </MenuItem>
                                    <MenuItem value={{ time: "4 years", skill: skill.id, name: skill.proficiency_name }}> 4 years </MenuItem>
                                    <MenuItem value={{ time: "5 years", skill: skill.id, name: skill.proficiency_name }}> 5 years</MenuItem>
                                    <MenuItem value={{ time: "6 years", skill: skill.id, name: skill.proficiency_name }}> 6 years </MenuItem>
                                    <MenuItem value={{ time: "7 years", skill: skill.id, name: skill.proficiency_name }}> 7 years </MenuItem>
                                    <MenuItem value={{ time: "8 years", skill: skill.id, name: skill.proficiency_name }}> 8 years </MenuItem>
                                    <MenuItem value={{ time: "9 years", skill: skill.id, name: skill.proficiency_name }}> 9 years </MenuItem>
                                    <MenuItem value={{ time: "10 years", skill: skill.id, name: skill.proficiency_name }}> 10 years </MenuItem>
                                    <MenuItem value={{ time: "11 years", skill: skill.id, name: skill.proficiency_name }}> 11 years </MenuItem>
                                    <MenuItem value={{ time: "12 years", skill: skill.id, name: skill.proficiency_name }}> 12 years </MenuItem>
                                    <MenuItem value={{ time: "13 years", skill: skill.id, name: skill.proficiency_name }}> 13 years </MenuItem>
                                    <MenuItem value={{ time: "14 years", skill: skill.id, name: skill.proficiency_name }}> 14 years </MenuItem>
                                    <MenuItem value={{ time: "More than 15 years", skill: skill.id, name: skill.proficiency_name }}> More than 15 years </MenuItem>
                                </Select>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


TalentProfileEditExpertise.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => {
    return {
        skills: reduxState.editedTalentSkillsReducer.editedSkills
    }
}

export default connect(reduxStateToProps)(withStyles(styles)(TalentProfileEditExpertise)); 