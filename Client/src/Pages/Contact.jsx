import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const AboutDeveloper = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-4xl p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg border border-gray-200">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img
              className="w-32 h-32 rounded-full object-cover"
              src="/satyam.png"
              alt="Profile"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              SATYAM UPADHYAY
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Full Stack Developer | Passionate about creating interactive
              applications and experiences on the web.
            </p>
            <p className="text-lg text-gray-600 mt-2">
              Hi, I'm Satyam Upadhyay, a passionate Full Stack Developer with a
              keen interest in building robust web applications. Thank you for
              visiting our website! We hope you find the resources and
              information you're looking for.
            </p>
            <div className="mt-4 flex space-x-3">
              <a
                href="https://github.com/Satyam00915"
                className="text-gray-800 hover:text-blue-600 transition"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://linkedin.com/in/satyam0915"
                className="text-gray-800 hover:text-blue-600 transition"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://x.com/SatyamUpad2970"
                className="text-gray-800 hover:text-blue-600 transition"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://instagram.com/_satyam_915/"
                className="text-gray-800 hover:text-blue-600 transition"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
            <div className="mt-6">
              <a
                href="https://satyam915-portfolio.netlify.app/"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
              >
                View My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDeveloper;
