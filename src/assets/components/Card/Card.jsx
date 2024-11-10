import './Card.css'
import pImage from '../Img/p.png';

const Card = () => {
    return (
      <div className='basic'>
         <div className='mains'>

            <div className='absolute1'>
              <img src={pImage} height={678} width={949} alt="Description"/>        
            </div>

            <div className='relative1'>
              
                 <div className='titeh'>
                    <h1>About The Quick<br/>
                      Shop this is H2</h1>
                  </div>

                  <div className='para'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet </p>
                  </div>
                  
                  <div className='card'>
                    <h3>Learn more about Shop</h3>
                  </div> 

            </div>
         </div>
      </div>
     
    );
};

export default Card;
