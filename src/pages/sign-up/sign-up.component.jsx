import React from 'react';
import {TextField} from '@material-ui/core';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './sign-up.styles.css'

export default function SignUp() {
    const [form, setForm] = React.useState({
        "full-name": "",
        "username": "",
        "password" :"",
        "confirm-password": ""
    })
    const [showPassword, setShowPassword]  = React.useState(true);
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault();
        if(form.username.includes(" ")) {
            alert("Username cannot have spaces");
        }
        else if(form["password"] !== form["confirm-password"]) {
            alert("Passwords do not match");
            setForm(prevState => ({
                ...prevState,
                password: "",
                "confirm-password": ""
            }))
        }
        else {
            axios.post(`${process.env.REACT_APP_API}/api/user/register`, {
                "full-name": form["full-name"],
                "username": form.username,
                "password": form.password,
            })
            .then((response) => {
                setForm({
                    "full-name": "",
                    "username": "",
                    "password" :"",
                    "confirm-password": ""
                });
                history.push('/');
            })
            .catch(err => alert(err.response.data))
        }
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
            <h1 className="sign-up-in-title">Create a New Account</h1>
            <form onSubmit={handleSubmit}>
                <TextField onChange={handleChange} value={form["full-name"]} autoComplete="off" name="full-name" required label="Full Name" className="input" variant="outlined" size="small"/><br/><br/>
                <TextField onChange={handleChange} value={form["username"]} autoComplete="off" name="username" required label="Username" className="input" variant="outlined" size="small"/><br/><br/>
                <TextField onChange={handleChange} value={form["password"]} autoComplete="off" name="password" required type={showPassword?"password":null} label="Password" className="input" variant="outlined" size="small"/><br/><br/>
                <TextField onChange={handleChange} value={form["confirm-password"]} autoComplete="off" name="confirm-password" required type={showPassword?"password":null} label="Confirm Password" className="input" variant="outlined" size="small"/><br/><br/>
                <input type="checkbox" onClick={() => setShowPassword(!showPassword)}/> Show Password<br/><br/><br/>
                <button type="submit" className="button sign-up-in-button">Sign Up</button>
            </form>
        </div>
    )
}