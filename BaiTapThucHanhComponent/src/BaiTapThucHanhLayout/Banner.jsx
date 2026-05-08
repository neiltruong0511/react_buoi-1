import React from "react"

const Banner = () => {
  return (
    <section className="w-full px-12 mt-8">
      
      <div className="bg-[#f1f1f1] rounded-md py-24 px-10 text-center">
        
        <h1 className="text-6xl font-bold text-[#212529] mb-6">
          A warm welcome!
        </h1>

        <p className="text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
          Bootstrap utility classes are used to create this
          jumbotron since the old component has been removed
          from the framework. Why create custom CSS when you
          can use utilities?
        </p>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md text-lg transition">
          Call to action
        </button>

      </div>

    </section>
  )
}

export default Banner