import React from 'react'

const Testimonial = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-50">
       
        <div className="w-[320px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200">
          <div className="bg-pink-100 p-4 flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Donald Jackman"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-800 text-[15px]">Donald Jackman</h3>
              <p className="text-sm text-gray-600">Content Creator</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-3 text-red-500 text-lg">
              <span>★★★★★</span>
            </div>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              I've been using Imagify for nearly two years, primarily for Instagram, and it has been
              incredibly user-friendly, making my work much easier.
            </p>
            <a href="#" className="text-sm font-medium text-red-500 hover:underline">
              Read more
            </a>
          </div>
        </div>

        
        <div className="w-[320px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200">
          <div className="bg-pink-100 p-4 flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Emily Clark"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-800 text-[15px]">Emily Clark</h3>
              <p className="text-sm text-gray-600">Instagram Influencer</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-3 text-red-500 text-lg">
              <span>★★★★★</span>
            </div>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              I've been using Imagify for nearly two years, primarily for Instagram, and it has been
              incredibly user-friendly, making my work much easier.
            </p>
            <a href="#" className="text-sm font-medium text-red-500 hover:underline">
              Read more
            </a>
          </div>
        </div>

     
        <div className="w-[320px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200">
          <div className="bg-pink-100 p-4 flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Sophia Brown"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-800 text-[15px]">Sophia Brown</h3>
              <p className="text-sm text-gray-600">Digital Content Creator</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-3 text-red-500 text-lg">
              <span>★★★★★</span>
            </div>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              I've been using Imagify for nearly two years, primarily for Instagram, and it has been
              incredibly user-friendly, making my work much easier.
            </p>
            <a href="#" className="text-sm font-medium text-red-500 hover:underline">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
