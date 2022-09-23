import React from 'react'
import {NewPredictionForm} from './NewPredictionForm';
import { weatherApi } from '../rest/MockApi';

import {CloudSelect} from './CloudSelect';

export class PredicitonsList extends React.Component {
 state = {
   clouds: []
 };

 componentDidMount () {
    this.fetchClouds();
 };

//  GET method to make data request
 fetchClouds = async () => {
    const clouds = await weatherApi.get();
    this.setState ({clouds});
 };

 //  PUT method to update data and state
 updateCloud = async (updatedCloud) => {
    await weatherApi.put(updatedCloud);
    this.fetchClouds();
 };

 render() {
   return (
       //className to do CSS styling
       <div className="cloudlistmain">
      
           <div className="cloud-list">
               <h2> Clouds We've Picked</h2>
               {this.state.clouds.map((cloud) => (
                   <NewPredictionForm
                       cloud = {cloud}
                       key={cloud._id}
                       updateCloud={this.updateCloud}
                       />
               ))}
           </div>
       </div>
   )
}
}

