import React from 'react'

class HoneyShow extends React.Component {
  constructor(props){
    super(props)
    const foundHoney = this.props.honeyData.honey.find((honeyObj) => honeyObj.id == this.props.match.params.id)
    console.log('found honey:', foundHoney)
    this.state = {honey: foundHoney}

  }

  render(){
    const {locations, name, address, phone} = this.state.honey

    const honeyJsx = (
      <React.Fragment>
        <h3>{name}</h3>
        <p>{address}</p>
        <p>{phone}</p>
        <ul>
          <div className='bee'><h4>Retail locations:</h4>
            {locations && locations.map((loc, i2) => (
              <li className='bee' key={i2}>
                <p>{loc.name}</p>
                <p>{loc.address}</p>
                <p>{loc.phone}</p>
              </li>
            ))}
          </div>
        </ul>
      </React.Fragment>
    )

    return (
      <React.Fragment>
        {honeyJsx}
      </React.Fragment>
    )
  }
}

export default HoneyShow
