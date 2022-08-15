import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I've done</h5>
      <h2>Previous Experience</h2>

      <div className="container services_container">
        <article className='service'>
            <div className="service_head">
                <h3>L3Harris Technologies</h3>
                <h6 className='company'>Image Science Enginnering Intern</h6>
            </div>

            <ul className='service_list'>
                <li>
                    <p>
                        Developed ∼2000 lines of code to propagate satellites in cislunar space under the physical laws of the circularly
                        restricted three body problem through a python interface of the General Mission Analysis Tool (GMAT) API
                    </p>
                </li>
                <hr className='line'/>
                <li className='odd'>
                    <p>
                        Built a hierarchy of automated python files that will allow a user to easily simulate of hundreds of satellites
                    </p>
                </li>
                <li>
                    <p>
                        Reading/writing data from and to .csv and .xlsx files for ground stations on Earth to be able to see and know
                        where the satellites are currently and where they are going
                    </p>
                </li>
            </ul>
        </article>


        <article className='service'>
            <div className="service_head">
                <h3>Center for Relativistic Astrophysics @ GT</h3>
                <h6 className='company'>Research Assistant</h6>
            </div>

            <ul className='service_list'>
                <li>
                    <p>
                        Collaborate with peers and advisors to analyze datasets from large astrophysical simulations to investigate
                        accretion flows into supermassive black hole progenitors at high redshifts
                    </p>
                </li>
                <li className='odd'>
                    <p>
                        Extract and plot data from simulations on Jupyter using yt (Python Package) to find trends of significant stature
                    </p>
                </li>
                <li>
                    <p>
                        Utilize Linux command-line prompts on a local machine to offload jobs to HIVE (Georgia Tech supercomputer)
                    </p>
                </li>
            </ul>
        </article>


        <article className='service'>
            <div className="service_head">
                <h3>AMOP Group @ GT</h3>
                <h6 className='company'>Research Assistant</h6>
            </div>

            <ul className='service_list'>
                <li>
                    <p>
                        Utilized Autodesk Eagle to design, construct, and test 5 different PCBs ranging from digital analog converters to
                        electromagnetic interference filters that control lasers to cool particles to a millionth of a degree above absolute zero
                    </p>
                </li>
                <li className='odd'>
                    <p>
                        Analyzed 200+ Eagle libraries and schematics to incorporate into the final designs of the boards
                    </p>
                </li>
            </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
