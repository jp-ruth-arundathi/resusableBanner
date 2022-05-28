import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isEmojiSelected: false,
  }

  onClickEmoji = () => this.setState({isEmojiSelected: true})

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="content-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id} className="list-item">
              <button
                className="emoji-btn"
                type="button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                />
                <br />
                <span className="emoji-name">{emojis.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedbackThanks = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-text">Thank You!</h1>
        <p className="desc">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiSelected} = this.state

    return (
      <div className="app-container">
        <div className="feedback-card">
          {isEmojiSelected
            ? this.renderFeedbackThanks()
            : this.renderFeedback()}
        </div>
      </div>
    )
  }
}

export default Feedback
