import React, { Component } from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
export class TalentEquipment extends Component {

    
    render() {

        return (
            <div className={'talentEquipmentItem'}>
                <div>
                    <p>{this.props.skills}</p> 
                </div>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(TalentEquipment);