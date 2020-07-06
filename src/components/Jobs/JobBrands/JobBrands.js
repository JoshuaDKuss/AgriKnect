import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardHeader, CardContent, Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 
import JobBrandsItem from '../JobBrandsItem/JobBrandsItem'; 

export class JobBrands extends Component {
    render() {
        const { classes } = this.props; //need this for Material UI
        return (
            <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes={{ title: classes.title }} title="What brands does the job require?"  />

                <CardContent >
               
                    <Grid container spacing={2} >
                        {this.props.proficiencies.brands.map((item) => {
                            return (
                                <JobBrandsItem item={item} key={item.id} />
                            )

                        })}
               
                        </Grid>
                    </CardContent  >
                    </Card>

         ) }
    }

JobBrands.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    proficiencies: state.talentForm.proficiencies,
});

export default connect(mapStateToProps)(withStyles(styles)(JobBrands)); 