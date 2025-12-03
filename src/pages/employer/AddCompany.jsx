import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const AddCompany = () => {
  const { navigate } = useContext(AppContext);

  const [companyData, setCompanyData] = useState({
    name: "",
    about: "",
    logo: null,
  });

  
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];  
    setCompanyData({ ...companyData, logo: selectedFile });

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("companyData:", companyData);
    navigate("/employer");
  };

  return (
    <div className="flex items-center max-w-4xl w-full mx-auto">
      <form
        onSubmit={handleSubmit}
        className="w-full p-6 bg-white rounded-lg shadow-md text-gray-500 mx-4 md:p-6 text-sm shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-2xl font-medium text-gray-800">
          Register a new Company{" "}
        </h2>

        <div className="w-full my-4">
          {preview && (
            <div className="mb-3 flex justify-center">
              <img
                src={preview}
                alt=""
                className="w-24 h-24 object-cover rounded-full border-shadow"
              />
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
            file:rounded-full file:border-0 file:text-sm file:font-semibold 
            file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <label htmlFor = "name" 
       >Company Name</label> 
       <input type = "text" value = {companyData.name} 
       onChange = {handleChange} 
       name = "name" 
       placeholder = "Enter Name"
       className = "w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4  "
       />

       <div className ="mb-4">
        <label htmlFor = "about" 
       >About</label>
       <textarea
       rows = "4"
       value = {companyData.about}
       onChange = {handleChange}
       name = "about"
       placeholder = "Enter About"
       className = "w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4 "
       ></textarea>
        
       </div>
       <button
       type = "submit"
       className = " w-full my-3 bg-primary active:scale-95 transition py-2.5 rounded text-white "  
        >
       Add Company 
       </button>

      </form>
    </div>
  );
};

export default AddCompany;
