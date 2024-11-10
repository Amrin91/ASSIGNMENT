import './App.css'
import Blue from './assets/components/Blue/Blue'
import Board from './assets/components/Board/Board'
import BranchDisplay from './assets/components/BranchDisplay/BranchDisplay'
import Card from './assets/components/Card/Card'
import { MainNews } from './assets/components/CD/News'
import { AdditionalNews } from './assets/components/CD/News'
import Cite from './assets/components/Cite/Cite'
import Combine from './assets/components/Combine/Combine'
import Description from './assets/components/Description/Description'
import { info, ncard } from './assets/components/Element/element'
import { ninfo } from './assets/components/Element/element'
import { Addin, NewsMain } from './assets/components/Event/Event'
import Footer from './assets/components/Footer/Footer'
import New from './assets/components/New/New'
import Show from './assets/components/Show/Show'
function App() {
 

  return (
    <>
     <Combine />
     <Card />
     <New />
     <Cite />
     <Board />
     
    <>
     <div className='Break'>
        <h1>H2 TITLE ONE LINER</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincid</p>
      </div>
     {info.map((card) => (
        <Description
          key={card._id}
          name={card.name}
          description={card.description}
          buttonText={card.buttonText}
          image={card.image}
          imgx={card.imgx}
          imgy={card.imgy}
          layout={card.layout}
        />
      ))}

      <div>
           <button className="view-more-btn">Learn More</button>
    </div>

     
    </>
    <>
     <BranchDisplay />
    </>
    <>
   

    <div className='jjj'>

               <div className="title">
                  <h2>H2 TITLE ONE LINER</h2>
               </div>
    
            <div className="flex-container">
                {/* Main news on the left */}
                <div>
                  <MainNews
                    date={ncard[0].date}
                    title={ncard[0].title}
                    imageX={ncard[0].imageX}
                    description={ncard[0].description}
                  />
                </div>

                <div className="additional-news-container">
                    {ninfo.map((ninfo) => (
                        <AdditionalNews
                            key={ninfo._id}
                            date={ninfo.date}
                            image={ninfo.image}
                        />
                    ))}
                </div>
            </div>

    </div>

            <div>
               <button className="view-more-btn">View All Notice & Events</button>
            </div>
    
    </>

    <>
    <div className='jjjj'>

<div className="title">
   <h2>H2 TITLE ONE LINER</h2>
</div>

<div className="fllex-container">
 
        <div>
            <NewsMain
                kimg={ncard[0].kimg}
                pic={ncard[0].pic}
            />
        </div>

         <div className="additional-news-container">
           {ninfo.map((ninfo) => (
           <Addin
               key={ninfo._id}
               date2={ninfo.date2}
               title2={ninfo.title2}
               para2={ninfo.para2}
           />
               ))}
         </div>
</div>

    </div>

    <div>
           <button className="view-more-btn">View All Notice & Events</button>
    </div>

    
    
    
    </>
    
    <Show />
           
    <Footer />
     
    </>
  )
}

export default App
