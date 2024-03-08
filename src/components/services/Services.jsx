import React from 'react';
import './services.css';

const Services = () => {
  return (
    <section id='services'>
      <h5 className='small-words'>What I've done</h5>
      <h2>Previous Experience</h2>

      <div className="container services_container">

        <article className='service'>
            <div className="service_head">
                <h3>L3Harris Technologies</h3>
                <h6 className='company'>Associate Image Science Engineer</h6>
            </div>

            <ul className='service_list'>
                <li>
                    <p>
                        Developing a novel sub-pixel frame-to-frame registration routine from the ground up using OpenCV, feature
                        matching, and Fourier Transform based techniques that will outperform the current industry leading algorithm
                    </p>
                </li>
                <hr className='line'/>
                <li className='odd'>
                    <p>
                        Created a Convolution Neural Network machine learning pipeline via TensorFlow that leverages cross correlation
                        surfaces of images to predict translational misalignment with 96.8% accuracy at a 0.5 pixel resolution
                    </p>
                </li>
                <li>
                    <p>
                        Improved an existing image registration framework by employing cross validation of parameters, which lead to a 90%
                        decrease in errors of translational shift predictions in satellite imagery, and ported the entire codebase to Python
                    </p>
                </li>
            </ul>
        </article>

        <article className='service'>
            <div className="service_head">
                <h3>L3Harris Technologies</h3>
                <h6 className='company'>Image Science Engineering Intern</h6>
            </div>

            <ul className='service_list'>
                <li>
                    <p>
                        Developed ∼2,000 lines of code to simulate satellite orbits in cislunar space under the physical laws of the circularly
                        restricted three body problem through a Python interface of the General Mission Analysis Tool (GMAT) API
                    </p>
                </li>
                <hr className='line'/>
                <li className='odd'>
                    <p>
                        Built a hierarchy of python files that will allow a user to easily simulate up to 150 orbits in less than 2 minutes
                    </p>
                </li>
                <li>
                    <p>
                        Automated the process of writing data from simulations to external files efficiently using Pandas
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
                        Utilize Linux command-line prompts on a local machine to offload jobs to HIVE (Georgia Tech Linux cluster)
                    </p>
                </li>
            </ul>
        </article>

        {/*
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
        */}
      </div>
    </section>
  )
}

export default Services
