import Avatar from './Avatar'
import Rating from './Rating'

function ReviewHira() {
  return (
    <div className="review">
      <Avatar />
      <div>
        <strong>Hira M.</strong> <Rating />
        <p>The nankhatai tasted just like my grandmother's.</p>
      </div>
    </div>
  )
}

export default ReviewHira