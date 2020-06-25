import React, { Component } from 'react'

export class SkillsItem extends Component {
    state = {
        color: ''
    }

    addOrDeleteSkill = (event, property, stateToChange) => {
        if (this.state[stateToChange] === '') {


            this.setState({
                ...this.state,
                [stateToChange]: 'primary'
            })
        } else {
            this.setState({
                ...this.state,
                [stateToChange]: ''
            })
        } //end of conditional 
        console.log(this.state)
        this.props.dispatch({ type: 'SET_INITIAL_SKILLS', payload: property })

    } //end of addOrDelete function 

    render() {
        return (
            <div>
                <Button variant='contained' color={this.state.color} onClick={(event) => this.addOrDeleteSkill(event, 'color')}> Tillage </Button>
            </div>
        )
    }
}

export default SkillsItem
