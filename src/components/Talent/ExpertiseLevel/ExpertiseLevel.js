import React, { Component } from 'react';
import { connect } from 'react-redux'; 

export class ExpertiseLevel extends Component {
    handleYearSelection = (event) => {
        console.log(event.target.value, event.target.dataset.skill)
        this.props.dispatch({ type: 'SET_SKILLS_EXPERIENCE', payload: { skill: event.target.dataset.skill, time: event.target.value} })
    }

    render() {
        return (
            <div>
                <h3>  What is your expertise level for each skill? </h3> 
                <ul>
                    {this.props.skills. map( skill => {
                        return(
                            <li>
                                {skill}
                                <select onChange={this.handleYearSelection} data-skill={skill}  > 
                                    <option> </option>
                                    <option value = "Less than 1 year"> Less than 1 year </option>
                                    <option value = "2 years"> 2 years </option>
                                    <option value = "3 years"> 3 years </option>
                                    <option value = "4 years"> 4 years </option>
                                    <option value = "5 years"> 5 years</option>
                                    <option value = "6 years"> 6 years </option>
                                    <option value = "7 years"> 7 years </option>
                                    <option value = "8 years"> 8 years </option>
                                    <option value = "9 years"> 9 years </option>
                                    <option value = "10 years"> 10 years </option>
                                    <option value = "11 years"> 11 years </option>
                                    <option value = "12 years"> 12 years </option>
                                    <option value = "13 years"> 13 years </option>
                                    <option value = "14 years"> 14 years </option>
                                    <option value = "More than 15 years"> More than 15 years </option>
                                </select>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => {
    return {
        skills: reduxState.talentForm.initialSkills
    }
}

export default connect (reduxStateToProps) (ExpertiseLevel); 