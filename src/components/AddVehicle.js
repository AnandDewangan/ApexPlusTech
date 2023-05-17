import React from "react";
import Navbar from "./Navbar";

export default function AddVehicle() {
  return (
    <div className="mainContainer">
      <Navbar />
      <section className="scenario">
        <div className="container">
          <h3>Vehicle / add</h3>
          <br />
          <div className="addSection">
            <br />
            <h2>Add Vehicle</h2>
          </div>
          <div className="scenarioColumn">
            <div className="vehicleColumn">
              <div>
                <h4>Scenario List</h4>
                <input type="text" placeholder="Select Scenario" list="lists" />
                <datalist id="lists">
                  <option value="Test Scenario">Test Scenario</option>
                  <option value="My Scenario">My Scenario</option>
                  <option value="Scenario ABC">Scenario ABC</option>
                </datalist>
              </div>
              <div>
                <h4>Vehicle Name</h4>
                <input type="text" placeholder="Target abc" />
              </div>
              <div>
                <h4>Speed</h4>
                <input type="text" placeholder="2" />
              </div>
            </div>
            <div>
              <div className="vehicleColumn">
                <div>
                  <h4>Position X</h4>
                  <input type="text" placeholder="1000" />
                </div>
                <div>
                  <h4>Position Y</h4>
                  <input type="text" placeholder="20" />
                </div>
                <div>
                  <h4>Direction</h4>
                  <select>
                    <option value="Towards">Towards</option>
                    <option value="Backwards">Backwards</option>
                    <option value="Upwards">Upwards</option>
                    <option value="Downwards">Downwards</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="buttonSection">
            <button className="green add">Add</button>
            <button className="orange reset" type="reset">
              Reset
            </button>
            <button className="blue back">Go Back</button>
          </div>
        </div>
      </section>
    </div>
  );
}
