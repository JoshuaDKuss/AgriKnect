import React, { Component } from 'react';
import { Button, Card, CardHeader, CardContent, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 
import BrandsItem from '../BrandsItem/BrandsItem'; 

export class Brands extends Component {
    


    render() {
        const { classes } = this.props;
        return (
             <Card >
                <CardHeader style={{ backgroundColor: "#B4C6CE" }} classes={{ title: classes.title }} title="What brands do you have experience with?" />

                    <CardContent  >
           
                
                    <Grid container spacing={2} >
                {this.props.proficiencies.brands.map((item) => {
                    return (
                        <BrandsItem item={item} key={item.id} />
                    )

                })}
                    </Grid>

                {/* <Button variant='contained' color={this.state.johnDeereColor} onClick={(event) => this.addOrDeleteEquipment(event, 'John Deere', 'johnDeereColor')}> John Deere </Button>
                <Button variant='contained' color={this.state.caseIhColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Case IH', 'caseIhColor')}> Case IH</Button>
                <Button variant='contained' color={this.state.newHollandColor} onClick={(event) => this.addOrDeleteEquipment(event, 'New Holland', 'newHollandColor')}> New Holland </Button>
                <Button variant='contained' color={this.state.caterpillarColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Caterpillar', 'caterpillarColor')}> Caterpillar </Button>
                <Button variant='contained' color={this.state.masseyColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Massey Fergueson', 'masseyColor')}> Massey Fergueson </Button>
                <Button variant='contained' color={this.state.claasColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Claas', 'claasColor')}> Claas </Button>
                <Button variant='contained' color={this.state.kubotaColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Kubota', 'kubotaColor')}> Kubota</Button>
                <Button variant='contained' color={this.state.allisChalmersColor} onClick={(event) => this.addOrDeleteEquipment(event, 'Allis Chalmers', 'allisChalmersColor')}> Allis Chalmers </Button> */}


                </CardContent>
            </Card>
        )
    }
}

Brands.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    proficiencies: state.talentForm.proficiencies,
});

export default connect(mapStateToProps)(withStyles(styles)(Brands)); 
