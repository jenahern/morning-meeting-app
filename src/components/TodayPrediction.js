import React, { Component } from 'react'

import { NewPredictionForm } from "./NewPredictionForm";

export const Prediction = (props) => {
  //  deconstruct the props to get an update -- prediction, all the data that reps the prediction, updatePrediction, the method to update it
  const { prediction, updatePrediction } = props;

  const deletePrediction = (cloudId) => {
    //when deleting a cloud updating a prediction, the updated prediction to the results that come back when filter out the cloud that has a matching id. Will use filter method on the array.
    const updatedPrediction = {
      ...prediction
      clouds: prediction.clouds.filter((x) => x._id !== cloudId),
    };
    updateprediction(updatedprediction);
  };

  const addNewPrediction = (cloud) =>
   //create a new array using spread. Insteading a pushing to cloud list, want to get a new object/array, not modify it. Create a new array, spread from the predictions, and adding the new cloud
   // -- takes all the values from the old array and adds a new room to it. Removed the return since it will automatically returned bc we used the fat arrow.
    updateprediction({ ...prediction, clouds: [...prediction.clouds, cloud] });

         //function to check if the room name is null or empty
         const checkPredictionCloud = (cloud) => {
            console.log("checkCloud", cloud);
            if (cloud === null || cloud === "") {
                return "";
            } else {
                return cloud.value;
            }
        };
      
        //function to check if the text area is null or empty
        const checkPredictionText = (textarea) => {
        //If the textarea area is null or empty return an empty string
            if (textarea === null || textarea === "") {
                return "";
             }
        //If the room area is not null or empty return the room area
            else {
            return cloud.textarea;
        }
      };

};

const cloud = () => (
  <ul className="todayprediction">
      {prediction.clouds.map((cloud, index) => (
          <ul key={index}>
              {console.log(prediction.clouds)}
                  <label className="cloud">{`${checkRoomName(room)}`}</label> <br/>
                  <label className="text">{`Area: ${checkRoomArea(room)} square feet`}
              </label>
              <button className="btn btn-outline-secondary" onClick={(e) => deleteRoom(room._id)}>Delete</button>
          </ul>
      ))}
  </ul>
);

return (
  <div className="predictionname container shadow mb-4">
       <h3> Home Name: </h3>
           <div className="predictionname-name">
               <h4>{prediction.name}</h4>
           </div>

       {
           //cloud is a function, passing props (what's inside the ({})). The props are all the cloud, the prediction id, and deleteRoom
           cloud({ cloud, predictionId: prediction._id, deleteRoom})
       }
       <NewRoomForm addNewRoom={addNewRoom} />
  </div> 
);
};
