import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext' // adjust path if needed
import JobCard from './JobCard' // adjust path if needed

const Jobs = () => {
  const { jobsData } = useContext(AppContext) // fixed from jobData → jobsData

  return (
    <div className="py-16">
      <h1 className="text-2xl md:text-5xl font-semibold text-gray-800">
        Feature Jobs
      </h1>

      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-12">
        {jobsData.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  )
}

export default Jobs
