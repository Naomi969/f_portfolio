
import './style/style.css';

import AdventureFinder from '../img/portfolio/AdventureFinder.png'
import quiz from '../img/portfolio/quiz.png'
import jetAway from '../img/portfolio/jetAway.png'

function Projects() {
    return(
    <section id='main'>
        <div class="container">
        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Click on the images below to see a sample of some of my most recent projects. You will find an option to
             to navigate to the live website and to explore the github page. </p>
        </div>

        <div class="row portfolio-container">

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className='portfolio-wrap'>
              <img src={AdventureFinder} class="img-fluid" alt="Photographer: John Schnobrich"></img>
              <div class="portfolio-info">
                <h4>Adventure Finder</h4>
                <p>JavaScript / JQuery / Weather API / CSS</p>
                {/* <a target='_blank' rel="noreferrer" href="https://zeal3.herokuapp.com/"><FaLink /></a><a target='_blank' rel="noreferrer" href="https://github.com/snk923/ZEAL"><FaGithub /></a> */}
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={jetAway} class="img-fluid" alt="Photographer: Boxed Water"></img>
              <div class="portfolio-info">
                <h4>JetAway</h4>
                <p>HTML / CSS / JavaScript / Node.js / mySQL</p>
                {/* <a target='_blank' rel="noreferrer" href="">+</a>
                <a target='_blank' rel="noreferrer" href=''>-</a> */}
              </div>
            </div>
          </div>


          {/* <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src={weather} class="img-fluid" alt="Weather Dashboard Photographer: Henruk Donnestad"></img>
              <div class="portfolio-info">
                <h4>Weather Dashboard</h4>
                <p>JavaScript / APIs</p>
                <a target='_blank' rel="noreferrer" href="https://snk923.github.io/homework6-weather-dashboard/"><FaLink /></a><a target='_blank' rel="noreferrer" href="https://github.com/snk923/homework6-weather-dashboard"><FaGithub /></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={Notes} class="img-fluid"
                alt="NoteTaker Photographer: Charles Deluvio"></img>
              <div class="portfolio-info">
                <h4>NoteTaker</h4>
                <p>JavaScript / Express.js / Node.js</p>
                <a target='_blank' rel="noreferrer" href="https://skolb-note-taker.herokuapp.com/notes"><FaLink /></a><a target='_blank' rel="noreferrer" href="https://github.com/snk923/homework11-Express.js-NoteTaker"><FaGithub /></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src={scheduler} class="img-fluid"
                alt="Workday Scheduler Photographer: Emma Matthews Digital Content"></img>
              <div class="portfolio-info">
                <h4>Work Day Scheduler</h4>
                <p>JavaScript</p>
                <a target='_blank' rel="noreferrer" href="https://snk923.github.io/homework5-workdayScheduler/"><FaLink /></a><a target='_blank' rel="noreferrer" href="https://github.com/snk923/homework5-workdayScheduler"><FaGithub /></a>
              </div>
            </div>
          </div> */}

           <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src={quiz} class="img-fluid" alt="Trivia Game Photographer Emma Matthews Digital Content"></img>
              <div class="portfolio-info">
                <h4> GOT Trivia Challenge</h4>
                <p>JavaScript</p>
                {/* <a target='_blank' rel="noreferrer" href=""></a><a target='_blank' rel="noreferrer" href="https://github.com/snk923/homework4_code_quiz"><FaGithub /></a> */}
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
    );
}

export default Projects