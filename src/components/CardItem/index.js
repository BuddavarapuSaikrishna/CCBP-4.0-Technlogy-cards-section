// Write your code here.

import './index.css'

const CardItem = props => {
  const {listDetails} = props
  const {title, description, className, imgUrl} = listDetails

  return (
    <li className={`${className} card-items-container`}>
      <div>
        <h1>{title}</h1>
        <p className="description">{description}</p>
        <img className="logoImg" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
