import React from 'react'
import CloudView from './CloudView'

export default function AllPredictions({ predictionList }) {
  return (
    <div>
      { predictionList.map(prediction => 
        <div key={prediction.id}>
          <CloudView cloud={prediction.cloud}/>
        </div>
      )}
    </div>
  )
}