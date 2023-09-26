import { useState, useEffect } from 'react'
import imgComputer from './assets/desktopComputerDalle.png'
import imgVectors from './assets/vectors_byDalle.png'
import './App.css'

const dictWDescription = [
  { 
    "cat": "ia",
    "description": "One of the branches of development that interests me the most is Artificial Intelligence. Currently I have done some projects, one in a course that I took in 2022 (Saturdays Ai machine learning) and another that I did in the data science laboratory where I am an intern (Signa Lab)."
  },
  { 
    "cat": "web",
    "description": "In my opinion, the web is the greatest means of communication and I am passionate about knowing that a tool you create can be used all over the world. I've created simple tools with streamlit, all the way up to tools that depend on a server. As an example I show an embedding analysis tool, but in client-server applications a stack that I like is the popular stack MERN."
  },
  { 
    "cat": "frontend",
    "description": "I have worked with react js, tailwind css, css, bootstrap, streamlit and other tools to make user interfaces. I find it interesting how we can make using a tool more enjoyable when its interface is user-friendly. I'm also interested in how we can make a website more efficient."
  },
  { 
    "cat": "backend",
    "description": "I also like server-side development, as an example of my work I show the backend repository that I made to save the projects that I show here in the portfolio. Regarding stacks, I have used node js, express and as a database I have used mongodb and SQL lite."
  },
  { 
    "cat": "other",
    "description": "Additional projects that I find interesting to mention."
  }
]

function App() {
 const [jsonDatax, setJsonData] = useState(null);
 const [loading, setIsLoading] = useState(true)
 const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

 useEffect(() => {
   const jsonUrl = 'https://backend-portfolio-lemon.vercel.app/projects';

   fetch(jsonUrl)
     .then((response) => response.json())
     .then((data) => {
       setJsonData(data);
       setIsLoading(false);
     })
     .catch((error) => {
       console.error('Error al cargar el JSON:', error);
     });
 }, []);
  

  return (
    <>
    {loading == false ? 
      <div className="home-container">
        <div className='padding'>
          <img
          alt="Img vectors made by Dall-e, Open AI"
          src={imgVectors}
          className="home-image"
          />
          <img
            alt="Img computer made by Dall-e, Open AI"
            src={imgComputer}
            className="home-image1"
          />
          {/* header */}
          <div className="home-container01">
            <button onClick={toggleMenu} type="button" className="button">
              <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#000000" 
                stroke-width="2" 
                stroke-linecap="square" 
                stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            
          </div>
          {menuVisible && (
            <div 
              className="dropdown-menu">
              
              <a 
                  href="https://www.linkedin.com/in/francisco-javier-delatorre-silva"
                  style={{cursor:'pointer', color:'black'}}
                  className="home-text4"
                  target="_blank">
                    Linkedin
                </a>
                <a 
                  href="https://github.com/javidlt"
                  style={{cursor:'pointer', color:'black'}}
                  className="home-text4"
                  target="_blank">
                    Github
                </a>
                <a 
                  href="https://read.cv/javidlts"
                  style={{cursor:'pointer', color:'black'}}
                  className="home-text4"
                  target="_blank">
                    CV
                </a>
            </div>
          )}
          {/* banner */}
          <div className="home-container02">
            <span className="home-text">
              Hi, my name is Francisco Javier De la Torre Silva
            </span>
          </div>
          {/* projectss section */}
          
          {jsonDatax.proyectos.map((proyecto) => (
          <div className="home-container03">
            <div className="home-container04">
              <div className='hmecontainerWidth'>
                <h1 className="home-text1">{proyecto._id == "ia" ? "Ai" : proyecto._id.charAt(0).toUpperCase() + proyecto._id.slice(1)} Projects</h1>
                <span className="home-text2">
                  {dictWDescription.find(item => item.cat === proyecto._id).description}
                </span>
              </div>
            </div>
            <div style={{marginTop: '15px'}}className="">
              {proyecto.products.map((spProy) => (
              <div className="home-container06">
                <a 
                  href={spProy.link}
                  style={{cursor:'pointer', color:'black'}}
                  className="home-text3"
                  target="_blank">
                    {spProy.title}
                </a>
              </div>
              ))}
            </div>
          </div>
          ))}
          
        </div>
        {/* footer */}
        <div className="home-container07">
            <div className="home-container08">
              <div className="home-container09">
                <a 
                  href="https://www.linkedin.com/in/francisco-javier-delatorre-silva"
                  style={{cursor:'pointer', color:'black'}}
                  className="home-text4"
                  target="_blank">
                    Linkedin
                </a>
                <a 
                  href="https://github.com/javidlt"
                  style={{cursor:'pointer', color:'black'}}
                  className="home-text4"
                  target="_blank">
                    Github
                </a>
                <a 
                  href="https://read.cv/javidlts"
                  style={{cursor:'pointer', color:'black'}}
                  className="home-text4"
                  target="_blank">
                    CV
                </a>
              </div>
            </div>
          </div>
      </div> : 
      <div className="loading">Loading...</div>
      }
    </>
  )
}

export default App
