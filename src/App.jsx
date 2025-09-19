
import './App.css'
import ProductCard from './components/productCard.jsx'

function App() {
  
  return (
    <>
      <div>
        <ProductCard name="Mountain" price = "800.00" image = "https://picsum.photos/seed/picsum/200/300"/>
        <ProductCard name="Unknown" price = "550.00" image = "https://picsum.photos/id/20/200/300"/>
      </div>
      
    </>
  )
}

export default App
