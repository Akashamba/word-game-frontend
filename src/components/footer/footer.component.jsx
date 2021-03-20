import React from 'react';
import {Link} from 'react-router-dom';
import './footer.styles.css'

export default function Footer() {
    return (
        <footer>
            <nav className="footer-nav">
                <Link className="footer-nav-link" to="/">Learn</Link> |
                <Link className="footer-nav-link" to="/sign-in">Sign In</Link> |
                <Link className="footer-nav-link" to="/sign-up">Sign Up</Link> |
                <Link className="footer-nav-link" to="/dashboard">Dashboard</Link> 
            </nav>
            <p>&copy; Team Laroi</p>
        </footer>
    )
}