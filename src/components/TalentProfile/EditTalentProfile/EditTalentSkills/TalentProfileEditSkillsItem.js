import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';

export class TalentProfileEditSkillsItem extends Component {
    componentDidMount() {
        this.props.initialSkills.map(skill => {
            if (skill.id === this.props.item.id) {
                console.log('PRIMARY', this.props.item.id, skill.id)
                this.setState({
                    ...this.state,
                    color: 'primary'
                })
            }
        })
    }

    state = {
        color: ''
    }

    addOrDeleteSkill = (event, property) => {
        if (this.state.color === '') {


            this.setState({
                ...this.state,
                color: 'primary'
            })
        } else {
            this.setState({
                ...this.state,
                color: ''
            })
        } //end of conditional 
        this.props.dispatch({ type: 'SET_EDITED_SKILLS', payload: property })

    } //end of addOrDelete function 

    render() {
        return (
           <>
                 <Box  display='inline' >
                <Button size='small' variant='contained' color={this.state.color} onClick={(event) => this.addOrDeleteSkill(event, this.props.item)}> {this.props.item.proficiency_name} </Button>
                </Box>
            </>
        )
    }
}



TalentProfileEditSkillsItem.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    initialSkills: state.editedTalentSkillsReducer.editedSkills,
});

export default connect(mapStateToProps)(withStyles(styles)(TalentProfileEditSkillsItem)); 