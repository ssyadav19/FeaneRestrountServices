import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#222831] text-white py-15">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-start text-center space-y-8 md:space-y-0 md:space-x-16">
          {/* Contact Us */}
          <div className="flex-1 space-y-4 flex flex-col items-center">
            <h4 className="text-3xl font-semibold dancing-script">
              Contact Us
            </h4>
            <div className="space-y-2">
              <p className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt /> Location
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaPhoneAlt /> Call +91 7000848019
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaEnvelope /> sapmle@gmail.com
              </p>
            </div>
          </div>

          {/* Feane Info */}
          <div className="flex-1 space-y-4 flex flex-col items-center">
            <h2 className="text-3xl font-semibold dancing-script">Feane</h2>
            <p className="max-w-md text-center text-gray-300">
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="flex justify-center space-x-4 text-lg">
              {[
                FaFacebookF,
                FaTwitter,
                FaLinkedinIn,
                FaInstagram,
                FaPinterestP,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center hover:text-yellow-500 transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex-1 space-y-4 flex flex-col items-center">
            <h4 className="text-3xl font-semibold dancing-script">
              Opening Hours
            </h4>
            <p className="text-gray-300">Everyday</p>
            <p className="text-gray-300">10.00 Am - 10.00 Pm</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-10 space-y-4 text-md text-gray-100">
          <p>© 2025 All Rights Reserved By Free Html Templates</p>
          <p>© Distributed By ThemeWagon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
