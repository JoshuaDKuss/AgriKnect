import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';

export class JobSkillsItem extends Component {
    componentDidMount() {
        this.props.job.skills.map(skill => {
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
        this.props.dispatch({ type: 'SET_JOB_SKILLS', payload: property })

    } //end of addOrDelete function 

    render() {
        // const { classes } = this.props; //need this for Material UI
        return (
            <Box  display='inline' >
                <Button size='small' variant='contained' color={this.state.color} onClick={(event) => this.addOrDeleteSkill(event, this.props.item)}> {this.props.item.proficiency_name} </Button>

            </Box>
        )
    }
}



JobSkillsItem.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => {
    return {
        job: reduxState.jobPostingReducer
    }
}

export default connect(reduxStateToProps)(withStyles(styles)(JobSkillsItem)); 