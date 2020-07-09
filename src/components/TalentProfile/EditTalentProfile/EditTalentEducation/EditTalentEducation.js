import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import { Button, Grid, Card, CardHeader, CardContent, CardActions} from '@material-ui/core';
import EditTalentEducationItem from './EditTalentEducationItem';
import EditTalentEducationItemServer from './EditTalentEducationItemServer'; 



export class EditTalentCertifications extends Component {


    state = {
        counter: -1,
        educationList: []

    }

    submitEditedEducation = () => {
        this.props.dispatch({ type: 'UPDATE_EDUCATION', payload: {education: this.props.education, id: this.props.user.id}, history: this.props.history })
        // this.props.dispatch({ type: 'DELETE_ALL_EDUCATION' })
        // this.props.history.push(`/talentProfile/${this.props.reduxState.user.id}`);
    }

    //adds education to list 
    addEducation = () => {
        this.setState(previousState => ({
            counter: this.state.counter - 1,
            educationList: [...previousState.educationList, this.state.counter - 1]
        }));
    }


    render() {
        const { classes } = this.props; //need this for Material UI

        return (
            <Grid container direction="row" alignItems="top" spacing={2}>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <Card >
                        <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes={{ title: classes.title }} title="Add Your Educational Experiences" />

                        <CardContent  >
                <ul>
                    {this.props.education.map((item) => {
                        return (
                            <EditTalentEducationItemServer item={item} key={item.id} />
                        )

                    })}

                    {this.state.educationList.map((item) => {
                        return (
                            <EditTalentEducationItem item={item} key={item.counter} />
                        )

                    })}
                </ul>
                    </CardContent  >
                        <CardActions style={{ justifyContent: 'center' }}>

                <Button onClick={this.addEducation} variant='outlined'> Add another license/certificate</Button>
                <Button onClick={this.submitEditedEducation} variant="outlined"> Submit </Button>
                        </CardActions>
                        </Card>
                         </Grid>
                         </Grid>


        

        )
    }
}

EditTalentCertifications.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    education: state.editedTalentEducation,
    user: state.user
});

export default connect(mapStateToProps)(withStyles(styles)(EditTalentCertifications)); 