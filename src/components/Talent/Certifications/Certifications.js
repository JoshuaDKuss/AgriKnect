import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 
import { Button, Card, CardHeader, CardContent, CardActions} from '@material-ui/core';
import CertificationsItem from '../CertificationsItem/CertificationsItem'; 


export class Certifications extends Component {

    state = {
        counter: 0,
        certificateList : [0]
       
    }

    //adds a certificate to list 
    addCertificate = () => {
        this.setState(previousState => ({
            counter: this.state.counter +1, 
            certificateList: [...previousState.certificateList, this.state.counter +1]
        }));
    }

    render() {
        const { classes } = this.props; //need this for Material UI

        return (
          <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes = {{title: classes.title}} title= "Add Your Certifications Here" />
                    
                <CardContent  >
                <ul>
                    {this.state.certificateList.map((item) => {
                        return (
                            <CertificationsItem item={item}  />
                        )

                    })}
                </ul>
                </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
            <Button onClick={this.addCertificate} variant='outlined'> Add another license/certificate</Button>
            </CardActions>

            </Card>
            

        )
    }
}

Certifications.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    certifications: state.talentForm.formData.certification,
});

export default connect(mapStateToProps)(withStyles(styles)(Certifications)); 