import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import { Link, Outlet } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Adminlayout = () => {
  const { navigate, setAdmin, axios } = useContext(AppContext);

  const sidebarLinks = [
    { name: "Categories", path: "/admin" },
    { name: "Add category", path: "/admin/add-category" },
    { name: "Companies", path: "/admin/all-companies" },
    { name: "Applications", path: "/admin/all-applications" },
    { name: "All users", path: "/admin/all-users" },
    { name: " Jobs", path: "/admin/jobs" },
  ];

  const logout = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/auth/logout",
        {},
        { withCredentials: true }
      );

      if (data.success) {
        setAdmin(false);
        navigate("/");
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Logout failed");
    }
  };


  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <Link to="/employer">
          <img src={assets.logo} alt="Logo" className="h-9" />
        </Link>

        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button
            onClick= {logout}
            className='border rounded-full text-sm px-4 py-1'
          >
            Logout
          </button>
        </div>
      </div>

      {/* Layout Body */}
      <div className="flex">
        {/* Sidebar */}
        <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-6 flex-col transition-all duration-300">
          {sidebarLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-4 p-3 transition-all duration-300
                ${index === 0
                  ? "border-r-4 md:border-r-[4px] bg-indigo-500/10 border-indigo-500 text-indigo-500"
                  : "hover:bg-gray-100/90 text-gray-700"
                }
              `}
            >
              <p className="md:block hidden text-center">{item.name}</p>
            </Link>
          ))}
        </div>

        {/* Nested Pages */}
        <Outlet />
      </div>
    </>
  );
};

export default Adminlayout;
