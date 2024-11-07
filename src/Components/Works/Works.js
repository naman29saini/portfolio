import React from 'react'
import './Works.css'
import Crypto1 from '../../assests/crypto1.jpg'
import Crypto2 from '../../assests/crypto2.jpg'
import MusicPlayer1 from '../../assests/musicplayer1.jpg'
import MusicPlayer2 from '../../assests/musicplayer2.jpg'
import Todo1 from '../../assests/todo2.jpg'
import Todo2 from '../../assests/todo3.jpg'
import Text1 from '../../assests/text1.jpg'
import Text2 from '../../assests/text2.jpg'
import Clock1 from '../../assests/clock1.jpg'
import Clock2 from '../../assests/clock2.jpg'
import Clock3 from '../../assests/clock3.jpg'
import Netflix1 from '../../assests/netflix1.jpg'
import Netflix2 from '../../assests/netflix2.jpg'
import TicTacToe1 from '../../assests/tictactoe1.jpg'
import TicTacToe2 from '../../assests/tictactoe2.jpg'
import NewsApp1 from '../../assests/newsapp1.jpg'
import NewsApp2 from '../../assests/newsapp2.jpg'
const Works = () => {
  return (
    <section id="works">
       <h2 className="worksTitle">My Portfolio</h2>
       <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses to achieve their goals and create a strong online presence.</span>
        <div className="projects">
        <div className="project">
        <h2><a href="https://cryptotrackingbynaman.vercel.app/" target="_blank">Crypto Tracking Web App</a></h2>
                <div className="projectImgs">
                <img src={Crypto1} alt="CryptoTracking App logo" className="projectImg" />
                <img src={Crypto2} alt="CryptoTracking App logo" className="projectImg" />
                </div>
                <div className="projectText">  
                    <h5>Tech Stack: ReactJS, CSS3, CoinGecco API, Google Charts
                    </h5>
                    <ul>
                        <li>Implemented a user-friendly interface allowing users to track the latest price of any cryptocurrency.</li>
                        <li>Developed a Search Bar to search any Crypto</li>
                        <li>User can watch the charts with 24 Hour High and Low Price.</li>
                    </ul>
                </div>
            </div>
            <div className="project">
        <h2><a href="https://musicplayerbyns.vercel.app/" target="_blank">Music Player Web App</a></h2>
                <div className="projectImgs">
                <img src={MusicPlayer1} alt="MusicPlayer App logo" className="projectImg" />
                <img src={MusicPlayer2} alt="MusicPlayer App logo" className="projectImg" />
                </div>
                <div className="projectText">  
                    <h5>Tech Stack:  ReactJS, HTML5, CSS3, Javascript
                    </h5>
                    <ul>
                        <li>Implemented a user-friendly interface allowing users to listen to songs
                        from a variety of albums</li>
                        <li>Utilized HTML5 audio tags and JavaScript functions to enable seamless
                        audio playback
                        </li>
                        <li>Successfully integrated various albums and songs into the Music Player
                        Web App, providing a diverse selection for users to enjoy
                        </li>
                    </ul>
                </div>
            </div>
            <div className="project">
        <h2><a href="https://todobynaman.vercel.app/" target="_blank">myToDo</a></h2>
                <div className="projectImgs">
                <img src={Todo1} alt="Todo logo" className="projectImg" />
                <img src={Todo2} alt="Todo logo" className="projectImg" />
                </div>
                <div className="projectText">  
                    <h5>Tech Stack:  ReactJS, Tailwind CSS, React icons
                    </h5>
                    <ul>
                        <li>Usage of Local Storage to maintain user’s data efficiently.
                        </li>
                        <li>Responsive Design suitable for every mobile phones.
                        </li>
                        <li>“ShowFinished” checkbox to provide finished task separately.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="project">
        <h2><a href="https://textutilsbyns.vercel.app/">TextUtils</a></h2>
                <div className="projectImgs">
                <img src={Text1} alt="Text logo" className="projectImg" />
                <img src={Text2} alt="Text logo" className="projectImg" />
                </div>
                <div className="projectText">  
                    <h5>Tech Stack:   ReactJS, CSS3 , React icons, JS
                    </h5>
                    <ul>
                        <li>Implemented features allowing users to edit text, including converting to
                        uppercase or lowercase, and removing extra spaces.
                        </li>
                        <li>Demonstrated expertise in React Js to create a functional and user-friendly
                        text editing tool.
                        </li>
                        <li>Showcased commitment to continuous learning and improvement by
                        staying up-to-date with the latest technologies and techniques in web
                        development.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="project">
        <h2><a href="https://tictactoebyns.vercel.app/" >Tic Tac Toe Game</a></h2>
                <div className="projectImgs">
                <img src={TicTacToe1} alt="TicTacToe logo" className="projectImg" />
                <img src={TicTacToe2} alt="TicTacToe logo" className="projectImg" />
                </div>
                <div className="projectText">  
                    <h5>Tech Stack:   ReactJS, CSS3 , React icons, JS
                    </h5>
                    <ul>
                        <li>Developed a TicTacToe Web App using ReactJs and CSS3 to enhance skills in Problem Solving and Game Development.</li>
                        <li>Enhanced problem-solving abilities by troubleshooting and resolving
                        Javscript issues during the project development process.</li> 
                    </ul>
                </div>
            </div>
            <div className="project">
        <h2><a href="https://newsappbyns.vercel.app/" >News Web App</a></h2>
                <div className="projectImgs">
                <img src={NewsApp1} alt="NewsApp logo" className="projectImg" />
                <img src={NewsApp2} alt="NewsApp logo" className="projectImg" />
                </div>
                <div className="projectText">  
                    <h5>Tech Stack:   ReactJS, Bootstrap CSS , News API , JS
                    </h5>
                    <ul>
                        <li>NewsApp is a responsive web application designed to deliver the latest news from various sources in real-time. It allows users to browse, search, and filter news articles based on categories, including politics, technology, sports, entertainment, and more. The app fetches news articles from a reliable news API, displaying them in an intuitive and engaging layout.</li>
                        <li>Key Feartures: Real Time News Update, Searching and Filtering, Responsive Design, Personalized Feed</li>
                    </ul>
                </div>
            </div>
            <div className="project">
        <h2><a href="" >Netflix Clone</a></h2>
                <div className="projectImgs">
                <img src={Netflix1} alt="Netflix logo" className="projectImg" />
                <img src={Netflix2} alt="Netflix logo" className="projectImg" />
                </div>
                <div className="projectText">  
                    <h5>Tech Stack:   HTML5, CSS3, Javascript
                    </h5>
                    <ul>
                        <li>Developed a Netflix clone using HTML5 and CSS3 to enhance skills in CSS3.</li>
                        <li>Successfully replicated the design and functionality of Netflix, showcasing
                        proficiency in CSS3.</li>
                        <li>Enhanced problem-solving abilities by troubleshooting and resolving
                        CSS3-related issues during the project development process.</li>
                        
                    </ul>
                </div>
            </div>
            <div className="project">
        <h2><a href="" >Clocks</a></h2>
                <div className="projectImgs">
                <img src={Clock1} alt="Clock logo" className="projectImg" />
                <img src={Clock2} alt="Clock logo" className="projectImg" />
                </div>
                <div className="projectText1">  
                    <h5>Tech Stack:   HTML5, CSS3, Javascript
                    </h5>
                    <ul>
                        <li><a href="https://alarmbyns.vercel.app/" target="_blank">Alarm Clock</a>
                        </li>
                        <li><a href="https://stopwatchbyns.vercel.app/" target="_blank">Stopwatch</a>
                        </li>
                        <li><a href="https://analogclockbyns.vercel.app/" target="_blank">Analog Clock</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Works
