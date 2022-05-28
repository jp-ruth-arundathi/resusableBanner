// Write your code here
import {Component} from 'react'

import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tails: 0, heads: 0, imgUrl: headsUrl}

  onClickTossButton = () => {
    const {heads, tails} = this.state

    const tossResult = Math.floor(Math.random() * 2)

    let tossImage = ''
    let headsCount = heads
    let tailsCount = tails

    if (tossResult === 0) {
      headsCount += 1
      tossImage = headsUrl
    } else {
      tailsCount += 1
      tossImage = tailsUrl
    }
    this.setState({heads: headsCount, tails: tailsCount, imgUrl: tossImage})
  }

  render() {
    const {heads, tails, imgUrl} = this.state

    const total = heads + tails

    return (
      <div className="app-container">
        <div className="game-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="game-desc">Heads (or) Tails</p>
          <img src={imgUrl} className="img-size" alt="toss result" />
          <button
            type="button"
            className="btn"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="total">Total:{total}</p>
            <p className="total">Heads:{heads}</p>
            <p className="total">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
