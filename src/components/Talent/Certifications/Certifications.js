import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles'; 
import { Button, TextField, Typography } from '@material-ui/core';


export class Certifications extends Component {
    render() {
        return (
            <div>
               
                <h3> Add any certifications or licenses you have </h3>
               
              
                <Typography>License or certificate: </Typography> 
                <TextField id="standard-basic" label="Standard" /> 

                <Typography>Issuing Company: </Typography>
                <TextField id="standard-basic" label="Standard" />   

                <div>
                <TextField
                    id="date"
                    label="Issue Date"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                    <TextField
                        id="date"
                        label="Expiration Date"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

                <Button onClick={(event) => this.handleClick(event, 'property')}  variant = 'outlined'> Add another license/certificate</Button>
               
                         

                
            </div>
        )
    }
}

Certifications.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(Certifications)); 