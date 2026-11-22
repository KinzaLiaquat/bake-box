import BrownieCard from './BrownieCard'
import NankhataiCard from './NankhataiCard'
import RollCard from './RollCard'

function ProductSection() {
  return (
    <section className="product-section" id="menu">
      <h2>Fresh from the oven</h2>
      <div className="cards">
        <BrownieCard />
        <NankhataiCard />
        <RollCard />
      </div>
    </section>
  )
}

export default ProductSection