import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import SkillsItem from '../SkillsItem/SkillsItem'; 
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 



export class Skills extends Component {


    render() {
        const { classes } = this.props; //need this for Material UI
        

        return (
            <div>
                <h3> What skills do you have?  </h3>
               <h4> General Agriculture </h4>
              
                <ul>
                    {this.props.proficiencies.generalAgriculture.map((item) => {
                        return (
                            <SkillsItem item={item}  key={item.id} />
                        )

                    })}

                  

                </ul>

                <h4> Precision Farming Technology  </h4>

                {this.props.proficiencies.precisionFarmingTechnology.map((item) => {
                    return (
                        <SkillsItem item={item} key={item.id} />
                    )

                })}

                <h4> Maintenance and Mechanics  </h4>

                {this.props.proficiencies.maintenanceAndMechanics.map((item) => {
                    return (
                        <SkillsItem item={item} key={item.id} />
                    )

                })}

                <h4>Trucking </h4>

                {this.props.proficiencies.trucking.map((item) => {
                    return (
                        <SkillsItem item={item} key={item.id} />
                    )

                })}
                
               
            </div>
        )
    }
}

Skills.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    proficiencies: state.talentForm.proficiencies,
});

export default connect(mapStateToProps)(withStyles(styles)(Skills)); 
