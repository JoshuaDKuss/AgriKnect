import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { Button , Card, CardContent, Typography, CardHeader, CardActions} from '@material-ui/core';
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
            <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes = {{title: classes.title}} title= "Add Your Education Here" />
                    
                <CardContent  >
                <ul>
                    {this.state.educationList.map((item) => {
                        return (
                            <EducationItem item={item} key={item} />
                        )

                    })}
                </ul>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                    <Button color="primary" onClick={this.addEducation} variant='outlined'  > Add more education</Button>
                </CardActions> 
            </Card>
        )
    }
}

Education.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(Education)); 

