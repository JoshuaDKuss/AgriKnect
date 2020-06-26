import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 
import JobEquipmentItem from '../JobEquipmentItem/JobEquipmentItem'; 

export class JobEquipment extends Component {
    render() {
        const { classes } = this.props; //need this for Material UI
        return (
            <div>
               
                    <h3> What equipment does the job require? </h3>
                  

                    <ul>
                        {this.props.proficiencies.equipment.map((item) => {
                            return (
                                <JobEquipmentItem item={item} key={item.id} />
                            )

                        })}
                    </ul>

                </div>

         ) }
    }

JobEquipment.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    proficiencies: state.talentForm.proficiencies,
});

export default connect(mapStateToProps)(withStyles(styles)(JobEquipment)); 
