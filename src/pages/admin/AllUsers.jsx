import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { useState, useEffect } from 'react';
import toast from "react-hot-toast";

const AllUsers = () => {
  const {axios, admin } = useContext(AppContext);
  const [students, setStudents] = useState([]);

  const fetchAllStudents = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/user/all-students",
        { withCredentials: true }
      );

      console.log("API response:", data);
      if (data.success) {
        setStudents(data.students);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch students");
    }
  }

  useEffect(() => {
    fetchAllStudents();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-medium text-gray-800">Students List</h2>
      <div className="overflow-auto"></div>
      <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
        <thead className="bg-gray-100 text-gray-700 text-left">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Phone</th>
            <th className="py-2 px-4">Location</th>
            <th className="py-2 px-4">Education</th>
            <th className="py-2 px-4">Experience</th>
            <th className="py-2 px-4">Skills</th>
            <th className="py-2 px-4">bio</th>
            <th className="py-2 px-4">Image</th>
            <th className="py-2 px-4">Resume</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="border-t">
              <td className="py-2 px-4">{student.name}</td>
              <td className="py-2 px-4">{student.email}</td>
              <td className="py-2 px-4">{student.phone}</td>
              <td className="py-2 px-4">{student.location}</td>
              <td className="py-2 px-4">{student.education}</td>
              <td className="py-2 px-4">{student.experience}</td>
              <td className="py-2 px-4">{student.skills}</td>
              <td className="py-2 px-4">{student.bio}</td>
              <td className="py-2 px-4">
                <img
                  src={`http://localhost:5000/${student.image}`}
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </td>
              <td className="py-2 px-4">{student.resume}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default AllUsers;
