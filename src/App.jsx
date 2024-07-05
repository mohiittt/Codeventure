import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import IntroductionRoom from "./components/IntroductionRoom";
import Room1 from "./components/Room1";
import Room2 from "./components/Room2";
import Room3 from "./components/Room3";
import Room4 from "./components/Room4";
import Room5 from "./components/Room5";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className=" min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<IntroductionRoom />} />
          <Route path="/room1" element={<Room1 />} />
          <Route path="/room2" element={<Room2 />} />
          <Route path="/room3" element={<Room3 />} />
          <Route path="/room4" element={<Room4 />} />
          <Route path="/room5" element={<Room5 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
