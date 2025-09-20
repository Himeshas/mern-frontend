
import './App.css'
import FeaturedProduct from './components/featuredProduct.jsx'
import ProductCard from './components/productCard.jsx'

function App() {
  
  return (
    <>
      <div className="w-full h-screen bg-amber-400 flex flex-col justify-center items-center">
        <div className='w-[75px] h-[45px] bg-red-900'></div> 
               <FeaturedProduct/>
        <ProductCard name="Mountain" price = "800.00" image = "https://picsum.photos/seed/picsum/200/300"/>
        <ProductCard name="Unknown" price = "550.00" image = "https://picsum.photos/id/20/200/300"/>
      </div>
      
    </>
  )
}

export default App
