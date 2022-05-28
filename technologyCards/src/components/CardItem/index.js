import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`${className} card-container`}>
      <h1 className="heading">{title}</h1>
      <p className="desc">{description}</p>
      <img src={imgUrl} className="image-display" alt={title} />
    </li>
  )
}

export default CardItem
