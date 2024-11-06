import { useState } from "react";
import "./App.css";

import P from "../src/assets/pr.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="mockup-browser border-base-300 border w-full max-w-3xl">
      <div className="mockup-browser-toolbar">
        <div className="input border-base-300 border">Profile Pratthida</div>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row items-center justify-center">
          <img
            src={P}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Profile"
          />
          <div>
            <h1 className="text-5xl font-bold text-warning-content text-center lg:text-left">
              Pratthida Longsa
            </h1>
            <div className="flex justify-center my-4">
              <progress className="progress w-56"></progress>
            </div>
            <div className="text-warning-content text-center lg:text-left">
              <p>Hello! My name is Pratthida. I am currently a 3rd year student.</p>
              <p>Sripatum University | IT Student | Major in Computer Engineering</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 py-6 text-warning-content">
        <h2 className="text-2xl font-semibold">Profile</h2>
        <hr />
        <p>Age: 23 years</p>
        <p>Date of birth: 4 August 2001</p>
      </div>
      <div className="px-10 py-6 text-warning-content">
        <h2 className="text-2xl font-semibold">Education</h2>
        <hr />
        <p>Watbangpleeyainai School</p>
        <p>Bangpleeratbamrung School</p>
        <p>Sripatum University | IT Student | Major in Computer Engineering</p>
      </div>
      <div className="px-10 py-6 text-warning-content">
        <h2 className="text-2xl font-semibold">Motto of the heart</h2>
        <hr />
        <p>Nothing is worth if you are not happy</p>
        <p>( ไม่มีสิ่งใดคุ้มค่ามากพอ หากคุณไม่มีความสุขกับมัน)</p>
      </div>
      <div className="px-10 py-6 flex justify-center">
        <progress className="progress w-full max-w-xs"></progress>
      </div>
    </div>
  </div>
  );
}

export default App;
