import React, { Component } from 'react'
import { connect } from "react-redux";
import moment from 'moment';

export class TalentEducation extends Component {
    
    render() {
        return (
            <div>
                <div>
                    <span>{this.props.education.institution_name}</span> 
                    <span>{moment(this.props.education.start_date).format(("MMM Do, YYYY"))}</span> 
                     - <span>{moment(this.props.education.end_date).format(("MMM Do, YYYY"))}</span> 
                    <p>{this.props.education.degree}</p>
                </div>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(TalentEducation);
