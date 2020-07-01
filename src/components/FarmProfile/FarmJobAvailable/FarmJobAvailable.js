import React, { Component } from 'react'
import { connect } from "react-redux";
import moment from "moment";
import {Button} from '@material-ui/core';
import Modal from 'react-modal';
import FarmJobsAvailableItem from '../FarmJobAvailableItem/FarmJobAvailableItem'

// Modal.setAppElement('#root')

export class FarmJobsAvailable extends Component {
    deleteJob= () =>{
        console.log('Show me job id',this.props.job.id)
        if(this.props.reduxState.user.id === this.props.job.user_id) {
            console.log('in farmJobAvailable', this.props.job.user_id)
            this.props.dispatch({type: 'DELETE_JOB', payload: {job: this.props.job.id, userID: this.props.reduxState.user.id}})
        }
    }
    state = {
        show: false
    }

    showModal = (e) => {
        this.setState({
            show: !this.state.sow
        })
    }
    closeModal = (e) => {
        this.setState({
            show: this.state.sow
        })
    }

    render() {
        
        return (
            <div className={'farmJobItem'}>
                <li>
               
                {this.props.job.title} {moment(this.props.job.start_date).format("MM Do YYYY")} ${this.props.job.payment_amount} {this.props.job.payment_period} &nbsp;
                <Button variant="outlined" onClick={this.showModal}>View</Button>
                <Button variant="outlined" onClick={this.deleteJob}>Delete</Button>
                </li>
                <Modal isOpen={this.state.show} className={"jobModal"}>
                    <p>Job Title:  {this.props.job.title}</p>
                    <p>Farm Name: {this.props.job.farm_name}</p>
                     <p>Location: {this.props.job.city},  <span>{this.props.job.state}</span></p>
                    <p className={"modalStartDate"}>Farm Type:  {this.props.job.type} <span>Start Date: {moment(this.props.job.start_date).format("MMM DD, YYYY")}</span> <span>Pay: ${this.props.job.payment_amount}/{this.props.job.payment_period}</span></p>
                    <h3>Description:</h3>
                    <p>{this.props.job.description}</p>
                    <Button variant="outlined" onClick={this.closeModal}>Close</Button>
                </Modal>
            </div>
        )
    }
    
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(FarmJobsAvailable);