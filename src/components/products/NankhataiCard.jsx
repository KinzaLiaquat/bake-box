function NankhataiCard() {
  const price = 350

  return (
    <div className="card">
      <span className="badge badge-new">New</span>
      <img src="/images/nankhatai.jpg" alt="Nankhatai Box" />
      <h3>Nankhatai Box</h3>
      <p>Box of 12, cardamom flavour</p>
      <p className="price">Rs {price}</p>
    </div>
  )
}

export default NankhataiCard