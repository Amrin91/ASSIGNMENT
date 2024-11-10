import React from 'react';
import './Event.css';


export const NewsMain = ({kimg,pic}) => (
    
        <div>
            <img src={kimg} className="main-image-event" alt="Main-event" />
           <img src={pic} className="main-image-event" alt="Main-event" />
        </div>
            
       
   
);

export const Addin = ({ date2, title2,para2 }) => (
    <div className="additional-event-item">
        <div>
            <img src={date2} alt="Additional-event" className="additional-event-image" /> 
        </div>
       
        <div className="additional-event-details">
            <div className="event-additional-title">
              <p >{title2}</p>
            </div>
            <div className="event-additional-para">
              <p>{para2}</p>
           </div>
            
        </div>
        <hr />
    </div>
);

const Event = ({ newsMain, addins }) => (
    <div className="events-container">
        <div className="news-title">
            <h2>H2 TITLE ONE LINER</h2>
        </div>
        <div className="fleex-container">
            {/* Main news on the left */}
            <NewsMain
                kimg={newsMain.kimg}
                pic={newsMain.pic}
            />

            {/* Additional news items on the right */}
            <div className="additional-event-container">
                {ninfo.map((addin) => (
                    <Addin
                    key={addin._id}
                        date2={addin.date2}
                        title2={addin.title2}
                        para2={addin.para2}


                    />
                ))}
            </div>
        </div>
        <div className="view-more-btn-container">
            <button className="view-more-btn">View All Notice & Events</button>
        </div>
    </div>
);

export default Event;
