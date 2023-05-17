import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { IoIosAddCircle } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import axios from "axios";

export default function AllScenarios() {
  const [apiData, setApiData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(`https://64646577043c103502b8a68b.mockapi.io/ScenarioAdd`)
      .then((res) => {
        setApiData(res.data);
      });
  }, []);

  const setData = (data) => {
    console.log(data);
  }
  return (
    <div className="mainContainer">
      <Navbar />
      <section className="scenario">
        <div className="container">
          <div className="allScenarios">
            <div className="scenariosHeading">
              <h2>All Scenarios</h2>
            </div>
            <div>
              <button className="blue">New Scenario</button>
              <button className="green">Add Vehicle</button>
              <button className="orange" type="reset">
                Delete All
              </button>
            </div>
          </div>
          <table
            className="allScenarioBox"
            cellPadding="20px"
            cellSpacing="20px"
          >
            <thead>
              <tr>
                <th>Scenario Id</th>
                <th>Scenario Name</th>
                <th>Scenario Time</th>
                <th>Number of Vehicles</th>
                <th>Add Vehicle</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody align="center">
              {apiData.map((data) => {
                return (
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.time}s</td>
                    <td>{count}</td>
                    <td onClick={()=>{setCount(count+1)}}>
                      <IoIosAddCircle />
                    </td>
                    <td onClick={()=>setData(data)}>
                      <MdModeEdit />
                    </td>
                    <td>
                      <RiDeleteBin6Fill />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
