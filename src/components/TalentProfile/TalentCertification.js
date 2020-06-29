import React, { Component } from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import moment from 'moment';

export class TalentCertification extends Component {

    
    render() {
        // console.log('in profile item', this.props.talent.first_name)
        return (
            <div>
                <div className={'talentCert'}>
                    <p>Name: {this.props.cert.certification_name}</p> 
                    <p>Issued by: {this.props.cert.issuing_company}</p>
                    <p>Expires: {moment(this.props.cert.expiration_date).format(("MMM Do, YYYY"))}</p>
                    {/* <p>{this.props.skills.proficiency_name}</p>  */}
                </div>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(TalentCertification);