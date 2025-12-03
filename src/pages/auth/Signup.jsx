import React, { useState, useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Signup = () => {
  const { axios } = useContext(AppContext); // only axios from context
  const navigate = useNavigate(); // useNavigate hook

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const key = e.target.id || e.target.name;
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("password", formData.password);
      formPayload.append("role", formData.role);
      formPayload.append("image", formData.image);

      const { data } = await axios.post(
        "http://localhost:5000/auth/signup",
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-500 max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Signup Now
        </h2>

        {/* Image upload + preview */}
        <div className="w-full my-4">
          {preview && (
            <div className="mb-3 flex justify-center">
              <img
                src={preview}
                alt="avatar"
                className="w-40 h-40 object-cover rounded-full border shadow"
              />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100 cursor-pointer"
          />
        </div>

        <input
          id="name"
          className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <input
          id="email"
          className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          required
        >
          <option value="">Select your Role</option>
          <option value="student">Student</option>
          <option value="employer">Employer</option>
        </select>

        <input
          id="password"
          className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        <button
          type="submit"
          className="w-full my-5 bg-blue-600 hover:bg-blue-700 active:scale-95 transition py-2.5 rounded-full text-white"
        >
          Signup
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
