import React from "react";

export default function Navbar() {
  return (
    <>
      <aside className="navBar">
        <div className="navText"><a href="/">Home</a></div>
        <div className="navText"><a href="/addScenario">Add Scenario</a></div>
        <div className="navText"><a href="/allScenarios">All Scenarios</a></div>
        <div className="navText"><a href="/addVehicle">Add Vehicle</a></div>
      </aside>
    </>
  );
}
