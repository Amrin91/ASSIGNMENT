import React from 'react';
import './Description.css';

function Description({_id,name,image,imgx,imgy,description,layout}) {
  return (
    <>
   
    <div className='maintain'>
     
       <div className={`info-card ${layout === "right" ? "image-right" : "image-left"}`}>

      <div className="text-section">
        <div className="title">
          <span><img src={image}/></span> {name}
        </div>
        <p>{description}</p>
      </div>

      <div className={`fake ${layout==="right"? "image-section0":"image-section1"}`}>
        <img src={imgy} alt={name}/>
      </div>
        <div className={`take ${layout==="right"? "icon-r":"icon-l"}`}>
          <img src={imgx} />
        </div>
        
      
    </div>
    </div>
   
    </>
    
  );
}

export default Description;
