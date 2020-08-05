import React, { Component } from 'react'
import { connect } from "react-redux";
import moment from 'moment';

export class TalentCertification extends Component {
    
    render() {
        return (
            <div>
                <div className={'talentCert'}>
                    <p>Name: {this.props.cert.certification_name}</p> 
                    <p>Issued by: {this.props.cert.issuing_company}</p>
                    <p>Expires: {moment(this.props.cert.expiration_date).format(("MMM Do, YYYY"))}</p>
                </div>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(TalentCertification);
