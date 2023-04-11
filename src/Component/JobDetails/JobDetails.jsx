import React, { useState } from 'react';
import { useLoaderData, useParams, useRouteLoaderData } from 'react-router-dom';
import { findJobById } from '../../utils/findJob';

const JobDetails = () => {
    const jobExplores = useLoaderData();
    const params = useParams();
    const jobExplore = findJobById(params.jobId, jobExplores);
    console.log(jobExplore);
   
   
    
    return (
        <div>
            <h1>job details:</h1>
        </div>
    );
};

export default JobDetails;