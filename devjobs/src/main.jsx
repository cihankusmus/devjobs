import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import JobList from './components/JobList.jsx';
import JobDetails from './components/JobDetails.jsx'
import JobDetail from './components/JobDetail.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/*" element={<JobDetails />} />
        <Route path="/:id:company" element={<JobDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
