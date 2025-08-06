import React, { useState } from 'react';
import './header.scss';

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="header container">
            <div className="header__column">LOGO</div>

            <nav className="header__nav">
                <a href="#about" className="header__link">About</a>
                <a href="#features" className="header__link">Features</a>
                <a href="#price" className="header__link">Tariffs</a>
                <a href="#table" className="header__link">Trade view</a>
                <a href="#contact" className="header__link">Contacts</a>
            </nav>

            <div className="header__column header__account">
                <a href="#" className="header__button button">Open trading account</a>
            </div>

            <button
                className={`header__burger${open ? ' header__burger--open' : ''}`}
                onClick={() => setOpen(!open)}
                aria-label="Menu"
            >
                <span/>
                <span/>
                <span/>
            </button>

            {/* Мобильное меню */}
            <div className={`header__mobile${open ? ' header__mobile--open' : ''}`}>
                {/*<button className="header__mobile-close" onClick={() => setOpen(false)} aria-label="Close">×</button>*/}
                <a href="#about" className="header__link" onClick={() => setOpen(false)}>About</a>
                <a href="#features" className="header__link" onClick={() => setOpen(false)}>Features</a>
                <a href="#price" className="header__link" onClick={() => setOpen(false)}>Tariffs</a>
                <a href="#table" className="header__link" onClick={() => setOpen(false)}>Trade view</a>
                <a href="#contact" className="header__link" onClick={() => setOpen(false)}>Contacts</a>
                <a href="#" className="header__button button" onClick={() => setOpen(false)}>Open trading account</a>
            </div>
        </header>
    );
}
