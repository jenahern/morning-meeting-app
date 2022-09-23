import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import AllPredictions from "./components/AllPredictions";
import PredictionsInCategory from "./components/PredictionsInCategory";
import NewPredictionForm from "./components/NewPredictionForm";
import Sidebar from "./components/Sidebar";
import Calendar2 from "./components/Calendar2";
import 'react-calendar/dist/Calendar.css';
import './App.css';

export default function App() {
  // testing data
  const [predictionList, setPredictionList] = useState([
    {
      id: 0,
      description: "The greatest day!",
      cloud: 2,
    },
    {
      id: 1,
      description: "A rainy one.",
      cloud: 4,
    },
  ]);

  const navigate = useNavigate();

  const addPrediction = (newPrediction) => {
    newPrediction = {
      ...newPrediction,
      id: predictionList[predictionList.length - 1].id + 1,
    }; // hack from Natalie
    setPredictionList([...predictionList, newPrediction]);
    // setPredictionList (predictionList.concat(newPrediction))   class setup
    navigate("/");
  };

  return (
    <div className="container-md m-2 border shadow">
      <div className="row-md">
        <div className="col-md">
          <Calendar2 />
        </div>

        <div className="predictions/new">
          <Routes>
            <Route
              path="/"
              element={<NewPredictionForm onSubmit={addPrediction} />}
            />
            <Route
              path="/"
              element={<AllPredictions predictionList={predictionList} />}
            />
            <Route
              path="predictions/:category"
              element={
                <PredictionsInCategory predictionList={predictionList} />
              }
            />
          </Routes>
          <div className="mt-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
