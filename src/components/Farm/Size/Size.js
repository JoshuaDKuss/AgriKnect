import React, { Component } from 'react';
import { connect } from 'react-redux'; 
//import {Button} from '@material-ui/core';

export class Size extends Component {

    handleSizeSelection = (event) => {
        console.log('farm hss');
        //console.log(event.target.value);
        //this.props.dispatch({ type: 'SET_FARM_SIZE', payload: { size: event.target.value} })
    } // end hss

    render() {
        return (
            <div>
                <h3>  What is the size of your farm? </h3> 
                <ul>
                            <li>
                                {/* {size} */}
                                <select 
                                // onChange={this.handleSizeSelection} data-size={size} 
                                > 
                                    <option> </option>
                                    <option value = "1-10 employees"> 1-10 employees </option>
                                    <option value = "10-25 employees"> 10-25 employees </option>
                                    <option value = "25-50 employees"> 25-50 employees </option>
                                    <option value = "50-75 employees"> 50-75 employees </option>
                                    <option value = "75-100 employees"> 75-100 employees</option>
                                    <option value = "100+ employees"> 100+ employees </option>
                                </select>
                            </li>
                </ul>
            </div>
        )
    }
}


// const reduxStateToProps = (reduxState) => {
//     return {
//         size: reduxState.farmForm.size
//     }
// }

// export default connect (reduxStateToProps) (Size); 

export default Size;