import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets' // fixed missing import

const JobCard = ({ job }) => {
  const { navigate } = useContext(AppContext)

  return (
    <div
      onClick={() => {
        console.log("Clicked job:", job); // ✅ Log the job first
        navigate(`/job-details/${job._id}`); // then navigate
      }}
      className="p-5 flex flex-col gap-1 rounded-md border border-gray-300 w-auto lg:w-[424px] bg-gradient-to-r from-purple-200/80 cursor-pointer"
    >
      <h1 className="text-2xl font-medium text-gray-800">{job.title}</h1>
      <div className="flex gap-4 items-center">
        <p className="text-sm bg-green-300/40 p-1">{job.type}</p>
        <p className="text-sm text-gray-800">Salary {job.salary}</p> {/* added space */}
      </div>
      <div className="flex gap-4 items-center my-2">
        <img src={job.image} alt="" className="w-12 h-12" />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h3>{job.company}</h3>
          <h3>{job.location}</h3>
        </div>
        <div>
          <img src={assets.save_later_icon} alt="" className="w-12 h-12" />
        </div>
      </div>
    </div>
  )
}

export default JobCard
