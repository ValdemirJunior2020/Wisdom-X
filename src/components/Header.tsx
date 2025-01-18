import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Wisdom X Foundation Logo"
            className="h-12 w-12 mr-4"
          />
          <h1 className="text-2xl font-bold">Wisdom X Stroke Foundation</h1>
        </div>

        {/* Navigation Section */}
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a
                href="/donate"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Donate
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
