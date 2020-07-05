import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 
import JobEquipmentItem from '../JobEquipmentItem/JobEquipmentItem'; 

export class JobEquipment extends Component {
    render() {
        const { classes } = this.props; //need this for Material UI
        return (
           <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes={{ title: classes.title }} title="What equipment does the job require?" />

                <CardContent  >
               
                   
                    
                        {this.props.proficiencies.equipment.map((item) => {
                            return (
                                <JobEquipmentItem item={item} key={item.id} />
                            )

                        })}
                  

                </CardContent>
             </Card >

         ) }
    }

JobEquipment.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    proficiencies: state.talentForm.proficiencies,
});

export default connect(mapStateToProps)(withStyles(styles)(JobEquipment)); 
