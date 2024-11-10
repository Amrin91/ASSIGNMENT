
import ii from './ii.png';
import f2 from './Frame (2).png';
import f3 from './Frame (3).png';
import f4 from './Frame (4).png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-cl'>
            <footer className='main-f'>
                <div className='footer-left'>
                    <div className="logo-and-name">
                        <img src={ii} alt="Shop Logo" className="footer-logo" />
                        <h2 className="shop-name">Shop Name</h2>
                    </div>
                    <div className='contact-info'>
                        <div className="contact-item">
                            <img src={f2} alt="Location" />
                            <span>Shop Location</span>
                        </div>
                        <div className="contact-item">
                            <img src={f3} alt="Phone" />
                            <span>+XX XXX XXX XXXX (Shop Admin)</span>
                        </div>
                        <div className="contact-item">
                            <img src={f4} alt="Email" />
                            <span>info@shop.com</span>
                        </div>
                    </div>
                </div>
                <div className='map-container'>
                <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14610.67548875367!2d90.40233569965774!3d23.723516059016465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b90092bf7c81%3A0x449c218f50c11dd2!2sOffice%20of%20the%20District%20Commissioner%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1728845946020!5m2!1sen!2sbd" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade" 
                    />
                </div>
            </footer>
            <p className='footer-text'>© 2024 Shop. All rights reserved</p>
        </div>
    );
};

export default Footer;
