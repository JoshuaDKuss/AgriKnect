import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import TalentProfileSkillsList from './TalentProfileEditSkillsList'; 
import TalentProfileEditExpertise from './TalentProfileEditExpertise';
import {Button, Grid} from '@material-ui/core'

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
        this.props.dispatch({type:'RUN_UPDATE_SKILLS_LOGIC', payload: { skills: this.props.skills.editedSkillsExpertise, id: this.props.user.id }, history: this.props.history })
      
    }


    render() {
        let JSXToRender = <span> </span>
        let buttonToRender = <button></button>
        if (this.state.listRendered) {
            JSXToRender = <TalentProfileSkillsList/>;
              buttonToRender =  <Button  color= 'primary' variant= 'outlined' onClick={this.renderExpertise}> Next </Button>;
        } else {
            JSXToRender = <TalentProfileEditExpertise/>
            buttonToRender =  <Button color= 'primary' onClick={this.submitExpertise}> Submit </Button>;
        }
        return (
            <Grid container direction="row" alignItems="top" spacing={2}>
            <Grid item xs={12}>
                {JSXToRender}
                </Grid>
            <Grid item xs={9}/>
            <Grid item xs={2}>
                {buttonToRender}
            </Grid>
             <Grid item xs={12}/>
           
            

           </Grid>
        )
    }
}

TalentProfileEditSkills.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => {
    return {
        skills: reduxState.editedTalentSkillsReducer,
        user: reduxState.user
    }
}

export default connect(reduxStateToProps)(withStyles(styles)(TalentProfileEditSkills)); 
