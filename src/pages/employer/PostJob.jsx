import React, { useState } from 'react';

const PostJob = () => {

  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    description: "",
    location: "",
    salary: "",
    type: "",
    image: null,
    requirements: "",
    benefits: "",
    jobLevel: "",
    education: "",
    experience: "",
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    setJobData({ ...jobData, image: selectedFile });

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("jobsData:", jobData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-gray-500 max-w-3xl mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black/10"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Post a Job
      </h2>

      {preview && (
        <div className="mb-3 flex justify-center">
          <img
            src={preview}
            alt="Preview"
            className="w-24 h-24 object-cover rounded-full border-shadow"
          />
        </div>
      )}

      {/* File Upload */}
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          name="image"
          className="block w-full text-sm text-gray-500 
          file:mr-4 file:py-2 file:px-4 file:rounded-full 
          file:border-0 file:text-sm file:font-semibold 
          file:bg-blue-50 file:text-blue-700 
          hover:file:bg-blue-100 cursor-pointer"
        />
      </div>

      {/* Job Title */}
      <label htmlFor="jobTitle">Job Title</label>
      <input
        type="text"
        name="title"
        value={jobData.title}
        onChange={handleChange}
        placeholder="Enter Job Title"
        className="w-full mt-1 border border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4"
        required
      />

      {/* Company Name */}
      <label>Company Name</label>
      <input
        name="company"
        value={jobData.company}
        onChange={handleChange}
        placeholder="Enter Company Name"
        className="w-full mt-1 border border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4"
      />

      {/* Job Description */}
      <label>Job Description</label>
      <textarea
        name="description"
        value={jobData.description}
        onChange={handleChange}
        placeholder="Enter Job Description"
        className="w-full mt-1 border border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4 resize-none overflow-auto"
      ></textarea>

      {/* Location */}
      <label>Location</label>
      <input
        name="location"
        value={jobData.location}
        onChange={handleChange}
        placeholder="Job Location"
        className="w-full mt-1 border border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4"
      />

      {/* Salary */}
      <label>Salary</label>
      <input
        name="salary"
        value={jobData.salary}
        onChange={handleChange}
        placeholder="eg: $80,000"
        className="w-full mt-1 border border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4"
      />

      {/* Job Type */}
      <label>Job Type</label>
      <select
        name="type"
        value={jobData.type}
        onChange={handleChange}
        className="w-full mt-1 border border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4"
      >
        <option value="">Select Type</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Remote</option>
        <option value="Internship">Internship</option>
      </select>

      {/* Requirements */}
      <label>Requirements</label>
      <textarea
        name="requirements"
        value={jobData.requirements}
        onChange={handleChange}
        placeholder="Separate with commas"
        className="w-full mt-1 border border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4 resize-none overflow-auto"
      ></textarea>

      {/* Benefits */}
      <label>Benefits</label>
      <textarea
        name="benefits"
        value={jobData.benefits}
        onChange={handleChange}
        placeholder="Enter Benefits"
        className="w-full mt-1 border border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4 resize-none overflow-auto"
      ></textarea>

      {/* Job Level */}
      <label>Job Level</label>
      <input
        name="jobLevel"
        value={jobData.jobLevel}
        onChange={handleChange}
        placeholder="Enter Job Level"
        className="w-full mt-1 border border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4"
      />

      {/* Education */}
      <label>Education</label>
      <input
        name="education"
        value={jobData.education}
        onChange={handleChange}
        placeholder="Enter Education"
        className="w-full mt-1 border border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4"
      />

      {/* Experience */}
      <label>Experience</label>
      <input
        name="experience"
        value={jobData.experience}
        onChange={handleChange}
        placeholder="Enter Experience"
        className="w-full mt-1 border border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 mb-4"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full my-3 bg-primary active:scale-95 transition py-2.5 rounded text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default PostJob;
