import React, { Component } from 'react'
import { connect } from "react-redux";
import TalentProficiencyCat from './TalentProficiencyCat'
import TalentEquipment from './TalentEquipment'
import TalentCertification from './TalentCertification'
import TalentEducation from './TalentEducation'
import TalentEmployment from './TalentEmployment'
import { Link } from 'react-router-dom'; 
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
        console.log('this is params.id', this.props.match.params.id);
        this.props.dispatch({ type: "FETCH_TALENT", payload: this.props.match.params.id });
    }

    editSkills = () => {

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
        let JSXRendered = <span> </span>
        // let editAbout = <span> </span>
        // if(this.state.editAbout) {
        //     editAbout = <button> Edit </button>
        // }
        let editSkills = <span> </span>
        if (this.state.editSkills) {
            editSkills = <Link to='/talentProfile/editSkills/:id' >  <button onClick={this.editSkills}> Edit </button> </Link> 
        }
        let editEquipment = <span> </span>
        if (this.state.editEquipment) {
            editEquipment = <button> Edit </button>
        }
        let editCertifications = <span> </span>
        if (this.state.editCertifications) {
            editCertifications = <button> Edit </button>
        }
        let editEducation = <span> </span>
        if (this.state.editEducation) {
            editEducation = <button> Edit </button>
        }
        let editEmployment = <span> </span>
        if (this.state.editEmployment) {
            editEmployment = <button> Edit </button>
        }
        const talentSkills = this.props.reduxState.talentProficiencyReducer
        const generalAgriculture = [];
        const precisionFarming = [];
        const Maintenance = [];
        const Equipment = [];
        const Brand = [];
        console.log('in render', generalAgriculture, precisionFarming, Maintenance)
        console.log('in talent profile page', this.props.reduxState.talentProfileReducer[0]);
        for (let i = 0; i < talentSkills.length; i++) {
            if (talentSkills[i].proficiency_category === "General Agriculture") {
                generalAgriculture.push(talentSkills[i])
            } else if (talentSkills[i].proficiency_category === "Precision Farming Technology") {
                precisionFarming.push(talentSkills[i])
            } else if (talentSkills[i].proficiency_category === "Maintenance") {
                Maintenance.push(talentSkills[i])
            } else if (talentSkills[i].proficiency_category === "Equipment") {
                Equipment.push(talentSkills[i])
            } else if (talentSkills[i].proficiency_category === "Brand") {
                Brand.push(talentSkills[i])
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
                                <div>
                                    <span>{talent.first_name}</span> <span>{talent.last_name}</span>
                                    <p>{talent.city}</p>
                                    <p>{talent.state}</p>
                                </div>
                                <div>
                                    <span>About</span>
                                    <p>{talent.bio}</p>
                                </div>
                                <button onClick={this.renderEditButtons}> Edit </button>
                            </div>

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

                                {editSkills}

                            </div>
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
                                {editEquipment}
                            </div>
                            <div className={'talentCertification'}>
                                <div>
                                    <h3>Certifications</h3>
                                    {this.props.reduxState.talentProficiencyCert.map((cert) => {
                                        return (

                                            <TalentCertification cert={cert} key={cert.id} history={this.props.history} />

                                        )
                                    })}
                                </div>
                                {editCertifications}
                            </div>
                            <div className={'talentEducation'}>
                                <div>
                                    <h3>Education</h3>
                                    {this.props.reduxState.talentEducationReducer.map((education) => {
                                        return (
                                            <TalentEducation education={education} key={education.id} history={this.props.history} />
                                        )
                                    })}
                                </div>
                                {editEducation}
                            </div>
                            <div className={'talentEmployment'}>
                                <div>
                                    <h3>Employment</h3>
                                {this.props.reduxState.talentEmploymentReducer.map((employment) => {
                                        return (
                                            <TalentEmployment employment={employment} key={employment.id} history={this.props.history} />
                                        )
                                    })}
                                </div>
                                {editEmployment}
                            </div>
                    
                        </>
                    )
                })}


            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(TalentProfile);