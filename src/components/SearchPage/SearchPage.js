import React, {Component} from 'react';
import {connect} from 'react-redux';

class SearchPage extends Component {
    state = {
        search: ''
    }

    submitSearch = () => {
        console.log('submitted!')
        this.props.dispatch({
            type: 'FETCH_JOB_SEARCH',
            payload: this.state.search
        })
        this.setState({
            search: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
        console.log(this.state.search)
    }

    render() {
        return (
            <div className="searchBox">
                <h1>search all jobs</h1>
                <div>
                    <input value={this.state.search} onChange={this.handleChange} placeholder="title, keyword, location"></input>
                </div>
                <button onClick={this.submitSearch}>Search</button>
            </div>
        )
    }
}

export default connect()(SearchPage);