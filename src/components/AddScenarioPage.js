import React, { useState } from "react";
import axios from 'axios';
import Navbar from "./Navbar";
import { Form } from "semantic-ui-react";

export default function AddScenarioPage() {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');

  const postData = ()=> {
    axios.post(`https://64646577043c103502b8a68b.mockapi.io/ScenarioAdd`, {
      name,
      time
    })
  }
  return (
    <div className="mainContainer">
      <Navbar />
      <section className="scenario">
      <Form className="create-form">
          <h3>Scenario / add</h3><br />
          <div className="addSection">
            <br />
            <h2>Add Scenario</h2>
          </div>
          <div className="scenarioColumn grid">
          <Form.Field>
                <h4>Scenario Name</h4>
                <input type="text" placeholder="Test Scenario" onChange={(e)=>setName(e.target.value)} value={name}/>
                </Form.Field>
                <Form.Field>
                <h4>Scenario Time(seconds)</h4>
                <input type="number" placeholder="10" onChange={(e)=>setTime(e.target.value)} value={time}/>
                </Form.Field>
          </div>
          <div className="buttonSection">
            <button className="green add" type="submit" onClick={postData}>Add</button>
            <button className="orange reset" type="reset">Reset</button>
            <button className="blue">Go Back</button>
          </div>
          </Form>
      </section>
    </div>
  );
}
