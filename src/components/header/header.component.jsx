import React from 'react';
import './header.styles.css'
import {AppBar, Toolbar, Drawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom';

export default function Header() {
    const [open, setOpen] = React.useState(false);
    return (
        <AppBar position="fixed">
            <Toolbar>
                <h1 className="main-title">Word Game</h1>
                <p className="sub-title">Build your Vocabulary</p>
                <nav className="navbar">
                    <Link className="nav-link" onClick={() => setOpen(false)} to="/">Learn</Link>
                    <Link className="nav-link" onClick={() => setOpen(false)} to="/sign-in">Sign In</Link>
                    <Link className="nav-link" onClick={() => setOpen(false)} to="/sign-up">Sign Up</Link>
                    <Link className="nav-link" onClick={() => setOpen(false)} to="/dashboard">Dashboard</Link>
                </nav>
                <MenuIcon id="menu-icon" onClick={() => setOpen(true)}/>
                <Drawer className="draw" anchor="right" open={open} onClose={() => setOpen(false)}>
                    <CloseIcon id="close-icon" onClick={() => setOpen(false)}/>
                    <Link className="draw-nav-link" onClick={() => setOpen(false)} to="/">Learn</Link>
                    <Link className="draw-nav-link" onClick={() => setOpen(false)} to="/sign-in">Sign In</Link>
                    <Link className="draw-nav-link" onClick={() => setOpen(false)} to="/sign-up">Sign Up</Link>
                    <Link className="draw-nav-link" onClick={() => setOpen(false)} to="/dashboard">Dashboard</Link>
                </Drawer>
            </Toolbar>
        </AppBar>

    )
}