import React from 'react';
import {TextField} from '@material-ui/core';
import './sign-up.styles.css'

export default function SignUp() {
    const form = {}

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form)
    }
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        form[name] = value
    }

    return (
        <div className="sign-up">
            <h1>Create a New Account</h1>
            <form onSubmit={handleSubmit}>
                <TextField autoComplete="off" name="full-name" onChange={handleChange} required label="Full Name" className="input" variant="outlined" size="small"/><br/><br/>
                <TextField autoComplete="off" name="username" onChange={handleChange} required label="Username" className="input" variant="outlined" size="small"/><br/><br/>
                <TextField autoComplete="off" name="password" type="password" onChange={handleChange} required label="Password" type="password" className="input" variant="outlined" size="small"/><br/><br/>
                <TextField autoComplete="off" name="confirm-password" type="password" onChange={handleChange} required label="Confirm Password" type="password" className="input" variant="outlined" size="small"/><br/><br/><br/><br/>
                <button type="submit" className="button sign-up-in-button">Sign Up</button>
            </form>
        </div>
    )
}