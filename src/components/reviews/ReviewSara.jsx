import Avatar from './Avatar'
import Rating from './Rating'

function ReviewSara() {
  return (
    <div className="review">
      <Avatar />
      <div>
        <strong>Sara A.</strong> <Rating />
        <p>Best brownies on campus. I ordered twice in one week!</p>
      </div>
    </div>
  )
}

export default ReviewSara