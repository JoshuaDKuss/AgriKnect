import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';

export class TalentProfileEditSkillsItem extends Component {
    componentDidMount() {
        this.props.initialSkills.map(skill => {
            if (skill === this.props.item) {
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
        console.log(this.state)
        this.props.dispatch({ type: 'SET_INITIAL_SKILLS', payload: property })

    } //end of addOrDelete function 

    render() {
        return (
            <div>
                <Button variant='contained' color={this.state.color} onClick={(event) => this.addOrDeleteSkill(event, this.props.item)}> {this.props.item.proficiency_name} </Button>

            </div>
        )
    }
}



TalentProfileEditSkillsItem.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    initialSkills: state.talentForm.formData.initialSkills,
});

export default connect(mapStateToProps)(withStyles(styles)(TalentProfileEditSkillsItem)); 