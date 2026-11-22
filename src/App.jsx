import ShopHeader from './components/layout/ShopHeader'
import Hero from './components/layout/Hero'
import ProductSection from './components/products/ProductSection'
import ReviewSection from './components/reviews/ReviewSection'
import HowToOrder from './components/order/HowToOrder'
import OrderInfo from './components/order/OrderInfo'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div>
      <ShopHeader />
      <Hero />
      <ProductSection />
      <ReviewSection />
      <OrderInfo />
      <Footer />
    </div>
  )
}

export default App