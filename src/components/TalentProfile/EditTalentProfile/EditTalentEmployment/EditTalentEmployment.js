import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import { Button } from '@material-ui/core';
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
        console.log(this.state)
    }


    render() {
        const { classes } = this.props; //need this for Material UI

        return (
            <div>
                <ul>
                    <h3> Add your employment experience </h3>
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

                <Button onClick={this.addEmployment} variant='outlined'> Add another license/certificate</Button>
                <Button onClick={this.submitEditedEmployment} variant="outlined"> Submit </Button>


            </div>

        )
    }
}

EditTalentEmployment.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    employment: state.editedTalentEmployment,
    user: state.user
});

export default connect(mapStateToProps)(withStyles(styles)(EditTalentEmployment)); 