import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import TalentProfileSkillsList from './TalentProfileEditSkillsList'; 
import TalentProfileEditExpertise from './TalentProfileEditExpertise';

export class TalentProfileEditSkills extends Component {
    state = {
        listRendered: true,
    }

    renderExpertise = () => {
        this.setState({
            listRendered: !this.state.listRendered
        })
    }

    submitExpertise = () => {
        this.props.dispatch({ type: 'UPDATE_TALENT_SKILLS', payload: { skills: this.props.skills.editedSkillsExpertise, id: this.props.match.params.id  }})
    }


    render() {
        let JSXToRender = <span> </span>
        let buttonToRender = <button></button>
        if (this.state.listRendered) {
            JSXToRender = <TalentProfileSkillsList/>;
              buttonToRender =  <button onClick={this.renderExpertise}> Next </button>;
        } else {
            JSXToRender = <TalentProfileEditExpertise/>
            buttonToRender =  <button onClick={this.submitExpertise}> Submit </button>;
        }
        return (
            <div>
                {JSXToRender}
                {buttonToRender}
           
            
            {/* <button onClick={this.renderExpertise}> Next </button> */}

            </div>
        )
    }
}

TalentProfileEditSkills.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => {
    return {
        skills: reduxState.editedTalentSkillsReducer
    }
}

export default connect(reduxStateToProps)(withStyles(styles)(TalentProfileEditSkills)); 
