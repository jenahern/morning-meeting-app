import React, { useState } from "react";
import CloudSelect from "./CloudSelect";
import Card from "react-bootstrap/Card";
// import { weatherApi } from '../rest/MockApi';

export default function NewPredictionForm({ onSubmit }) {
  const [cloudValue, setCloudValue] = useState(1);
  const [descriptionValue, setDescriptionValue] = useState("");

  const handleDescriptionChange = (event) => setDescriptionValue(event.target.value);

  const handleCloudChange = (newCloud) => setCloudValue(newCloud);

  const handleSubmit = (e) => {
    e.preventDefault();

    // weatherApi.post(cloudValue);
    onSubmit({
      cloud: cloudValue,
      description: descriptionValue,
      // setCloudValue(0);
      // setDescriptionValue('');
    });
  };

  return (
    <div>
      <Card body className="date-card text-center mt-4">
        <h4>Today's Weather</h4>
        <form>
          <label className="m-2">What does Today's Weather look like?</label>
          <CloudSelect value={cloudValue} onChange={handleCloudChange} />
          <br></br>
          <label className="m-2">
            What does Today's Weather feel like?
          </label>
          
          <input
            type="text"
            placeholder="Today it is warm."
            value={descriptionValue}
            onChange={handleDescriptionChange}
          />
          <br></br>
          <button className="m-2 btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
          {console.log(cloudValue, descriptionValue)}
        </form>
      </Card>
    </div>
  );
}
