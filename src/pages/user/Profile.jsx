import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { toast } from "react-hot-toast";   

const Profile = () => {
  const { user, axios, setUser } = useContext(AppContext); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    education: "",
    experience: "",
    skills: "",
    about: "",
    profileImage: null,
    resume: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
      if (name === "profileImage") {
        setPreview(URL.createObjectURL(files[0]));
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone,
        location: user.location,
        education: user.education,
        experience: user.experience,
        skills: user.skills,
        about: user.about,
        resume: user.resume,
        profileImage: user.image,
      });
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("location", formData.location);
      formPayload.append("education", formData.education);
      formPayload.append("experience", formData.experience);
      formPayload.append("skills", formData.skills);
      formPayload.append("about", formData.about);
      if (formData.resume) formPayload.append("resume", formData.resume);
      if (formData.profileImage && formData.profileImage instanceof File) {
        formPayload.append("profileImage", formData.profileImage);
      }

      const { data } = await axios.put(
        `http://localhost:5000/user/update-profile/${user._id}`,
        formPayload,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (data.success) {
        setUser(data.user);
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {preview && (
          <div>
            <img src={preview} alt="Preview" className="w-32 h-32 rounded-full object-cover" />
          </div>
        )}

        {!preview && formData.profileImage && (
          <div>
            <img
              src={`http://localhost:5000/uploads/${formData.profileImage.replace(/^\/?uploads\//, 'uploads/')}`}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
        )}

        <div>
          <label className="block text-gray-700 font-medium mb-2">Profile Picture</label>
          <input type="file" name="profileImage" onChange={handleChange} />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border rounded p-2" required />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded p-2 bg-gray-100" readOnly />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Phone Number</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Education</label>
          <input type="text" name="education" value={formData.education} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Experience</label>
          <input type="text" name="experience" value={formData.experience} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Skills</label>
          <textarea name="skills" value={formData.skills} onChange={handleChange} className="w-full border rounded p-2" rows="2" placeholder="React, Node.js, MongoDB" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">About Me</label>
          <textarea name="about" value={formData.about} onChange={handleChange} className="w-full border rounded p-2" rows="3" placeholder="Tell us something about yourself..." />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Resume</label>
          <input type="file" name="resume" onChange={handleChange} />

        </div>
        {formData.resume && (
          <div>
            <a href={`http://localhost:5000/uploads/${formData.resume.replace(/^\/?uploads\//, 'uploads/')}`} target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </div>
        )}

        <button type="submit" className="bg-primary text-white py-2 px-4 rounded">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
