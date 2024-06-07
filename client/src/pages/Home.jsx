import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const useTypingAnimation = (targetText, charDelay) => {
  const [text, setText] = useState('');

  useEffect(() => {
    let timeoutId;

    const animateText = async () => {
      for (let i = 0; i <= targetText.length; i++) {
        await new Promise(resolve => {
          timeoutId = setTimeout(() => {
            setText(targetText.substring(0, i));
            resolve();
          }, charDelay);
        });
      }
    };

    animateText();

    return () => clearTimeout(timeoutId);
  }, [targetText, charDelay]);

  return text;
};

const Home = () => {
  const animatedHeaderText = useTypingAnimation('Welcome to MeetCode', 80);
  const animatedSubheaderText = useTypingAnimation('Sharpen your coding skills and solve challenges!', 80);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Navbar inside */}
      <div
        className="w-full h-full bg-cover bg-center relative"
        style={{ backgroundImage: `url('/istockphoto-1075599562-1024x1024.jpg')` }}
      >

        {/* Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <header>
            <h1 className="text-4xl font-bold text-white">{animatedHeaderText}</h1>
            <p className="mt-2 text-gray-100">{animatedSubheaderText}</p>
          </header>
          <section className="mt-8 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
            <p className="text-gray-700 mb-4">
              Join the coding community and enhance your programming skills.
            </p>
            <Link to="/signup">
              <button className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none">
                Sign Up for Free
              </button>
            </Link>
          </section>
        </div>

        {/* Login Link */}
        <div className="absolute top-4 right-4">
          <Link
            to="/login"
            className="text-white text-lg font-semibold underline border border-white rounded px-4 py-2 hover:bg-gray-700 hover:border-gray-700 transition-all duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
