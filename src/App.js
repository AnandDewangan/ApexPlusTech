import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddScenarioPage from "./components/AddScenarioPage";
import AllScenarios from "./components/AllScenarios";
import AddVehicle from "./components/AddVehicle";
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addScenario' element={<AddScenarioPage/>} />
        <Route path='/allScenarios' element={<AllScenarios/>} />
        <Route path='/addVehicle' element={<AddVehicle/>} />
      </Routes>
    </BrowserRouter>
  );
}
