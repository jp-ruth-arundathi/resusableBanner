import './index.css'

const BrowseHistoryItem = props => {
  const {historyList, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="list-container">
        <p className="browse-time">{timeAccessed}</p>
        <div className="logo-title-domain-container">
          <img src={logoUrl} alt="domain logo" className="logo-img" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
        <div className="delete-container">
          <button
            type="button"
            onClick={onDelete}
            className="delete-btn"
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default BrowseHistoryItem
