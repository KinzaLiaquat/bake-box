import Badge from './Badge'

function RollCard() {
  const price = 500

  return (
    <div className="card">
      <Badge />
      <img src="/images/rolls.jpg" alt="Cinnamon Rolls" />
      <h3>Cinnamon Rolls</h3>
      <p>Box of 4, with cream cheese</p>
      <p className="price">Rs {price}</p>
    </div>
  )
}

export default RollCard