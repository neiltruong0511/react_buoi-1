import React from "react"

const Header = () => {
  return (
    <header className="bg-[#212529] border-t-2 border-red-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-white text-xl font-medium">
          Start Bootstrap
        </h1>

        <nav>
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a href="#" className="text-white font-semibold">
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
