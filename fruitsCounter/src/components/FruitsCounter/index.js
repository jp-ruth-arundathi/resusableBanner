import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onClickMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onClickBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="fruit-container">
          <h1 className="heading">
            Bob ate <span className="heading count"> {mango} </span>
            mangoes <span className="heading count"> {banana} </span>bananas
          </h1>
          <div className="fruits">
            <div className="aligning">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango-image"
              />
              <div className="button">
                <button
                  className="mango-btn"
                  type="button"
                  onClick={this.onClickMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="mango-image"
              />
              <div className="button">
                <button
                  className="mango-btn"
                  type="button"
                  onClick={this.onClickBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
