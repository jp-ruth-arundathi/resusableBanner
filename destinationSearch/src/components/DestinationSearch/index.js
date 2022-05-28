import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Destination Search</h1>
          <div className="bg-search">
            <input
              type="search"
              className="search-input"
              placeholder="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="image-search"
              alt="search icon"
            />
          </div>
          <ul className="display-list-items">
            {searchResults.map(each => (
              <DestinationItem key={each.id} destinationDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
