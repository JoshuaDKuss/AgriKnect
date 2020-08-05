import React, { Component } from 'react'
import { connect } from "react-redux";
export class TalentProfileItem extends Component {
    
    render() {
        return (
            <div>
                <div className={'talentBio'}>
                    <p>{this.props.skills}</p> 
                </div>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(TalentProfileItem);


