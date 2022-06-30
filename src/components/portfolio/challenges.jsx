import React from 'react'
import IMG5 from '../../assets/portfolio5.png'

const challenges = () => {
  return (
    <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="picture" />
          </div>

          <h3>Enter the title</h3>
          <div className="portfolio__item-cta">
          <a href="#" className='btn' target='_blank'>Github</a>
          </div>
        </article>
  )
}

export default challenges