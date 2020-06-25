import React, { Component } from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
export class TalentProfileItem extends Component {
    render() {
        // console.log('in profile item', this.props.talent.first_name)
        return (
            <div>
                <div className={'talentBio'}>
                    <span>{this.props.talent.first_name}</span> 
                    {/* <span>{this.props.talent.last_name}</span> <span>About</span>
                    <p>{this.props.talent.bio}</p>
                    <p>{this.props.talent.city}</p>
                    <p>{this.props.talent.state}</p> */}
                </div>
                <div>
                    <h3>Industry Experience & Skills</h3>
                </div>
                <div>
                    <h3>Equipment & Brand Knowledge</h3>
                </div>
                <div>
                    <h3>Certification</h3>
                        <p>{this.props.talent.certification_name}</p>
                </div>
                <div>
                    <h3>Education</h3>
                   
                </div>
                <div>
                    <h3>Employment</h3>
                </div>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(TalentProfileItem);


