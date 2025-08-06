import phone from './phone.svg';
import mail from './mail.svg';
import './footer.scss'

export default function Footer() {
    return <footer className="footer container">
        <div className="footer__column" data-aos="fade-up">
            <div className="footer__logo">
               Logo
            </div>

            <div className="footer__contact-mobile">
                <div className="footer__contact-title">Our contact:</div>

                <div className="footer__contact-item">
                    <img src={phone} alt=""/> aaa@gmail.com
                </div>
                <div className="footer__contact-item">
                    <img src={mail} alt=""/> +380 444 444 44
                </div>
            </div>

            <div className="footer__nav" data-aos="fade-up">
                <a href="#about" className="footer__link">About Us</a>
                <a href="#price" className="footer__link">Price</a>
                <a href="#info" className="footer__link">Information</a>
                <a href="#contactBlock" className="footer__link">Support</a>
                <a href="#contactBlock" className="footer__link">Contact Us</a>
            </div>
        </div>

        <div className="footer__column" data-aos="fade-up">
<p>Trade Responsibly: Trading financial instruments carry a high level of risk and may not be suitable for all investors. Please ensure that you understand the risks involved as you may lose all your invested capital. Past performance of trading instruments is not a reliable indicator of future performance. Please read our ‘Risk Disclosure Notice’. <br/> <br/>
    Company number 12780933 <br/> <br/>
    Registered office address: Devonshire House Off Ax, 582 Honeypot Lane, Stanmore, United Kingdom, England, HA7 1JS</p>

            <div className="footer__contact">

                <div className="footer__contact-title">Our contact:</div>

                <div className="footer__contact-item">
                    <img src={phone} alt=""/> aaa@gmail.com
                </div>
                <div className="footer__contact-item">
                    <img src={mail} alt=""/> +380 444 444 44
                </div>

            </div>
        </div>

        <div className="footer__column">
            © 2023-2024. All rights reserved.
        </div>
    </footer>
}