import './Navbar.css'

import di from './Group 1.png'

const sections = [
    { title: 'Section 1', options: ['SUB SECTION', 'SUB SECTION', 'SUB SECTION 3','SUB SECTION']  },
    { title: 'Section 2', options: ['SUB SECTION', 'SUB SECTION', 'SUB SECTION 3','SUB SECTION'] },
    { title: 'Section 3', options: ['SUB SECTION', 'SUB SECTION', 'SUB SECTION 3','SUB SECTION']  },
    { title: '2 SUB DIVS', options: ['SUB SECTION', 'SUB SECTION', 'SUB SECTION 3','SUB SECTION']  },
    { title: 'SECTION 4', options: ['SUB SECTION', 'SUB SECTION', 'SUB SECTION 3','SUB SECTION']},
    { title: 'TWO LINEAR 1', options: ['SUB SECTION', 'SUB SECTION', 'SUB SECTION 3','SUB SECTION']},
    { title: 'TWO LINEAR 1', options:['SUB SECTION', 'SUB SECTION', 'SUB SECTION 3','SUB SECTION'] },
    { title: 'SECTION 5', options: ['SUB SECTION', 'SUB SECTION', 'SUB SECTION 3','SUB SECTION']  },
    { title: 'TWO LINEAR 3', options: ['SUB SECTION', 'SUB SECTION', 'SUB SECTION 3','SUB SECTION']  },
  ];

const Navbar = () => {
    return (
            <div className='main'>
                <div className='logo'>

                 </div>
                 
                 <div className="section-container">
      {sections.map((section, index) => (
        <div key={index} className="dropdown">
          <button className="dropdown-btn">{section.title}</button>
          <div className="dropdown-content">
          {section.options.map((option, idx) => (
              <a href="#" key={idx}>{option}</a>
            ))}
          </div>
        </div>
      ))}
                 </div>
  
   
  
           
            </div> 

    );
};

export default Navbar;