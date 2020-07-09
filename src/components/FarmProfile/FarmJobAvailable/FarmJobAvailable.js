import React, { Component } from 'react'
import { connect } from "react-redux";
import moment from "moment";
import {Button} from '@material-ui/core';
import Modal from 'react-modal';
import './FarmJobAvailable.css';
import { withRouter } from 'react-router-dom';
// import FarmJobsAvailableItem from '../FarmJobAvailableItem/FarmJobAvailableItem'

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
        let deleteButtonControl = <span> </span>
        if (this.props.reduxState.user.id == this.props.match.params.id) {
            deleteButtonControl = <Button variant="outlined" onClick={this.deleteJob}>Delete</Button>
            // editButtonControl = <Button variant="outlined" onClick={(event) => this.editFarmBio(event)}>edit farm</Button>
        } 
        
        return (
            <>
             {/* </div> */}
            {/* <div className={'farmJobItem'}> */}
                {/* <li> */}
                <div className={"centerIt"}>
                <table>
                <tbody>
                <tr>
                    <th>Title:</th>
                    <th>Dates:</th>
                    <th>Pay: </th>
                    <th> </th>
                </tr>
                <tr>
                    <td>{this.props.job.title}</td>
                    <td>{moment(this.props.job.start_date).format("MMM Do, YYYY")}</td>
                    <td>${this.props.job.payment_amount} &nbsp;{this.props.job.payment_period}</td>
                    <td><Button variant="outlined" onClick={this.showModal}>View</Button>
                    {deleteButtonControl} </td>
                    {/* <Button variant="outlined" onClick={this.deleteJob}>Delete</Button></td> */}
                </tr>
                

                <Modal isOpen={this.state.show} className={"jobModal"}>
                    <p>Job Title:  {this.props.job.title}</p>
                    <p>Farm Name: {this.props.job.farm_name}</p>
                     <p>Location: {this.props.job.city},  <span>{this.props.job.state}</span></p>
                    <p className={"modalStartDate"}>Farm Type:  {this.props.job.type} <br/>
                    <span>Start Date: {moment(this.props.job.start_date).format("MMM Do, YYYY")}</span><br/> 
                    <span>Pay: ${this.props.job.payment_amount}/{this.props.job.payment_period}</span></p>
                    <h3>Description:</h3>
                    <p>{this.props.job.description}</p>
                    <p>{this.props.job.brand}</p>
                    <Button variant="outlined" onClick={this.closeModal} className={"closeBtn"}>Close</Button>
                </Modal>
                </tbody>
                </table>
            {/* </div> */}
            </div>
            </>
        )
    }
    
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(withRouter(FarmJobsAvailable));