import './Header.css'
import pin from './Icon.png'
const Header = () => {
    return (
        <div className='container_h'>
            <div className='boxx'>
               
            </div>
            <div className='boxx1'>
                <h1>Welcome To Grand Shop</h1>
                <h2>A single line to motto text</h2>
            </div>
            <div className='button'>
                Main CTA 1 <img src={pin} />
            </div>
        </div>
    );
};

export default Header;