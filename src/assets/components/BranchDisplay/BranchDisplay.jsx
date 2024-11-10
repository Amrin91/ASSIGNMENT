
import './BranchDisplay.css'; // Import your CSS

import y1 from './Frame 112.png'
import y2 from './Frame 113.png'
import y3 from './Frame 114.png'

// Array of branch images and labels
const branches = [
  { id: 1, name: 'Branch 1', image: y1 },
  { id: 3, name: 'Branch 3', image: y3 },
  { id: 2, name: 'Branch 2', image: y2 },
  { id: 4, name: 'Branch 4', image: y3 },
  { id: 5, name: 'Branch 5', image: y1 },
];

const BranchDisplay = () => {
  return (
    <div className="branch-container">
      <div className='Break'>
        <h1>H2 TITLE ONE LINER</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincid</p>
      </div>
      <div className="branch-cards">
        {branches.map((branch, index) => (
          <div 
            key={branch.id} 
            className={`branch-card ${branch.id === 1 || branch.id === 5 ? 'faded' : ''}`}>
               
            <img src={branch.image} alt={branch.name} className="branch-image" />
            
          </div>
          
        ))}
      </div>
      <div className='gene'>
           <button className="view-more-btn">See More</button>
    </div>
    </div>
  );
};

export default BranchDisplay;
