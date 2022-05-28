import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  clickButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button Has Been Clicked
          <span className="number"> {count} </span>times
        </h1>
        <p className="instruction">Click the Button to increase the Count</p>
        <div>
          <button
            className="click-btn"
            type="button"
            onClick={this.clickButton}
          >
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
