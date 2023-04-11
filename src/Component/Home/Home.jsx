import React from 'react';
import './Home.css';
import image from '../../assets/cover.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faCalculator, faGroupArrowsRotate, faCubesStacked } from '@fortawesome/free-solid-svg-icons'
import { useLoaderData } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';



const Home = () => {
    const jobs = useLoaderData()
    return (
        <div>
            <div>
                <section className='main-container'>
                    <div className='container'>
                        <div className='home-container'>
                            <h1 className='name-bar'>One Step Closer To Your <span className='dream-job'>Dream Job</span></h1>
                            <p>
                                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                            </p>
                            <button className='home-btn'>Get Started</button>
                        </div>
                        <div>
                            <img className='home-container' src={image} alt="" srcset="" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className='category-titel'>
                        <h3>Job Category List</h3>
                        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                </section>
                <section>
                    <div className='category-container'>
                        <div className='job-categoty'>
                            <p><FontAwesomeIcon className='icon' icon={faCalculator} /></p>
                            <h4>Account & Finance</h4>
                            <p>300 Jobs Available</p>
                        </div>
                        <div className='job-categoty'>
                            <p><FontAwesomeIcon className='icon' icon={faLightbulb} /></p>
                            <h4>Creative Design</h4>
                            <p>300 Jobs Available</p>
                        </div>
                        <div className='job-categoty'>
                            <p><FontAwesomeIcon className='icon' icon={faCubesStacked} />
                            </p>
                            <h4>Marketing & Sales</h4>
                            <p>300 Jobs Available</p>
                        </div>
                        <div className='job-categoty'>
                            <p><FontAwesomeIcon className='icon' icon={faGroupArrowsRotate} /></p>
                            <h4>Engineering Job</h4>
                            <p>300 Jobs Available</p>
                        </div>
                    </div>
                </section>
               <div className='jobs-container'>
               {
                    jobs.map(job => <Jobs key={job.id} job={job}></Jobs>)
                }
               </div>
            </div>
        </div>
    );
};




export default Home;