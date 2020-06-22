import React, { Component } from 'react'; 
import {Button} from '@material-ui/core';
import NameLocation from '../NameLocation/NameLocation'; 
import Size from '../NameLocation/NameLocation';
import Type from '../Type/Type'; 
import FarmBio from '../FarmBio/FarmBio'; 



export class FarmForm extends Component {
    state = {
        farmFormCounter: 0,
        generalFarmInfo: []
    }

    //changes this.state.farmFormCounter so that the correct part of the form is rendered to the page
    changeFarmFormCounter = (event, property) => {
        if(property === 'add') {
            this.setState({
                ...this.state,
                farmFormCounter: this.state.farmFormCounter + 1
            })
            console.log(this.state.farmFormCounter)
        } else {
            this.setState({
                ...this.state,
                farmFormCounter: this.state.farmFormCounter - 1
            })
            console.log(this.state.farmFormCounter)
        }
    }

    render() {
        let farmFormToShow = <span> </span>
        if (this.state.farmFormCounter === 0) {
            farmFormToShow = <NameLocation />
        } else if (this.state.farmFormCounter === 1) {
            farmFormToShow = <Size />
        } else if (this.state.farmFormCounter === 2) {
            farmFormToShow = <Type />
        } else if (this.state.farmFormCounter === 3) {
            farmFormToShow = <FarmBio />
        } 
        return (
            <div>
               <h1> Farm Form </h1> 
        
            {farmFormToShow}

            <Button onClick={(event) => this.changeFarmFormCounter(event, 'subtract')}> Back </Button> 
            <Button onClick={(event) => this.changeFarmFormCounter(event, 'add')}> Next </Button>
            </div>
        )
    }
}

export default FarmForm; 
