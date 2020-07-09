import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../../Styles/styles';
import { Button, Card, CardContent, CardHeader, CardActions, Grid } from '@material-ui/core';
import EditTalentCertificationsItem from './EditTalentCertificationItem';
import EditTalentCertificationsItemServer from './EditTalentCertificationItemServer';



export class EditTalentCertifications extends Component {


    state = {
        counter: -1,
        certificateList: []

    }

    submitEditedCertificates = () => {
        this.props.dispatch({ type: 'UPDATE_CERTIFICATIONS', payload:{certification: this.props.certifications, id: this.props.user.id}, history: this.props.history })
    }

    //adds a certificate to list 
    addCertificate = () => {
        this.setState(previousState => ({
            counter: this.state.counter - 1,
            certificateList: [...previousState.certificateList, this.state.counter - 1]
        }));
    }


    render() {
        const { classes } = this.props; //need this for Material UI

        return (
            <Grid container direction="row" alignItems="top" spacing={2}>
                    <Grid item xs={4} />
                    <Grid item xs={4}>
            <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes={{ title: classes.title }} title="Add Your Certifications Here" />

                <CardContent  >
                <ul>

                    {this.props.certifications.map((item) => {
                        return (
                            <EditTalentCertificationsItemServer item={item} key={item.id} />
                        )

                    })}

                    {this.state.certificateList.map((item) => {
                        return (
                            <EditTalentCertificationsItem item={item} key={item.counter} />
                        )

                    })}
                </ul>
                </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button onClick={this.addCertificate} variant='outlined'> Add another license/certificate</Button>
                        <Button onClick={this.submitEditedCertificates} variant="outlined"> Submit </Button> 
                    </CardActions>

            </Card>
            </Grid>
            </Grid>

            


           

        )
    }
}

EditTalentCertifications.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    certifications: state.editedTalentCertification,
    user: state.user
});

export default connect(mapStateToProps)(withStyles(styles)(EditTalentCertifications)); 