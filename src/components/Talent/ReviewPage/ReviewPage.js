import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ReviewPage extends Component {
    sendToServer = () => {
        this.props.dispatch({ type: 'SEND_TALENT_FORM', payload: this.props.talentForm })
    }

    render() {
        return (
            <div>
                <button onClick= {this.sendToServer}> Send SAGA </button>
            </div>
        ) 
    }
}

const reduxStateToProps = (reduxState) => {
    return {
        talentForm: reduxState.talentForm,
        
    }
}

export default connect(reduxStateToProps)(ReviewPage); 
