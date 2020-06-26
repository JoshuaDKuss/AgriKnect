import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 
import JobBrandsItem from '../JobBrandsItem/JobBrandsItem'; 

export class JobBrands extends Component {
    render() {
        const { classes } = this.props; //need this for Material UI
        return (
            <div>
               
                    <h3> What brands does the job require? </h3>
                  

                    <ul>
                        {this.props.proficiencies.brands.map((item) => {
                            return (
                                <JobBrandsItem item={item} key={item.id} />
                            )

                        })}
                    </ul>

                </div>

         ) }
    }

JobBrands.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    proficiencies: state.talentForm.proficiencies,
});

export default connect(mapStateToProps)(withStyles(styles)(JobBrands)); 