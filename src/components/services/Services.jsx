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
                        Developing an artifact detection machine learning framework and an automated data generation pipeline using
                        TensorFlow, NumPy, and scikit-learn, employing semantic segmentation with U-Nets and Fourier analysis
                    </p>
                </li>
                <hr className='line'/>
                <li className='odd'>
                    <p>
                        Conducted extensive parameter searches, training hundreds of models using CUDA-accelerated GPU computing in a
                        Linux environment, and implemented custom evaluation metrics to determine best performing models
                    </p>
                </li>
                <li>
                    <p>
                        Collaborated with subject matter experts to refine and apply automated key point extraction, feature matching, and
                        filtration algorithms in the Fourier domain, addressing customer-specific requirements for enhanced imagery solutions
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
                        Designed algorithms for satellite propagation in cislunar space, addressing complex equations of motion from Earth and
                        Moon’s gravity, enhancing state estimation using expertise in physics, orbital mechanics, and programming
                    </p>
                </li>
                <hr className='line'/>
                <li className='odd'>
                    <p>
                        Developed a Python module for the General Mission Analysis Tool (GMAT) API, enabling ground stations to receive
                        accurate state vector information from satellites post-detection
                    </p>
                </li>
                <li>
                    <p>
                        Gained valuable experience in teamwork and code design, contributing to the development and testing of efficient,
                        robust software solutions in a multidisciplinary engineering environment
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
