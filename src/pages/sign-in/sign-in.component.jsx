import React from 'react';
import {TextField} from '@material-ui/core';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

export default function SignIn() {
    const [form, setForm] = React.useState({
        "username": "",
        "password" :""
    })
    const [showPassword, setShowPassword]  = React.useState(true);
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API}/api/user/login`, {
            "username": form.username,
            "password": form.password,
        })
        .then((response) => {
            setForm({
                "username": "",
                "password" :""
            });
            history.push('/');
        })
        .catch(err => alert(err.response.data))
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    return (
        <div className="sign-up">
            <h1 className="sign-up-in-title">Sign in with an existing account</h1>
            <form onSubmit={handleSubmit}>
                <TextField onChange={handleChange} value={form["username"]} autoComplete="off" name="username" required label="Username" className="input" variant="outlined" size="small"/><br/><br/>
                <TextField onChange={handleChange} value={form["password"]} autoComplete="off" name="password" required type={showPassword?"password":null} label="Password" className="input" variant="outlined" size="small"/><br/><br/>
                <input name="show-password" type="checkbox" onClick={() => setShowPassword(!showPassword)}/> <label for="show-password">Show Password</label><br/><br/><br/>
                <button type="submit" className="button sign-up-in-button">Sign In</button>
            </form>
        </div>
    )
}
