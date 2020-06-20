import React, { Component } from 'react'

export class Skills extends Component {
    state = {
        skills: []
    }

    addOrDeleteSkill = (event, property) => {
        //if state does not include this value, add it 
        if (this.state.skills.indexOf(property) < 0) {
            this.setState({
                ...this.state,
                skills: [...this.state.skills, property]
            }) //end of setState
            console.log(this.state.skills)
        } //end of if 
        //if state does include value, remove it 
        else {
            for(let i = 0; i < this.state.skills.length; i++) {
                if(this.state.skills[i] === property) {
                    this.state.skills.splice(i, 1)
                } //end of conditional 
            } //end of for loop 
            
        } //end of else 
        
    } //end of addOrDelete function 

    render() {
        return (
            <div>
                <h3> What skills do you have?  </h3>
                <p>General Agriculture </p>
                <button onClick={(event) => this.addOrDeleteSkill(event, 'Tillage')}> Tillage </button>
                <button onClick={(event) => this.addOrDeleteSkill(event, 'Planting')}> Planting </button>
                <button onClick={(event) => this.addOrDeleteSkill(event, 'Harvesting')}> Harvesting </button>
                <button onClick={(event) => this.addOrDeleteSkill(event, 'Chemical/fertilizer application')}> Chemical/fertilizer application </button>

                <p>Precision Farming Technology </p>
                
                <p>Maintenance and Mechanics </p>

                <p>Trucking </p>
            </div>
        )
    }
}

export default Skills
