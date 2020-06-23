import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from '../../Styles/styles';
import { Button, TextField, Typography } from '@material-ui/core';

export class CertificationsItem extends Component {
    render() {
        const { classes } = this.props; //need this for Material UI
        return (
            <div>
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

                   




                </div>
            </div>
        )
    }
}

CertificationsItem.propTypes = { classes: PropTypes.object.isRequired };

export default connect()(withStyles(styles)(CertificationsItem)); 
