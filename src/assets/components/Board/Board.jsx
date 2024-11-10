
import './Board.css'
import cin from './arrow-right.png'

const Board = () => {
    return (
        <div className='board'>

            <div className='b-new-container1'>
               <h2>YELLO TITLE H2</h2>
            </div>
          
            <div className='b-new-container'>

            </div>
            <div className='b-new-container3'>
               <h2>H3 TITLE</h2>
            </div>
            <div className='FACT'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet nulla. Quisque non ante quis lorem fermentum auctor sed sed ligula. Aenean turpis sapien, efficitur quis placerat at, facilisis bibendum erat. Aliquam quis mattis leo, sed egestas augue. Phasellus vitae vulputate nisi, vitae eleifend enim. Aenean rutrum tristique purus,</p>
            </div>
            <div className='new-container3'>
               <h3>Read More <img src={cin}/></h3>
            </div>
   
            
        </div>
    );
};

export default Board;