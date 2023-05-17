import React from "react";
import Navbar from "./Navbar";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function Home() {
  return (
    <div className="mainContainer">
      <Navbar />
      <section className="scenario">
        <div className="container">
          <div>
            <h4>Scenario</h4>
            <select>
              <option value="Test Scenario">Test Scenario</option>
              <option value="My Scenario">My Scenario</option>
            </select>
          </div>
          <table
            className="allScenarioBox"
            cellPadding="20px"
            cellSpacing="20px"
          >
            <thead>
              <tr>
                <th>Vehicle Id</th>
                <th>Vehicle Name</th>
                <th>Positon X</th>
                <th>Positon Y</th>
                <th>Speed</th>
                <th>Direction</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody align="center">
              <tr>
                <td>1</td>
                <td>Bus</td>
                <td>30</td>
                <td>215</td>
                <td>3</td>
                <td>Towards</td>
                <td>
                  <MdModeEdit />
                </td>
                <td>
                  <RiDeleteBin6Fill />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Car</td>
                <td>500</td>
                <td>500</td>
                <td>5</td>
                <td>Upwards</td>
                <td>
                  <MdModeEdit />
                </td>
                <td>
                  <RiDeleteBin6Fill />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="homeButton">
            <button className="green">Start Simulation</button>
            <button className="blue">Stop Simulation</button>
          </div>
          <div className="graph">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="flex">
              <div className="col point1 flex">1</div>
            </div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div>
              <div className="col point2 flex">2</div>
            </div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
