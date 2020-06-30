import React, { Component } from 'react'
import { connect } from "react-redux";
import moment from "moment" 
export class FarmJobsAvailable extends Component {
    deleteJob= () =>{
        console.log('Show me job id',this.props.job.id)
        if(this.props.reduxState.user.id === this.props.job.user_id) {
            console.log('in farmJobAvailable', this.props.job.user_id)
            this.props.dispatch({type: 'DELETE_JOB', payload: this.props.job.id})
        }
    }

    render() {

        return (
            <div className={'farmJobItem'}>
                <li>
               
                {this.props.job.title} {moment(this.props.job.start_date).format("MM Do YYYY")} ${this.props.job.payment_amount} {this.props.job.payment_period}
                <button onClick={this.deleteJob}>Delete</button>
                </li>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(FarmJobsAvailable);