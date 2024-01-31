import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JobDetail from './JobDetail.jsx';
import data from '../data.js'

function JobDetails() {
    return (
        <Routes>
            {data.map((job) => (
                <Route
                    key={job.id}
                    path={`/${job.id}-${job.company}`}
                    element={<JobDetail job={job} />}
                />
            ))}
        </Routes>
    );
}

export default JobDetails;
