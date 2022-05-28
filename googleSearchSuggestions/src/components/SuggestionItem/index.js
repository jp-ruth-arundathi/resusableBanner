import './index.css'

const SuggestionItem = props => {
  const {eachItem, updateSearchList} = props
  const {suggestion} = eachItem

  const onClickArrow = () => {
    updateSearchList(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <button type="button" className="arrow-button" onClick={onClickArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
