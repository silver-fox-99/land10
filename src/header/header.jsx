import React, { useState } from 'react';
import './header.scss';
import logo from '../Footer/logo.png';
import { useTranslation } from 'react-i18next';
import {LanguageSwitcher} from "./language-switcher";

export default function Header() {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <header className="header container">
            <div className="header__column">
                <img className="logo" src={logo} alt="Logo"/>
            </div>

            <nav className="header__nav">
                <a href="#about" className="header__link">{t('header.about')}</a>
                <a href="#features" className="header__link">{t('header.features')}</a>
                <a href="#table" className="header__link">{t('header.tradeView')}</a>
                <a href="#contact" className="header__link">{t('header.contacts')}</a>
            </nav>

            <div className="header__column header__column--last header__account">
                <a href="#" className="header__button button">{t('header.openAccount')}</a>
                <LanguageSwitcher />
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

            <div className={`header__mobile${open ? ' header__mobile--open' : ''}`}>
                <a href="#about" className="header__link" onClick={() => setOpen(false)}>{t('header.about')}</a>
                <a href="#features" className="header__link" onClick={() => setOpen(false)}>{t('header.features')}</a>
                <a href="#table" className="header__link" onClick={() => setOpen(false)}>{t('header.tradeView')}</a>
                <a href="#contact" className="header__link" onClick={() => setOpen(false)}>{t('header.contacts')}</a>
                <a href="#" className="header__button button" onClick={() => setOpen(false)}>{t('header.openAccount')}</a>
                <div style={{ marginTop: 12 }}>
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
}
