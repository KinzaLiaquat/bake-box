import Badge from './Badge'

function BrownieCard() {
  const price = 450

  return (
    <div className="card">
      <Badge />
      <img src="/images/brownie.jpg" alt="Chocolate Brownies" />
      <h3>Chocolate Brownies</h3>
      <p>Box of 6, fudgy and warm</p>
      <p className="price">Rs {price}</p>
    </div>
  )
}

export default BrownieCard