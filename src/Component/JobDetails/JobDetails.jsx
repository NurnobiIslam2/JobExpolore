import React, { useState } from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobExplore = useRouteLoaderData("job-explore");
    console.log( jobExplore)
   
    
    return (
        <div>
            <h1>job details:</h1>
        </div>
    );
};

export default JobDetails;