import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { Button , Card, CardContent, Typography} from '@material-ui/core';
import EducationItem from '../EducationItem/EducationItem'; 
import './Education.css'; 

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
            <Card>
                <CardContent>
                <Typography className="header"> Add your education here </Typography>
                <ul>
                    {this.state.educationList.map((item) => {
                        return (
                            <EducationItem item={item} key={item} />
                        )

                    })}
                </ul>
                </CardContent>
                <Button onClick={this.addEducation} variant='outlined'> Add another education</Button>
            </Card>
        )
    }
}

Education.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(Education)); 

