// Write your code here
import './index.css'

const EventItem = props => {
  const {eventList, updateActiveId} = props
  const {id, imageUrl, name, location} = eventList
  const onClickChangeImg = () => {
    updateActiveId(id)
  }
  return (
    <li className="list-container">
      <button type="button" className="image-btn" onClick={onClickChangeImg}>
        <img src={imageUrl} alt="event" className="image-icon" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
