import React from 'react'
import { Route, Link } from 'react-router-dom'

const HoneyIndex = (props) => {
  const honeyJsx = props.honeyData.honey.map((honey, i) => (
    <React.Fragment key={i}>
      <Link to={`/honey/${honey.id}/show`}>{honey.name} </Link>
    </React.Fragment>
  ))

  return (
    <div>
      <h2>All the honey</h2>
      <ul>
        {honeyJsx}
      </ul>
    </div>
  )
}

export default HoneyIndex
