import React, { Component } from 'react'
import { connect } from "react-redux";
import moment from "moment" 
export class FarmJobsAvailable extends Component {


    render() {

        return (
            <div className={'farmJobItem'}>
                <li>
               
                {this.props.job.title} {moment(this.props.job.start_date).format("MM Do YYYY")} ${this.props.job.payment_amount} {this.props.job.payment_period}
                </li>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(FarmJobsAvailable);