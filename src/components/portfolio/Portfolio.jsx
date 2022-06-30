import React from 'react'
import './portfolio.css'
import challenges from './challenges'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Education Website',
    github: 'https://github.com/DVSHKMR/Education-Website',
    demo: 'https://dvshkmr.github.io/Education-Website/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'COLOR Website',
    github: 'https://github.com/DVSHKMR/COLOR-Website',
    demo: 'https://dvshkmr.github.io/COLOR-Website/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Cloud Hosting Website',
    github: 'https://github.com/DVSHKMR/Loruki-Website',
    demo: 'https://heroic-cannoli-233912.netlify.app/'
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'enter the project title',
  //   github: 'https://github.com',
  //   demo: 'github pages link'
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Frontend Mentor Challenges',
  //   github: 'https://github.com/DVSHKMR/Frontend-Mentor-Challenges',
  //   demo: 'github pages link'
  // }
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'enter the project title',
  //   github: 'https://github.com',
  //   demo: 'github pages link'
  // }
]








const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
         
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
        <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>

        </article>


        
        
            )
          })
        }         
        
      </div>
    </section>
  )
}

export default Portfolio