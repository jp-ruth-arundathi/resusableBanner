import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickIncrement = () => {
    const number = Math.ceil(Math.random() * 100)

    this.setState(prevState => ({count: prevState.count + number}))
  }

  render() {
    const {count} = this.state

    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <h1 className="heading">
          Count <span className="heading">{count}</span>
        </h1>
        <p className="result">Count is {displayText}</p>
        <div>
          <button type="button" className="btn" onClick={this.onClickIncrement}>
            Increment
          </button>
        </div>
        <p className="inst-para">*Increase by Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
