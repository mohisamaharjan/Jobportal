import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AllJobs from "./pages/AllJobs";
import JobDetails from "./pages/JobDetails";
import About from "./pages/About";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import MyApplication from "./pages/user/MyApplication";
import Profile from "./pages/user/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

// Employer Pages
import EmployerLayout from "./pages/employer/EmployerLayout";
import CompaniesList from "./pages/employer/CompaniesList";
import AddCompany from "./pages/employer/AddCompany";
import PostJob from "./pages/employer/PostJob";
import JobsList from "./pages/employer/JobsList";
import Applicants from "./pages/employer/Applicants";

// Admin Pages
import Adminlayout from "./pages/admin/Adminlayout";
import AllCompanies from "./pages/admin/AllCompanies";
import AddCategory from "./pages/admin/AddCategory";
import CategoriesList from "./pages/admin/CategoriesList";
import AllUsers from "./pages/admin/AllUsers";
import AllApplications from "./pages/admin/AllApplications";
import Jobs from "./pages/admin/Jobs";



const App = () => {
  const location = useLocation();
  const adminPath = location.pathname.includes("admin");
  const employerPath = location.pathname.includes("employer");

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Show Navbar only if not admin or employer path */}
      {!adminPath && !employerPath && <Navbar />}

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/all-jobs" element={<AllJobs />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* User Pages */}
        <Route path="/my-application" element={<MyApplication />} />
        <Route path="/profile" element={<Profile />} />

        {/* Employer Pages with nested routes */}
        <Route path="/employer" element={<EmployerLayout />}>
          <Route index element={<CompaniesList />} />
          <Route path="add-company" element={<AddCompany />} />
          <Route path="post-job" element={<PostJob />} />
          <Route path="jobs-list" element={<JobsList />} />
          <Route path="applicants" element={<Applicants />} />
        </Route>

        {/* Admin Pages */}
        <Route path="/admin" element={<Adminlayout />}>
          <Route index element={<CategoriesList />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="all-companies" element={<AllCompanies />} />
          <Route path="all-applications" element={<AllApplications />} />
          <Route path="all-users" element={<AllUsers />} />
          <Route path="jobs" element={<Jobs />} />
        </Route>
      </Routes>

      {/* Show Footer only if not admin or employer path */}
      {!adminPath && !employerPath && <Footer />}

      {/* Toast notifications */}
      <Toaster />
    </div>
  );
};

export default App;
