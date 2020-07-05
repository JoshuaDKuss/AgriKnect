import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { Button, Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
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
            <> 
            <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes = {{title: classes.title}} title= "Add Your Employment Experience Here" />
                    
                <CardContent  >
                <ul>
                 
                    {this.state.employmentList.map((item) => {
                        return (
                            <EmploymentItem item={item} key={item} />
                        )

                    })}
                </ul>
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                <Button onClick={this.addEmployment} variant='outlined'> Add another employment</Button>
                </CardActions>
                </Card >
            </>
          
        )
    }
}

Employment.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(Employment)); 