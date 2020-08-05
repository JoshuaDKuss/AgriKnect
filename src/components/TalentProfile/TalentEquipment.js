import React, { Component } from 'react'
import { connect } from "react-redux";
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
