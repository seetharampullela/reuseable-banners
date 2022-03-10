// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <div className="card-container">
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="submit"> Show More </button>
      </div>
    </li>
  )
}

export default BannerCardItem
