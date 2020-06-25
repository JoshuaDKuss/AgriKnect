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
                
                {/* <Button variant= 'contained' color = {this.state.tillageColor} onClick={(event) => this.addOrDeleteSkill(event, 'Tillage', 'tillageColor')}> Tillage </Button>
                <Button variant='contained' color={this.state.plantingColor} onClick={(event) => this.addOrDeleteSkill(event, 'Planting', 'plantingColor')}> Planting </Button>
                <Button variant= 'contained' color = {this.state.harvestingColor} onClick={(event) => this.addOrDeleteSkill(event, 'Harvesting', 'harvestingColor')}> Harvesting </Button>
                <Button variant='contained' color = {this.state.chemicalColor} onClick={(event) => this.addOrDeleteSkill(event, 'Chemical/fertilizer application', 'chemicalColor')}> Chemical/fertilizer application </Button>

                <p>Precision Farming Technology </p>
                <Button variant='contained' color = {this.state.johnDeereColor} onClick={(event) => this.addOrDeleteSkill(event, 'John Deere Autotrac', 'johnDeereColor')}> John Deere Autotrac </Button>
                <Button variant='contained' color = {this.state.caseColor} onClick={(event) => this.addOrDeleteSkill(event, 'Case IH AFS AccuGuide', 'caseColor')}> Case IH AFS AccuGuide </Button>
                <Button variant='contained' color = {this.state.agColor} onClick={(event) => this.addOrDeleteSkill(event, 'Ag Leader Steer Command', 'agColor')}> Ag Leader Steer Command </Button>
                <Button variant='contained' color = {this.state.ravenColor} onClick={(event) => this.addOrDeleteSkill(event, 'Raven Precision Products (RS1, SC1, MD)', 'ravenColor')}> Raven Precision Products (RS1, SC1, MD) </Button>
                <Button variant='contained' color = {this.state.trimbleColor} onClick={(event) => this.addOrDeleteSkill(event, 'Trimble Autopilot', 'trimbleColor')}> Trimble Autopilot </Button>
                <Button variant='contained' color = {this.state.newColor} onClick={(event) => this.addOrDeleteSkill(event, 'New Holland IntelliSteer', 'newColor')}> New Holland IntelliSteer </Button>
                <Button variant='contained' color = {this.state.caterpillarColor} onClick={(event) => this.addOrDeleteSkill(event, 'Caterpillar Auto-GuideTM', 'caterpillarColor')}> Caterpillar Auto-GuideTM </Button>
                <Button variant='contained' color = {this.state.precisionColor} onClick={(event) => this.addOrDeleteSkill(event, 'Precision 20/20', 'precisionColor')}> Precision 20/20 </Button>

                <p>Maintenance and Mechanics </p>
                <Button variant='contained' color = {this.state.constructionColor} onClick={(event) => this.addOrDeleteSkill(event, 'Construction', 'constructionColor')}> Construction </Button>
                <Button variant='contained' color = {this.state.autoColor} onClick={(event) => this.addOrDeleteSkill(event, 'Auto/machinery repairs', 'autoColor')}> Auto/machinery repairs </Button>
                <Button variant='contained' color = {this.state.plumbingColor} onClick={(event) => this.addOrDeleteSkill(event, 'Plumbing', 'plumbingColor')}> Plumbing </Button>
                <Button variant='contained' color = {this.state.electricalColor} onClick={(event) => this.addOrDeleteSkill(event, 'Electrical', 'electricalColor')}> Electrical </Button>
                
                <p>Trucking </p>
                <Button variant='contained' color = {this.state.semiColor} onClick={(event) => this.addOrDeleteSkill(event, 'Semi-truck', 'semiColor')}> Semi-truck </Button>
                <Button variant='contained' color={this.state.straightColor} onClick={(event) => this.addOrDeleteSkill(event, 'Straight truck', 'straightColor')}> Straight truck</Button> */}
            </div>
        )
    }
}

Skills.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    proficiencies: state.talentForm.proficiencies,
});

export default connect(mapStateToProps)(withStyles(styles)(Skills)); 
