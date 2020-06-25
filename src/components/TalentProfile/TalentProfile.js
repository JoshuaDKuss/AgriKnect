import React, { Component } from 'react'
import { connect } from "react-redux";
import TalentProfileItem from './TalentProfileItem'
export class TalentProfile extends Component {
  //     state ={


  //  }
  componentDidMount() {
    console.log('this is params.id', this.props.match.params.id);
    this.props.dispatch({ type: "FETCH_TALENT", payload: this.props.match.params.id });
  }

  render() {
    console.log('in talent profile page', this.props.reduxState.talentProfileReducer[0]);
    return (
      <div>
        {JSON.stringify(this.props.reduxState.talentProfileReducer[0])}
        {/* <h3>{this.props.reduxState.talentProfileReducer.first_name}</h3> */}
        {this.props.reduxState.talentProfileReducer.map((talent) => {
          return (
            <TalentProfileItem talent={talent} key={talent.id} history={this.props.history} />
          )
        })}

      </div>
    )
  }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(TalentProfile);