import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { Button } from '@material-ui/core';
import EmploymentItem from '../EmploymentItem/EmploymentItem'; 

export class Employment extends Component {
    state = {
        counter: 0,
        employmentList: [0]
    }

    //adds a certificate to list 
    addEmployment = () => {
        this.setState(previousState => ({
            counter: this.state.counter + 1,
            employmentList: [...previousState.employmentList, this.state.counter + 1]
        }));
    }

    render() {
        const { classes } = this.props; //need this for Material UI
        return (
            <div>
                <ul>
                    <h3> Add your education history </h3>
                    {this.state.employmentList.map((item) => {
                        return (
                            <EmploymentItem item={item} key={item} />
                        )

                    })}
                </ul>

                <Button onClick={this.addEmployment} variant='outlined'> Add another employment</Button>
            </div>
        )
    }
}

Employment.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(Employment)); 