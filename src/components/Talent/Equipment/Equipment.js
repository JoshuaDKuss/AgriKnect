import React, { Component } from 'react'; 
import { Card, CardContent, CardHeader, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 
import EquipmentItem from '../EquipmentItem/EquipmentItem'; 

export class Equipment extends Component {
   

    render() {
        const { classes } = this.props; //need this for Material UI
        return (
            <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes={{ title: classes.title }} title="What equipment have you used?" />

                <CardContent  >
               
                    <Grid container spacing={2} >
                {this.props.proficiencies.equipment.map((item) => {
                    return (
                        <EquipmentItem item={item} key={item.id} />
                    )

                })}
                    </Grid>

              
          </CardContent>
          </Card>
        ) //end return 
    } // end render
} //end class component 

Equipment.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    proficiencies: state.talentForm.proficiencies,
});

export default connect(mapStateToProps)(withStyles(styles)(Equipment)); 