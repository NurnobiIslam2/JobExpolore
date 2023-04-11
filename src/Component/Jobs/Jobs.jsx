import React from 'react';
import './Jobs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Jobs = ({ job }) => {
    const { name, picture, companyLink, location, salary, jobTime2, jobTime1, id } = job;
    return (
        <div>
            <div >
                <div className='job-container'>
                    <img className='img-container' src={picture} alt="" srcset="" />
                    <h3>{name}</h3>
                    <p>{companyLink}</p>
                    <div className='jobTime-container'>
                        <p className='jobTime'>{jobTime1}</p>
                        <p className='jobTime'>{jobTime2}</p>
                    </div>
                    <div className='salary'>
                        <h5><FontAwesomeIcon icon={faLocation} />{location}</h5>
                        <p> <FontAwesomeIcon icon={faCircleDollarToSlot} />Salary:{salary}</p>
                    </div>
                    <Link to={`/job/${id}`}><button className='view-btn'>View Details</button></Link>
                </div>


            </div>

        </div>
    );
};

export default Jobs;