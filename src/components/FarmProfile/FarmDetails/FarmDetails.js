import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
export class FarmDetails extends Component {


    render() {

        return (
            <div className={'farmDetailItem'}>
                <div>
                    <p>Size: {this.props.details.size} employees</p>
                </div>
                <div>
                    <p>Farm Type: {this.props.details.type}</p>
                </div>
            </div>
        )
    }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(FarmDetails);