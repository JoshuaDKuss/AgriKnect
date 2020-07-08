import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import { Button, Grid, Card, CardContent, CardHeader, CardActions } from '@material-ui/core';
import EditTalentEmploymentItem from './EditTalentEmploymentItem';
import EditTalentEmploymentItemServer from './EditTalentEmploymentItemServer'; 



export class EditTalentEmployment extends Component {


    state = {
        counter: -1,
        employmentList: []

    }

    submitEditedEmployment = () => {
        this.props.dispatch({ type: 'UPDATE_EMPLOYMENT', payload: {employment: this.props.employment, id: this.props.user.id}, history: this.props.history })
        // this.props.dispatch({ type: 'DELETE_ALL_EDUCATION' })
        // this.props.history.push(`/talentProfile/${this.props.reduxState.user.id}`);
    }

    //adds education to list 
    addEmployment = () => {
        this.setState(previousState => ({
            counter: this.state.counter - 1,
            employmentList: [...previousState.employmentList, this.state.counter - 1]
        }));
    }


    render() {
        const { classes } = this.props; //need this for Material UI

        return (
            <Grid container direction="row" alignItems="top" spacing={2}>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <Card >
                        <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes={{ title: classes.title }} title="Add Your Employment Experiences" />

                        <CardContent  >
                <ul>
                 
                    {this.props.employment.map((item) => {
                        return (
                            <EditTalentEmploymentItemServer item={item} key={item.id} />
                        )

                    })}

                    {this.state.employmentList.map((item) => {
                        return (
                            <EditTalentEmploymentItem item={item} key={item.counter} />
                        )

                    })}
                </ul>
                 </CardContent  >
                    <CardActions style={{ justifyContent: 'center' }}>

                <Button onClick={this.addEmployment} variant='outlined'> Add additional employment</Button>
                <Button onClick={this.submitEditedEmployment} variant="outlined"> Submit </Button>
                    </CardActions>
                    </Card>
                    </Grid>
                    </Grid>


        )
    }
}

EditTalentEmployment.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    employment: state.editedTalentEmployment,
    user: state.user
});

export default connect(mapStateToProps)(withStyles(styles)(EditTalentEmployment)); 