import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 
import BrandsItem from '../BrandsItem/BrandsItem'; 

export class Brands extends Component {
    


    render() {
        const { classes } = this.props;
        return (
            <div>
                <h3> What brands do you have experience with?  </h3>

                {this.props.proficiencies.brands.map((item) => {
                    return (
                        <BrandsItem item={item} key={item.id} />
                    )

                })}

                {/* <Button variant='contained' color={this.state.johnDeereColor} onClick={(event) => this.addOrDeleteEquipment(event, 'John Deere', 'johnDeereColor')}> John Deere </Button>
                <Button variant='contained' color={this.state.caseIhColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Case IH', 'caseIhColor')}> Case IH</Button>
                <Button variant='contained' color={this.state.newHollandColor} onClick={(event) => this.addOrDeleteEquipment(event, 'New Holland', 'newHollandColor')}> New Holland </Button>
                <Button variant='contained' color={this.state.caterpillarColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Caterpillar', 'caterpillarColor')}> Caterpillar </Button>
                <Button variant='contained' color={this.state.masseyColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Massey Fergueson', 'masseyColor')}> Massey Fergueson </Button>
                <Button variant='contained' color={this.state.claasColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Claas', 'claasColor')}> Claas </Button>
                <Button variant='contained' color={this.state.kubotaColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Kubota', 'kubotaColor')}> Kubota</Button>
                <Button variant='contained' color={this.state.allisChalmersColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Allis Chalmers', 'allisChalmersColor')}> Allis Chalmers </Button> */}


            </div>
        )
    }
}

Brands.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    proficiencies: state.talentForm.proficiencies,
});

export default connect(mapStateToProps)(withStyles(styles)(Brands)); 
