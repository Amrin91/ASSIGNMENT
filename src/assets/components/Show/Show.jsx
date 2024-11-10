import React from 'react';
import './Show.css'
import so from './Gallery Image Rectangle 20.png'

const Show = () => {
    return (
        <>
        <div className='tell'>
             <h2 >H2 TITLE ONE LINER</h2> 
        </div>
        
        <p className='pick'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet nulla. Quisque non ante quis lorem fermentum auctor</p>
        <div className='card-cont'>
            
            <div className='card-contai'>
                   <div className='xi'><img src={so} /> <span className="hover-text">Caption but a really long three liners caption</span> </div>
                   <div className='xi'><img src={so} /> <span className="hover-text">Caption but a really long three liners caption</span> </div>
                   <div className='xi'><img src={so} /> <span className="hover-text">Caption but long two liners caption</span> </div>
            </div>
            <div className='card-contai2'>
                   <div className='xi'><img src={so} /> <span className="hover-text">Caption but a really long three liners caption</span> </div>
                   <div className='xi'><img src={so} /> <span className="hover-text">Caption but a really long three liners caption</span> </div>
                   <div className='xi'><img src={so} /> <span className="hover-text">Caption but long two liners caption</span> </div>
            </div>
            <div className='card-contai'>
                   <div className='xi'><img src={so} /> <span className="hover-text">Caption but a really long three liners caption</span> </div>
                   <div className='xi'><img src={so} /> <span className="hover-text">Caption but a really long three liners caption</span> </div>
                   <div className='xi'><img src={so} /> <span className="hover-text">Caption but long two liners caption</span> </div>
            </div>
            <div className='card-contai4'>
                   <div className='xi'><img src={so} /> <span className="hover-text">Caption but a really long three liners caption</span> </div>
                   <div className='xi'><img src={so} /> <span className="hover-text">Caption but a really long three liners caption</span> </div>
                   <div className='xi'><img src={so} /> <span className="hover-text">Caption but long two liners caption</span> </div>
            </div>
            
            
        </div>
            <div>
              <button className="view-more-btn">See More</button>
           </div>
        </>
        
    );
};

export default Show;