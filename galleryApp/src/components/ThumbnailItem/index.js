// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickImageThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const onClickImage = () => {
    onClickImageThumbnail(id)
  }

  const activeThumbnail = isActive ? 'thumb-image-display' : 'thumb-image'

  return (
    <li className="list-item">
      <button type="button" className="btn" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
