import React, { Component } from 'react'
import { connect } from "react-redux";
import TalentProficiencyCat from './TalentProficiencyCat'
import TalentEquipment from './TalentEquipment'
import TalentCertification from './TalentCertification'
import TalentEducation from './TalentEducation'
import TalentEmployment from './TalentEmployment'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../Styles/styles';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import profilePhoto from '../TalentProfile/farmPhoto.jpeg'

import './talent.css'

export class TalentProfile extends Component {
    state = {
        editAbout: false,
        editSkills: false,
        editEquipment: false,
        editCertifications: false,
        editEducation: false,
        editEmployment: false,
        profileRendered: true,
        editSkillsRendered: false,
        editEquipmentRendered: false,
    }

    componentDidMount() {
        console.log('this is params.id', this.props.match.params.id, this.props.reduxState.user.id);
        this.props.dispatch({ type: "FETCH_TALENT", payload: this.props.match.params.id });
    }

    editSkills = () => {
        this.props.history.push(`/talentProfile/editSkills/${this.props.reduxState.user.id}`);
        console.log(this.props.reduxState.user.id)
    }

    editEquipment = () => {
        this.props.history.push(`/talentProfile/editEquipment/${this.props.reduxState.user.id}`);
    }

    editCertifications = () => {
        this.props.history.push(`/talentProfile/editCertificate/${this.props.reduxState.user.id}`);
        console.log(this.props.reduxState.user.id)
    }

    editEducation = () => {
        this.props.history.push(`/talentProfile/editEducation/${this.props.reduxState.user.id}`);
        console.log(this.props.reduxState.user.id)
    }

    editEmployment = () => {
        this.props.history.push(`/talentProfile/editEmployment/${this.props.reduxState.user.id}`);
        console.log(this.props.reduxState.user.id)
    }

    renderEditButtons = () => {
        this.setState({
            editAbout: !this.state.editAbout,
            editSkills: !this.state.editSkills,
            editEquipment: !this.state.editEquipment,
            editCertifications: !this.state.editCertifications,
            editEducation: !this.state.editEducation,
            editEmployment: !this.state.editEducation,
        })
        console.log(this.state)
    }

