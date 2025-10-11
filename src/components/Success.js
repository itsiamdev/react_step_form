import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

export class Success extends Component {
  render() {
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Success</Typography>
                </Toolbar>
            </AppBar>
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
        </React.Fragment>
    )
  }
}

export default Success