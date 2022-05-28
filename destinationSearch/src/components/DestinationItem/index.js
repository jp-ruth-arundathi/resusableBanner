import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props

    const {name, imgUrl} = destinationDetails

    return (
      <li className="items-container">
        <img src={imgUrl} className="img-size" alt={name} />
        <p className="city-name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
