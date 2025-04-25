import React from "react";
import "./App.css";
import IrrigationChart from "./components/IrrigationChart";

function App() {
  return (
    <div className="App">
      <div className="bg-[#03b6fc] h-[80vh] ">
        <h1 className="text-3xl font-semibold text-white  pt-12 mb-12">
          Irrigation Management System
        </h1>
        <div className="px-32">
          <IrrigationChart />
        </div>
      </div>
    </div>
  );
}

export default App;
