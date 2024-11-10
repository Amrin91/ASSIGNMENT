import './Cite.css'
import Img from '../Img/p.png'
import Img2 from '../ICON/Button 1.png'

const Cite = () => {
    return (
        <div className='cite'>
  
               <div className='cite0'>
                  <img src={Img} height={860} width={1300}/>
               </div>

               <div className='cite1'>
                    <div className='head1'>
                        <h2>Title of the section<br></br> 
                        text h2</h2>
                    </div>
                   <div className='paragraph0'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet nulla. Quisque non ante quis lorem fermentum auctor sed</p>
                   </div>

                   <div className='cardd'>
                    <h3>Learn more</h3>
                  </div> 
               </div>

               <div className='cite2'>
                    <div className='head2'>
                        <h2>One liner title h2</h2>
                    </div>
                   <div className='paragraph1'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet nulla. Quisque non ante quis lorem fermentum auctor sed</p>
                   </div>
                   <div className='cardd'>
                    <h3>Learn more</h3>
                  </div> 
                   
               </div>
           
           


             
           
           

        </div>
            

    );
};

export default Cite;