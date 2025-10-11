import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, TextField, Button } from '@mui/material'

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

  render() {
    const { values } = this.props;
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Enter Personal Details</Typography>
                </Toolbar>
            </AppBar>
            <TextField
              label="Occupation"
              value={values.occupation}
              onChange={this.props.handleChange('occupation')}
              fullWidth
              margin="normal"
            />
            <TextField
              label="City"
              value={values.city}
              onChange={this.props.handleChange('city')}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Bio"
              value={values.bio}
              onChange={this.props.handleChange('bio')}
              fullWidth
              margin="normal"
            />
            <Button
              variant="outlined"
              style={styles.button}
              onClick={this.back}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={styles.button}
              onClick={this.continue}
            >
              Continue
            </Button>
        </React.Fragment>
    )
  }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails
