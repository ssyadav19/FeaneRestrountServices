import React from "react";

const BookTable = () => {
  return (
    <section className="py-10 bg-white book-table">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-start mt-16 mb-10">
          <h2 className="text-[42px] font-bold text-black dancing-script">
            Book A Table
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <form className="space-y-4 h-[370px] flex flex-col justify-between">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input w-full border border-gray-300 p-3 rounded-md"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="form-input w-full border border-gray-300 p-3 rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="form-input w-full border border-gray-300 p-3 rounded-md"
              />
              <select
                name="person"
                className="form-select w-full border border-gray-300 p-3 rounded-md"
              >
                <option disabled selected>
                  How many persons?
                </option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <input
                type="date"
                className="form-input w-full border border-gray-300 p-3 rounded-md"
              />
            </form>
          </div>

          {/* Map Section */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md h-[370px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.3221370758603!2d77.45680183364716!3d23.268962837834138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6967f58e0dbf%3A0x65d0724cf8368e2d!2sRICR%20-%20Raj%20Institute%20of%20Coding%20%26%20Robotics%20%7C%20Best%20Java%20Coding%20Classes%20In%20Bhopal!5e0!3m2!1sen!2sin!4v1742477990295!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10 text-left md:pl-0 md:w-1/2">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2.5 px-10 rounded-full transition">
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookTable;
