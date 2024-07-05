import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Room3 = () => {
  const [codeInput, setCodeInput] = useState("");
  const [isCodeCorrect, setIsCodeCorrect] = useState(null);

  const handleCodeInputChange = (event) => {
    setCodeInput(event.target.value);
  };

  const verifyCode = () => {
    const isCorrect =
      codeInput.includes("context") && codeInput.includes("Provider");

    setIsCodeCorrect(isCorrect);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white pt-16">
      <Navbar />
      <div className="p-8 text-center relative z-0">
        <h1 className="text-2xl font-bold mb-4 text-blue-400 animate-pulse">
          Room 3: Context API
        </h1>
        <p className="mb-4">
          Welcome to Room 3! Here, you'll explore using the Context API in
          React.
        </p>
        <div className="bg-gray-800 p-4 shadow rounded mb-4">
          <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
          <ol className="list-decimal list-inside">
            <li className="mb-2">Create a context and a provider.</li>
            <li className="mb-2">Use the context in a component.</li>
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
        {isCodeCorrect === true && (
          <p className="text-green-400 mb-4 animate-bounce">
            Code verified! Now proceed to Room 4.
          </p>
        )}
        {isCodeCorrect === false && (
          <p className="text-red-400 mb-4">Incorrect code. Please try again.</p>
        )}
        {isCodeCorrect && (
          <Link
            to="/room4"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Proceed to Room 4
          </Link>
        )}
      </div>
    </div>
  );
};

export default Room3;
