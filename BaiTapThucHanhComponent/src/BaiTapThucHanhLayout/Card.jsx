import React from "react"

const Card = ({ icon, title, desc }) => {
  return (
    <div className="bg-[#f8f9fa] rounded-md p-10 text-center relative">

      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <div className="w-14 h-14 bg-blue-500 rounded-md flex items-center justify-center text-white text-2xl shadow-md">
          {icon}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold text-[#212529] mb-4">
          {title}
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          {desc}
        </p>
      </div>

    </div>
  )
}

export default Card