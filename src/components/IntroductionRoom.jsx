import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const IntroductionRoom = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white pt-16">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow p-8 text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-400 animate-pulse">
          Welcome to the Codeventure! <br /> A React Coding Game
        </h1>
        <p className="mb-4">
          We have 5 Rooms (Questions). Solve these questions to test your
          knowledge in React.
        </p>
        <p className="mb-4">Follow these steps to get started:</p>
        <ol className="list-decimal list-inside mb-4">
          <li>Initialize a React project using Vite.</li>
          <li>
            Install Tailwind CSS and set up the configuration. (If you want)
          </li>
        </ol>
        <p className="mb-4">
          Once you have completed these steps, click the button below to proceed
          to the first room.
        </p>
        <Link to="/room1" className="bg-blue-600 text-white px-4 py-2 rounded">
          Proceed to Room 1
        </Link>
      </div>
      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-2 text-center">
        <p className="text-lg font-bold">Credits to Mohit Patil</p>
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Visit Portfolio
        </a>
      </footer>
    </div>
  );
};

export default IntroductionRoom;
