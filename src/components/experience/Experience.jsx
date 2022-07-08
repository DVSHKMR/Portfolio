import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>Technology Stack</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>HTML</h4>
                </div>
            </article>

            

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div><h4>CSS</h4>
                </div>
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>JavaScript</h4>
                </div>
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div><h4>React</h4>
                </div>
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div><h4>Tailwind</h4>
                </div>
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>SASS/SCSS</h4>
                </div>
            </article>


            
          </div>
        </div>
        {/* ============End of Frontend=============== */}
        
      </div>
    </section>
  )
}

export default experience