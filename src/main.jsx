import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Layout/Main';
import Blog from './Component/Blog/Blog';
import Statistics from './Component/Statistics/Statistics';
import ApplidJobs from './Component/ApplidJobs/ApplidJobs';
import Home from './Component/Home/Home';
import JobDetails from './Component/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/Job-explore.json')
      },
      {
         path:'Job/:jobId',
         element:<JobDetails></JobDetails>,
         loader:({params}) => fetch(`Job-explore.json/${params.jobId}`)
      },
     
      {
        path: 'Blog',
        element: <Blog></Blog>
      },
      {
        path: 'Statistics',
        element: <Statistics></Statistics>,
        
      },
      {
        path: 'ApplidJobs',
        element: <ApplidJobs></ApplidJobs>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
