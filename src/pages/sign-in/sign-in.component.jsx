import React from 'react';
import {TextField} from '@material-ui/core';

export default function SignIn() {
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
            <h1 className="sign-up-in-title">Sign in with an existing account</h1>
            <form onSubmit={handleSubmit}>
                <TextField autoComplete="off" name="username" onChange={handleChange} required label="Username" className="input" variant="outlined" size="small"/><br/><br/>
                <TextField autoComplete="off" name="password" type="password" onChange={handleChange} required label="Password" className="input" variant="outlined" size="small"/><br/><br/>
                <button type="submit" className="button sign-up-in-button">Sign In</button>
            </form>
        </div>
    )
}