import React from 'react'
import honeyData from './honeyData.json'

const HoneyIndex = () => {
  const honeyJsx = honeyData.honey.map((honey, i) => (
    <div key={i}>
      <h3>{honey.name}</h3>
      <p>{honey.address}</p>
      <p>{honey.phone}</p>
      <div><h4>Retail locations:</h4>{
        honey['retail locations'].map((loc, i2) => (
          <div key={i2}>
            <p>{loc.name}</p>
            <p>{loc.address}</p>
            <p>{loc.phone}</p>
          </div>
        ))
      }
      </div>
    </div>
  ))

  return (
    <div>
      <h2>Hey yo</h2>
      {honeyJsx}
    </div>
  )
}

export default HoneyIndex
