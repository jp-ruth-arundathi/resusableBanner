import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChangeCount = event => {
    const {value} = event.target
    this.setState({count: value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img-size"
          />
        </div>
        <div className="text-container">
          <h1 className="heading">Calculate the letters you enter</h1>
          <div className="letters-count-container">
            <label htmlFor="input-letters" className="label-text">
              Enter the Phrase
            </label>
            <input
              type="text"
              id="input-letters"
              className="input-text"
              onChange={this.onChangeCount}
            />
          </div>
          <p className="letters-count">No.of letters: {count.length}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
