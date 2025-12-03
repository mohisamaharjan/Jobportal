import React from 'react'
import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'

const AddCategory = () => {
  const { navigate } = useContext(AppContext);

  const [categoryData, setCategoryData] = useState({});
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setCategoryData({ ...categoryData, logo: selectedFile });

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("categoryData:", categoryData);
    navigate("/admin");
  };

  return (
    <div className="flex items-center max-w-4xl w-full mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-2xl font-semibold text-gray-800">
          Add New Category
        </h2>

        <div className="my-4 w-full">
          {/* Profile Image Preview */}
          {preview && (
            <div className="mb-3 flex justify-center">
              <img
                src={preview}
                alt=" Profile Preview"
                className="w-full h-48 object-cover rounded-full border shadow"
              />
            </div>
          )}

          {/* File upload input */}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-slate-500 
              file:mr-4 file:py-2 file:px-4 
              file:rounded-full file:border-0 
              file:text-sm file:font-semibold 
              file:bg-violet-50 file:text-violet-700 
              hover:file:bg-violet-100"
          />

          <label htmlFor="company">Category Name</label>
          <input
            name="name"
            value={categoryData.name || ""}
            onChange={handleChange}
            className="w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
            type="text"
            placeholder=" Enter category name"
          />
        </div>

        <button
          type="submit"
          className="w-full my-3 bg-primary active:scale-95 transition py-2.5 rounded text-white text-sm font-semibold"
        >
          Add Category
        </button>
      </form>
    </div>
  )
}

export default AddCategory
