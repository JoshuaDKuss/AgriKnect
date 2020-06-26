import React, { Component } from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
export class TalentEmployment extends Component {

    
    render() {
        // console.log('in profile item', this.props.talent.first_name)
        return (
            <div>
                <div className={'talentEmploymentItem'}>
                    <span>{this.props.employment.employer_name}</span> 
                    <span>{this.props.employment.start_date}</span>
                    - <span>{this.props.employment.end_date}</span>
                    <p>{this.props.employment.title}</p>
                    
                </div>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(TalentEmployment);