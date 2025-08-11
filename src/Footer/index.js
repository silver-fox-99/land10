import phone from './phone.svg';
import mail from './mail.svg';
import logo from './logo.png';
import './footer.scss';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer container">
            <div className="footer__column" data-aos="fade-up">
                <div className="footer__logo">
                    <img className="logo" src={logo} alt="Logo" />
                </div>

                <div className="footer__contact-mobile">
                    <div className="footer__contact-title">{t('footer.contactTitle')}</div>

                    <div className="footer__contact-item">
                        <img src={phone} alt="" />  clients@freedomail.info
                    </div>

                </div>

                <div className="footer__nav" data-aos="fade-up">
                    <a href="#about" className="footer__link">{t('footer.nav.about')}</a>
                    <a href="#price" className="footer__link">{t('footer.nav.price')}</a>
                    <a href="#info" className="footer__link">{t('footer.nav.info')}</a>
                    <a href="#contactBlock" className="footer__link">{t('footer.nav.support')}</a>
                    <a href="#contactBlock" className="footer__link">{t('footer.nav.contact')}</a>
                </div>
            </div>

            <div className="footer__column" data-aos="fade-up">
                <p>{t('footer.disclaimer')}</p>

                <div className="footer__contact">
                    <div className="footer__contact-title">{t('footer.contactTitle')}</div>

                    <div className="footer__contact-item">
                        <img src={mail} alt="" /> clients@freedomail.info
                    </div>
                </div>
            </div>

            <div className="footer__column">© 2023-2025. {t('footer.rights')}</div>
        </footer>
    );
}
