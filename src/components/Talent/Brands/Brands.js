import React, { Component } from 'react';
import { Button, Card, CardHeader, CardContent, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 
import BrandsItem from '../BrandsItem/BrandsItem'; 

export class Brands extends Component {
    


    render() {
        const { classes } = this.props;
        return (
             <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes={{ title: classes.title }} title="What brands do you have experience with?" />

                    <CardContent  >
           
                
                    <Grid container spacing={2} >
                {this.props.proficiencies.brands.map((item) => {
                    return (
                        <BrandsItem item={item} key={item.id} />
                    )

                })}
                    </Grid>


                </CardContent>
            </Card>
        )
    }
}

Brands.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    proficiencies: state.talentForm.proficiencies,
});

export default connect(mapStateToProps)(withStyles(styles)(Brands)); 
