import React, { useState } from 'react';
import { useLoaderData, } from 'react-router-dom';

const JobDetails = () => {
    const {jobdetails }= useLoaderData();
    console.log(jobdetails)
   
    
    return (
        <div>
            <h1>job details:</h1>
        </div>
    );
};

export default JobDetails;