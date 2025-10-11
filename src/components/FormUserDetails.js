import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, TextField, Button } from '@mui/material'

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

  render() {
    const { values } = this.props;
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Enter User Details</Typography>
                </Toolbar>
            </AppBar>
            <TextField
              label="First Name"
              value={values.firstName}
              onChange={this.props.handleChange('firstName')}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              value={values.lastName}
              onChange={this.props.handleChange('lastName')}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              value={values.email}
              onChange={this.props.handleChange('email')}
              fullWidth
              margin="normal"
            />
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

export default FormUserDetails
