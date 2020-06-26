import React, { Component } from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
export class TalentEducation extends Component {

    
    render() {
        // console.log('in profile item', this.props.talent.first_name)
        return (
            <div>
                <div>
                    <span>{this.props.education.institution_name}</span> 
                    <span>{this.props.education.start_date}</span>
                    <span>{this.props.education.end_date}</span> 
                    <p>{this.props.education.degree}</p>
                    
                </div>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(TalentEducation);