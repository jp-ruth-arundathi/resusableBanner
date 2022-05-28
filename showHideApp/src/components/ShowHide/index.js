import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {showFirst: false, showSecond: false}

  onClickFirst = () => {
    this.setState(prevState => ({showFirst: !prevState.showFirst}))
  }

  onClickSecond = () => {
    this.setState(prevState => ({showSecond: !prevState.showSecond}))
  }

  render() {
    const {showFirst} = this.state
    const {showSecond} = this.state

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <div>
            <button
              className="show-hide-btn"
              type="button"
              onClick={this.onClickFirst}
            >
              show/Hide Firstname
            </button>
            {showFirst ? (
              <div className="name-container">
                <p className="name">Joe</p>
              </div>
            ) : null}
          </div>
          <div>
            <button
              className="show-hide-btn"
              type="button"
              onClick={this.onClickSecond}
            >
              show/Hide Lastname
            </button>

            {showSecond ? (
              <div className="name-container">
                <p className="name">Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
