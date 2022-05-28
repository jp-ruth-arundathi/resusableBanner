import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isMode: true}

  onModeClick = () => {
    this.setState(prevState => ({isMode: !prevState.isMode}))
  }

  render() {
    const {isMode} = this.state

    return isMode ? (
      <div className="bg-container">
        <div className="container container-dark">
          <h1 className="heading heading-light">Click To Change Mode</h1>
          <div>
            <button
              type="button"
              className="mode-btn"
              onClick={this.onModeClick}
            >
              Light Mode
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div className="bg-container">
        <div className="container container-light">
          <h1 className="haeding heading-dark">Click To Change Mode</h1>
          <div>
            <button
              type="button"
              className="mode-btn"
              onClick={this.onModeClick}
            >
              Dark Mode
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
