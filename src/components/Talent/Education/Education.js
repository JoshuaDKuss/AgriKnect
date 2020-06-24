import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { Button } from '@material-ui/core';
import EducationItem from '../EducationItem/EducationItem'; 

export class Education extends Component {

    state = {
        counter: 0,
        educationList: [0]
    }

    //adds a certificate to list 
    addEducation = () => {
        this.setState(previousState => ({
            counter: this.state.counter + 1,
            educationList: [...previousState.educationList, this.state.counter + 1]
        }));
    }

    render() {
        const { classes } = this.props; //need this for Material UI
        return (
            <div>
                <ul>
                    <h3> Add your education history </h3>
                    {this.state.educationList.map((item) => {
                        return (
                            <EducationItem item={item} key={item} />
                        )

                    })}
                </ul>

                <Button onClick={this.addEducation} variant='outlined'> Add another education</Button>
            </div>
        )
    }
}

Education.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(Education)); 

