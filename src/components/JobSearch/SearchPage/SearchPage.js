import React, {Component} from 'react';
import {connect} from 'react-redux';
import ResultItem from '../ResultItem/ResultItem';

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
                {this.props.searchResults.map((result) => {
                    return (
                        <ResultItem 
                            city={result.city}
                            endDate={result.end_date}
                            farmName={result.farm_name}
                            paymentAmount={result.payment_amount}
                            paymentPeriod={result.payment_period}
                            startDate={result.start_date}
                            state={result.state}
                            title={result.title}
                            type={result.type}
                        />
                    ) 
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    searchResults: state.jobSearch,
  });

export default connect(mapStateToProps)(SearchPage);