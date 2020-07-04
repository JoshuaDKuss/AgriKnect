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
import faker from 'faker';
import './talent.css'

// const styles = muiBaseTheme => ({
//     card: {
//       maxWidth: 700,
//       margin: "auto",
//       transition: "0.3s",
//       boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
//       "&:hover": {
//         boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
//       }
//     }
//     });

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
        // let editAbout = <span> </span>
        // if(this.state.editAbout) {
        //     editAbout = <button> Edit </button>
        // }
        let editSkills = <span> </span>
        if (this.state.editSkills) {
            editSkills = (
                <EditIcon onClick={this.editSkills} />
                //   <Button variant="outlined" onClick={this.editSkills}> Edit </Button> 
            )
        }
        let editEquipment = <span> </span>
        if (this.state.editEquipment) {
            editEquipment = <EditIcon onClick={this.editEquipment} />
            // editEquipment = <Button variant="outlined" onClick={this.editEquipment}> Edit </Button>
        }
        let editCertifications = <span> </span>
        if (this.state.editCertifications) {
            editCertifications = <EditIcon onClick={this.editCertifications} />
            // editCertifications = <Button variant="outlined" onClick={this.editCertifications}> Edit </Button>
        }
        let editEducation = <span> </span>
        if (this.state.editEducation) {
            editEducation = <EditIcon onClick={this.editEducation} />
            // editEducation = <Button variant="outlined" onClick={this.editEducation}> Edit </Button>
        }
        let editEmployment = <span> </span>
        if (this.state.editEmployment) {
            editEmployment = <EditIcon onClick={this.editEmployment} />
            // editEmployment = <Button variant="outlined" onClick={this.editEmployment}> Edit </Button>
        }
        const talentSkills = this.props.reduxState.talentProficiencyReducer
        const generalAgriculture = [];
        const precisionFarming = [];
        const Maintenance = [];
        const Trucking = [];
        const Equipment = [];
        const Brand = [];
        console.log('in render', generalAgriculture, precisionFarming, Maintenance)
        console.log('in talent profile page', this.props.reduxState.talentProfileReducer[0]);
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
                {/* {JSON.stringify(this.props.reduxState.talentEmploymentReducer)} */}
                {/* {JSON.stringify(this.props.reduxState.talentProfileReducer[0])}
                {JSON.stringify(this.props.reduxState.talentProficiencyReducer)} */}
                {/* <h3>{this.props.reduxState.talentProfileReducer.first_name}</h3> */}
                {this.props.reduxState.talentProfileReducer.map((talent) => {
                    return (
                        //   <TalentProfileItem talent={talent} key={talent.id} history={this.props.history}/>

                        <>
                            <div className={'talentAbout'}>
                                <Card className={classes.card}>
                                <div>
                                    <img alt="avatar" className={"avatarImg"} src={faker.image.avatar()} />
                                </div>
                                <div>
                                    <Typography className={"MuiTypography--heading"} variant={"h5"}>
                                   <p><span>{talent.first_name}</span> <span>{talent.last_name}</span></p> 
                                    </Typography>
                                    <Typography className={"MuiTypography--subheading"}>
                                    <p>{talent.city}, {talent.state}</p>
                                    </Typography>
                                   
                                    
                                </div>
                                <div>
                                    <Typography className={"MuiTypography--heading"} variant={"h5"}>
                                    About
                                    </Typography>
                                    <Typography className={"MuiTypography--subheading"}>
                                    <p>{talent.bio}</p>
                                    </Typography>
                                </div>
                                <div className={"aboutEdit"}>
                                    {editButtonControl}
                                    {/* <Button size="small"className={classes.talentProfileButton} variant="outlined" onClick={this.renderEditButtons}> Edit Profile </Button> */}
                                </div>
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
                                        <h3>General Agriculture</h3>
                                        {generalAgriculture.map((skills) => {
                                            return (

                                                <TalentProficiencyCat skills={skills.proficiency_name} key={skills.id} history={this.props.history} />
                                            )
                                        })}

                                    </div>
                                    <div>
                                        <h3>Precision Farming Technology</h3>
                                        {precisionFarming.map((skills) => {
                                            return (

                                                <TalentProficiencyCat skills={skills.proficiency_name} key={skills.id} history={this.props.history} />
                                            )
                                        })}

                                    </div>
                                    <div>
                                        <h3>Maintenance</h3>
                                        {Maintenance.map((skills) => {
                                            return (

                                                <TalentProficiencyCat skills={skills.proficiency_name} key={skills.id} history={this.props.history} />
                                            )
                                        })}

                                    </div>
                                    <div>
                                        <h3>Trucking</h3>
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
                                        <h3>Equipment</h3>
                                        {Equipment.map((skills) => {
                                            return (

                                                <TalentEquipment skills={skills.proficiency_name} key={skills.id} history={this.props.history} />
                                            )
                                        })}
                                    </div>
                                    <div>
                                        <h3>Brands</h3>
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