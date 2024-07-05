import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Room5 = () => {
  const [codeInput, setCodeInput] = useState("");
  const [isCodeCorrect, setIsCodeCorrect] = useState(null);
  const [showCongratulations, setShowCongratulations] = useState(false);

  const handleCodeInputChange = (event) => {
    setCodeInput(event.target.value);
  };

  const verifyCode = () => {
    const isCorrect =
      codeInput.includes("useEffect") &&
      codeInput.includes("fetch") &&
      codeInput.includes("useState");

    setIsCodeCorrect(isCorrect);

    if (isCorrect) {
      setShowCongratulations(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white pt-16">
      <Navbar />
      <div className="p-8 text-center relative z-0">
        <h1 className="text-2xl font-bold mb-4 text-blue-400 animate-pulse">
          Room 5: Hooks and Data Fetching
        </h1>
        <p className="mb-4">
          Welcome to Room 5! Here, you'll dive into hooks and data fetching in
          React.
        </p>
        <div className="bg-gray-800 p-4 shadow rounded mb-4">
          <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
          <ol className="list-decimal list-inside">
            <li className="mb-2">
              Create a component that uses hooks and fetches data.
            </li>
            <li className="mb-2">
              Use the <code>useState</code> hook to manage state.
            </li>
            <li className="mb-2">
              Enter your code in the editor below and click "Verify".
            </li>
          </ol>
        </div>
        <div className="bg-gray-800 p-4 shadow rounded mb-4">
          <h2 className="text-xl font-semibold mb-2">Code Editor:</h2>
          <textarea
            rows="10"
            value={codeInput}
            onChange={handleCodeInputChange}
            className="bg-gray-900 text-white p-2 rounded w-full resize-none"
            placeholder={`// Write your code here`}
          ></textarea>
          <button
            onClick={verifyCode}
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
          >
            Verify
          </button>
        </div>
        {isCodeCorrect === false && (
          <p className="text-red-400 mb-4">Incorrect code. Please try again.</p>
        )}
        {showCongratulations && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-80 z-50">
            <div className="bg-green-600 text-white px-4 py-6 rounded">
              <p className="mb-2">Congratulations, you completed all rooms!</p>
              <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded">
                Go to Home Screen
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Room5;
