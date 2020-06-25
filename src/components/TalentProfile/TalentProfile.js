import React, { Component } from 'react'
import { connect } from "react-redux";
import TalentProficiencyCat from './TalentProficiencyCat'
import './talent.css'

export class TalentProfile extends Component {
    componentDidMount() {
        console.log('this is params.id', this.props.match.params.id);
        this.props.dispatch({ type: "FETCH_TALENT", payload: this.props.match.params.id });
    }

    render() {
        const talentSkills = this.props.reduxState.talentProficiencyReducer
        const generalAgriculture = [];
        const precisionFarming = [];
        const Maintenance = [];
        console.log('in render', generalAgriculture, precisionFarming, Maintenance )
        console.log('in talent profile page', this.props.reduxState.talentProfileReducer[0]);
        for(let i =0; i < talentSkills.length; i++){
            if(talentSkills[i].proficiency_category === "General Agriculture"){
                generalAgriculture.push(talentSkills[i])
            }else if(talentSkills[i].proficiency_category === "Precision Farming Technology"){
                precisionFarming.push(talentSkills[i])
            }else if(talentSkills[i].proficiency_category === "Maintenance"){
                Maintenance.push(talentSkills[i])
            }
        }
        return (
            <div>
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