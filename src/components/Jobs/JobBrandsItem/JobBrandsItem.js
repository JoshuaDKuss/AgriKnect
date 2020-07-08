import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, Box, Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';

export class JobBrandsItem extends Component {
    componentDidMount() {
        this.props.job.brands.map(brand => {
            if (brand === this.props.item) {
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
        this.props.dispatch({ type: 'SET_JOB_BRAND', payload: property })

    } //end of addOrDelete function 

    render() {
        return (
            <Grid item >
                <Button size= 'small' variant='contained' color={this.state.color} onClick={(event) => this.addOrDeleteSkill(event, this.props.item)}> {this.props.item.proficiency_name} </Button>

            </Grid>
        )
    }
}

JobBrandsItem.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => {
    return {
        job: reduxState.jobPostingReducer
    }
}

export default connect(reduxStateToProps)(withStyles(styles)(JobBrandsItem)); 