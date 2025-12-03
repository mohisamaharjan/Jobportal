import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

import {applicants} from "../../assets/assets";
const Applicants = () => {
  const { applicantsData } = useContext(AppContext); 
  console.log("applicantsData", applicantsData); 

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto bg-gradient-to-b from-purple-200/70"> 
      <h1 className="text-2xl md:text-5xl font-medium text-gray-800 mb-8">
        All Applicants
      </h1>

      {!applicantsData || applicantsData.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg">No job Found</div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied Job</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Application Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resume</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applicantsData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors hover:cursor-pointer">
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.appliedJob}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.applicationDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.resume}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {item.status || "Pending"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default Applicants;
