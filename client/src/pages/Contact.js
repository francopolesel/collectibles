import React from "react";
import { LinkedinIcon, GithubIcon, MailIcon } from "lucide-react";
import francoPolesel from "../images/franco-polesel.png";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contact Me
        </h2>
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img
              src={francoPolesel}
              alt="Franco Paul Polesel"
              className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4 md:mb-0 md:mr-8 object-cover"
            />
            <div>
              <h3 className="text-3xl font-semibold mb-2 text-gray-800">
                Franco Paul Polesel
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Creator of this Collectible. Feel free to connect, check out my
                work, or drop me an email through the links below.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:francopolesel99@gmail.com"
                  className="flex items-center text-green-600 hover:text-green-800 transition-colors duration-300"
                >
                  <MailIcon size={24} className="mr-2" />
                  <span>Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/franco-paul-polesel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <LinkedinIcon size={24} className="mr-2" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/francopolesel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300"
                >
                  <GithubIcon size={24} className="mr-2" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
