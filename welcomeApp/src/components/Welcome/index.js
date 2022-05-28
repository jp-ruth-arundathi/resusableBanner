import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  onClickSubscribeButton = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  buttonName = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.buttonName()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="message">Thank You! Happy Learning</p>
        <div>
          <button
            className="sub-button"
            type="button"
            onClick={this.onClickSubscribeButton}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
