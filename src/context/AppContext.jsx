import { createContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { categories, jobs, companies, applicants } from "../assets/assets";
import toast from "react-hot-toast";
import axios from "axios";


// Axios global config
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

// Create the context
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  // ----- States -----
  const [user, setUser] = useState(null); // safer than false
  const [admin, setAdmin] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [jobsData, setJobsData] = useState([]);
  const [query, setQuery] = useState("");
  const [isJobApplied, setIsJobApplied] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [applicantsData, setApplicantsData] = useState([]);

  // ----- Fetch logged-in user -----
  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const { data } = await axios.get("/user/me");
        console.log("data",data);
        if (data.success) setUser(data.user);
      } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
      }
    };
    fetchLoggedInUser();
  }, []);

  // ----- Fetch static data -----
  const fetchApplicants = useCallback(() => setApplicantsData(applicants), []);
  const fetchCompanies = useCallback(() => setCompanyData(companies), []);
  const fetchCategories = useCallback(() => setCategoriesData(categories), []);
  const fetchJobs = useCallback(() => setJobsData(jobs), []);

  useEffect(() => {
    fetchCategories();
    fetchJobs();
    fetchCompanies();
    fetchApplicants();
  }, [fetchCategories, fetchJobs, fetchCompanies, fetchApplicants]);

  // ----- Save job function -----
  const saveJob = useCallback((job) => {
    setSavedJobs((prev) => {
      if (prev.find((item) => item._id === job._id)) return prev;
      toast.success("Job saved successfully!");
      return [...prev, job];
    });
  }, []);

  // ----- Context value -----
  const value = {
    navigate,
    user,
    setUser,
    admin,
    setAdmin,
    categoriesData,
    setCategoriesData,
    jobsData,
    setJobsData,
    query,
    setQuery,
    isJobApplied,
    setIsJobApplied,
    savedJobs,
    saveJob,
    companyData,
    setCompanyData,
    applicantsData,
    axios, // now available in context if needed
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
