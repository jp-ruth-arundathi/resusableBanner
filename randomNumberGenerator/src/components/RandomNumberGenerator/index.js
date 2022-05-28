import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClickGenerateNumber = () => {
    const number = Math.ceil(Math.random() * 100)

    this.setState({count: number})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="random-container">
          <h1 className="heading">Random Number</h1>
          <p className="desc">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              type="button"
              className="generate-btn"
              onClick={this.onClickGenerateNumber}
            >
              Generate
            </button>
            <p className="count-num">{count}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
