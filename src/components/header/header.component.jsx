import React from 'react';
import './header.styles.css'
import {AppBar, Toolbar, Drawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom';

export default function Header({user, setUser}) {
    const username = user.username;
    const [drawOpen, setDrawOpen] = React.useState(false);

    const handleSignOut = () => {
        localStorage.clear();
        setUser({
            token: "",
            username: ""
        });
    }
    return (
        <AppBar position="fixed">
            <Toolbar>
                <h1 className="main-title">Word Game</h1>
                <p className="sub-title">Build your Vocabulary</p>
                <nav className="navbar">
                    <Link className="nav-link" onClick={() => setDrawOpen(false)} to="/">Learn</Link>
                    <Link className="nav-link" onClick={() => setDrawOpen(false)} to="/sign-in">Sign In</Link>
                    <Link className="nav-link" onClick={() => setDrawOpen(false)} to="/sign-up">Sign Up</Link>
                    <Link className="nav-link" onClick={() => setDrawOpen(false)} to="/dashboard">Dashboard</Link>
                    {username?
                        <Link className="nav-link" style={{marginLeft: "10px"}} onClick={handleSignOut}>Sign Out from 
                        <span style={{fontWeight: "bold"}}> {username}</span></Link>
                        :null}
                </nav>
                <MenuIcon id="menu-icon" onClick={() => setDrawOpen(true)}/>
                <Drawer className="draw" anchor="right" open={drawOpen} onClose={() => setDrawOpen(false)}>
                    <CloseIcon id="close-icon" onClick={() => setDrawOpen(false)}/>
                    <Link className="draw-nav-link" onClick={() => setDrawOpen(false)} to="/">Learn</Link>
                    <Link className="draw-nav-link" onClick={() => setDrawOpen(false)} to="/sign-in">Sign In</Link>
                    <Link className="draw-nav-link" onClick={() => setDrawOpen(false)} to="/sign-up">Sign Up</Link>
                    <Link className="draw-nav-link" onClick={() => setDrawOpen(false)} to="/dashboard">Dashboard</Link>
                </Drawer>
            </Toolbar>
        </AppBar>

    )
}