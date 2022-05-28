import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="desc">{description}</p>
        <button className="show-btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
