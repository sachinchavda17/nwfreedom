import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} NW Freedom. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-200">
            Terms of Service
          </a>
          {/* Add more footer links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
