import React from 'react';
import { Link, } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header-container'>
                <h1>Job Explore</h1>
                <div className='link-item'>
                    <Link to='/'>Home</Link>
                    <Link to='/Statistics'><p>Statistics</p></Link>
                    <Link to='/ApplidJobs'><p>Applied Jobs</p></Link>
                    <Link to='/Blog'><p>Blog</p></Link>
                </div>
                <div>
                    <button className='applay-btn'>Star Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Header;