import React, { Component } from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import moment from "moment"; 

export class TalentEmployment extends Component {

    
    render() {
        // console.log('in profile item', this.props.talent.first_name)
        return (
            <div>
                <div className={'talentEmploymentItem'}>
                    <span>{this.props.employment.employer_name}</span> 
                    <span>{moment(this.props.employment.start_date).format(("MMM Do, YYYY"))}</span>
                    - <span>{moment(this.props.employment.end_date).format(("MMM Do, YYYY"))}</span>
                    <p>{this.props.employment.title}</p>
                    
                    
                </div>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(TalentEmployment);