import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Box, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 
import './SkillsItem.css';

export class SkillsItem extends Component {
    componentDidMount(){
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
        this.props.dispatch({ type: 'SET_INITIAL_SKILLS', payload: property })

    } //end of addOrDelete function 

    render() {
        const { classes } = this.props; //need this for cards 

        return (
            <Grid item >

                    <Button className = 'skillButton' size="small"  variant='contained' color={this.state.color} onClick={(event) => this.addOrDeleteSkill(event, this.props.item)}> {this.props.item.proficiency_name} </Button>

            </Grid>
           
        )
    }
}



SkillsItem.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    initialSkills: state.talentForm.formData.initialSkills,
});

export default connect(mapStateToProps)(withStyles(styles)(SkillsItem)); 
