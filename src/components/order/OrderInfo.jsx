function OrderInfo() {
  const quantity = 5
  const price = 450
  const delivery = 100

  return (
    <section className="order-info" id="order">
      <h2>Your order</h2>
      <p>{quantity} x Chocolate Brownies at Rs {price}</p>
      <p>Delivery to your department: Rs {delivery}</p>
      <p className="total">Total: Rs {quantity * price + delivery}</p>
    </section>
  )
}

export default OrderInfo