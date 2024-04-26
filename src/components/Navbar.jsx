import React from 'react';
import './Navbar.css';

const Navbar = ({setShow}) => {
    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById('aboutpg');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Sneaky</h1>
            </div>
            <div className="navbar-links">
                <ul>
                    <li className="nav-item" onClick={()=>setShow(true)}><a href="#home">Home</a></li>
                    <li className="nav-item"><a href="#about" onClick={handleScrollToAbout}>About</a></li>
                    <li className="nav-item"><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="cart-button">
                <button onClick={()=>setShow(false)}>Cart</button>
            </div>
        </nav>
    );
};

export default Navbar;
