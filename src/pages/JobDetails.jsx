import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import toast from 'react-hot-toast';

const JobDetails = () => {
  const { jobsData, isJobApplied, setIsJobApplied, saveJob } = useContext(AppContext);
  const { id } = useParams();

  const job = jobsData?.find((job) => String(job._id) === String(id));

  if (!job) {
    return (
      <div className="py-16 text-center text-gray-700 text-xl">
        Job not found or data not loaded yet.
      </div>
    );
  }

  return (
    <div className="py-16">
      <h1 className="text-2xl md:text-5xl text-gray-800 font-semibold">
        Job Details
      </h1>

      <div className="w-full flex flex-col md:flex-row items-center justify-center mt-10 gap-10">
        {/* left section */}
        <div className="flex flex-col">
          <div className="flex items-center gap-5">
            <img src={job.image} alt="" className="w-[86px] h-[86px]" />
            <div>
              <h2 className="text-lg md:text-2xl font-semibold">{job.title}</h2>
              <p className="text-xs sm:text-base">
                {job.company} <span>{job.type}</span>
              </p>
            </div>
          </div>

          {/* job description */}
          <div className="my-2 flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-gray-800">
              Job Description
            </h4>
            <p>{job.description}</p>
          </div>

          {/* job requirements */}
          <div className="my-2 flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-gray-800">
              Job Requirements
            </h4>
            <ul className="list-disc pl-5">
              {job.requirements?.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* job benefits */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800">
              Job Benefits
            </h4>
            <ul className="list-disc pl-5">
              {job.benefits?.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* right section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {/* Save Later Icon */}
            <img
              src={assets.save_later_icon}
              alt="Save for later"
              className="cursor-pointer "
              onClick={() => {
                saveJob(job); 
                
              }}
            />

            {/* Apply Button */}
            <button
              onClick={() => {
                if (!isJobApplied) {
                  setIsJobApplied(true);
                  toast.success('Job applied');
                }
              }}
              disabled={isJobApplied}
              className={`px-10 py-2 rounded-full text-white transition ${
                isJobApplied
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-primary hover:bg-primary/90 cursor-pointer'
              }`}
            >
              {isJobApplied ? 'Applied' : 'Apply Now'}
            </button>
          </div>

          {/* job salary */}
          <div className="my-5 flex flex-wrap gap-3 border border-gray-300 p-4">
            <p className="text-base text-gray-800 font-medium">
              Salary: {job.salary}
            </p>
            <div className="flex items-center gap-4">
              <p className="text-base text-gray-800 font-medium">Job Location:</p>
              <p>{job.type}</p>
            </div>
          </div>

          {/* job overview */}
          <div className="my-1 flex flex-col gap-3 border border-gray-300 p-4">
            <p className="text-base text-gray-800 font-bold">Job Overview</p>
            <div className="flex flex-wrap items-center gap-2">
              <p>Posted date: {job.postedDate}</p>
              <p>Job level: {job.jobLevel}</p>
              <p>Education: {job.education}</p>
              <p>Experience: {job.experience}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