    render() {
        let editButtonControl = <span> </span>
        if (this.props.reduxState.user.id == this.props.match.params.id) {
            editButtonControl = <Button size="small" variant="outlined" onClick={this.renderEditButtons}> Edit Profile </Button>
        }
        const { classes } = this.props;
        let JSXRendered = <span> </span>
        let editSkills = <span> </span>
        if (this.state.editSkills) {
            editSkills = (
                <EditIcon onClick={this.editSkills} />
            )
        }
        let editEquipment = <span> </span>
        if (this.state.editEquipment) {
            editEquipment = <EditIcon onClick={this.editEquipment} />
        }
        let editCertifications = <span> </span>
        if (this.state.editCertifications) {
            editCertifications = <EditIcon onClick={this.editCertifications} />
        }
        let editEducation = <span> </span>
        if (this.state.editEducation) {
            editEducation = <EditIcon onClick={this.editEducation} />
        }
        let editEmployment = <span> </span>
        if (this.state.editEmployment) {
            editEmployment = <EditIcon onClick={this.editEmployment} />
        }
        //array for each category
        const talentSkills = this.props.reduxState.talentProficiencyReducer
        const generalAgriculture = [];
        const precisionFarming = [];
        const Maintenance = [];
        const Trucking = [];
        const Equipment = [];
        const Brand = [];

        //Looping through the talentProficiencyReducer and pushing it to its respective array in the above. 
        for (let i = 0; i < talentSkills.length; i++) {
            if (talentSkills[i].proficiency_category === "General Agriculture") {
                generalAgriculture.push(talentSkills[i])
            } else if (talentSkills[i].proficiency_category === "Precision Farming Technology") {
                precisionFarming.push(talentSkills[i])
            } else if (talentSkills[i].proficiency_category === "Maintenance and Mechanics") {
                Maintenance.push(talentSkills[i])
            } else if (talentSkills[i].proficiency_category === "Equipment") {
                Equipment.push(talentSkills[i])
            } else if (talentSkills[i].proficiency_category === "Brand") {
                Brand.push(talentSkills[i])
            } else if (talentSkills[i].proficiency_category === "Trucking") {
                Trucking.push(talentSkills[i])
            }
        }
        return (
            <div>
                
                {this.props.reduxState.talentProfileReducer.map((talent) => {
                    return (
                       
                        <>
                            <div className={'talentAbout'}>
                                <Card className={classes.card}>
                                    <Grid spacing={1}>
                                        <Grid>
                                    <div>
                                        <img alt="avatar" className={"avatarImg"} src={profilePhoto} />
                                    </div>
                                    </Grid>
                                    
                                        <Grid item xs={2}>
                                        <div>
                                        <Typography className={"MuiTypography--heading"} variant={"h5"}>
                                            <p className={"talentAboutName"}><span>{talent.first_name}</span> <span>{talent.last_name}</span></p>
                                            <Typography className={"MuiTypography--subheading"}>{talent.city}, {talent.state}</Typography>
                                        </Typography>
                                    
                                        </div>
                                        </Grid>
                                   
                                    </Grid>
            
                                    <Grid item xs ={8}>
                                    <div>
                                        
                                        <Typography className={"MuiTypography--heading"} variant={"h5"}>
                                            About
                                            <Typography className={"MuiTypography--subheading"}>
                                            <p>{talent.bio}</p>
                                        </Typography>
                                    </Typography>                                                                         
                                    </div>
                                    </Grid>
                                    
                                    <Grid item xs={0}>
                                    <Button className={"aboutEdit"}>
                                        {editButtonControl}
                                    </Button>
                                    </Grid>
                                </Card>
                            </div>
                           
            
                            <div className={"talentExperienceSection"}>
                                <Card className={classes.card}>
                                    <div className={"talentExpHeader"}>
                                        <h3 className={"headerColor"}>Industry Experience & Skills</h3>
                                        <span>{editSkills}</span>
                                    </div>
                                    <hr></hr>
                                    <div className={'talentExperience'}>
                                        <div>
                                        <Typography className={"MuiTypography--subheading"} variant={'h6'}>
                                            General Agriculture
                                            </Typography>
                                            {generalAgriculture.map((skills) => {
                                                return (
                                                    <TalentProficiencyCat skills={skills.proficiency_name} key={skills.id} history={this.props.history} />
                                                )
                                            })}

                                        </div>
                                        <div>
                                        <Typography className={"MuiTypography--subheading"} variant={'h6'}>
                                            Precision Farming Technology
                                            </Typography>
                                            {precisionFarming.map((skills) => {
                                                return (
                                                    <TalentProficiencyCat skills={skills.proficiency_name} key={skills.id} history={this.props.history} />
                                                )
                                            })}

                                        </div>
                                        <div>
                                            <Typography className={"MuiTypography--subheading"} variant={'h6'}>
                                            Maintenance
                                            </Typography>
                                            {Maintenance.map((skills) => {
                                                return (
                                                    <TalentProficiencyCat skills={skills.proficiency_name} key={skills.id} history={this.props.history} />
                                                )
                                            })}

                                        </div>
                                        <div>
                                            <Typography className={"MuiTypography--subheading"} variant={'h6'}>
                                            Trucking
                                            </Typography>
                                            {Trucking.map((skills) => {
                                                return (

                                                    <TalentProficiencyCat skills={skills.proficiency_name} key={skills.id} history={this.props.history} />
                                                )
                                            })}

                                        </div>

                                    </div>
                                </Card>
                            </div>
                            <div className={"talentEquipmentSection"}>
                                <Card className={classes.card}>
                                    <div className={"equipmentHeader"}>
                                        <h3 className={"headerColor"}>Equipment & Brand Knowledge</h3>
                                        <span>{editEquipment}</span>
                                    </div>
                                    <hr></hr>
                                    <div className={'talentEquipment'}>
                                        <div>
                                        <Typography className={"MuiTypography--subheading"} variant={'h6'}>
                                            Equipment
                                            </Typography>
                                            {Equipment.map((skills) => {
                                                return (

                                                    <TalentEquipment skills={skills.proficiency_name} key={skills.id} history={this.props.history} />
                                                )
                                            })}
                                        </div>
                                        <div>
                                        <Typography className={"MuiTypography--subheading"} variant={'h6'}>
                                            Brands
                                            </Typography>
                                            {Brand.map((skills) => {
                                                return (

                                                    <TalentEquipment skills={skills.proficiency_name} key={skills.id} history={this.props.history} />
                                                )
                                            })}
                                        </div>

                                    </div>
                                </Card>
                            </div>
                            <div className={"talentCertificationSection"}>
                                <Card className={classes.card}>
                                    <div className={"certsHeader"}>
                                        <h3 className={"headerColor"}>Certifications</h3>
                                        <span>{editCertifications}</span>
                                    </div>
                                    <div>
                                        <hr></hr>
                                        <div className={'talentCertification'}>
                                            {this.props.reduxState.talentProficiencyCert.map((cert) => {
                                                return (

                                                    <TalentCertification cert={cert} key={cert.id} history={this.props.history} />

                                                )
                                            })}
                                        </div>

                                    </div>
                                </Card>
                            </div>
                            <div className={'talentEducation'}>
                                <Card className={classes.card}>
                                    <div>
                                        <div className={"educationHeader"}>
                                            <h3 className={"headerColor"}>Education</h3>
                                            <span>{editEducation}</span>
                                        </div>
                                        <hr></hr>
                                        {this.props.reduxState.talentEducationReducer.map((education) => {
                                            return (
                                                <TalentEducation education={education} key={education.id} history={this.props.history} />
                                            )
                                        })}
                                    </div>
                                </Card>
                            </div>
                            <div className={"employmentSection"}>
                                <Card className={classes.card}>
                                    <div className={"employmentHeader"}>
                                        <h3 className={"headerColor"}>Employment</h3>
                                        <span>{editEmployment}</span>
                                    </div>
                                    <hr></hr>
                                    <div className={'talentEmployment'}>
                                        <div>

                                            {this.props.reduxState.talentEmploymentReducer.map((employment) => {
                                                return (
                                                    <TalentEmployment employment={employment} key={employment.id} history={this.props.history} />
                                                )
                                            })}
                                        </div>

                                    </div>
                                </Card>
                            </div>
                        </>
                    )
                })}


            </div>
        )
    }
}

TalentProfile.propTypes = { classes: PropTypes.object.isRequired };

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(withStyles(styles)(TalentProfile));
