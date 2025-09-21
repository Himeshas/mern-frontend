
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FeaturedProduct from './components/featuredProduct.jsx'
import ProductCard from './components/productCard.jsx'
import HomePage from './pages/homePage.jsx'
import LoginPage from './pages/loginPage.jsx'
import RegisterPage from './pages/registerPage.jsx'

function App() {
  
  return (
    <BrowserRouter>
    <>
      <div className="w-full h-screen bg-amber-400 flex  justify-center items-center">
       { /* <div className='w-[75px] h-[45px] bg-red-900 fixed right-[100px] top-[100px] '></div> 
               <FeaturedProduct />
        <ProductCard name="Mountain" price = "800.00" image = "https://picsum.photos/seed/picsum/200/300"/>
        <ProductCard name="Unknown" price = "550.00" image = "https://picsum.photos/id/20/200/300"/>
       */}
        
        <div className='w-[calc(100vw - 35px)] h-[calc(100vh - 15px)] bg-red-700'>
          <Routes path = "/">
            <Route path='/' element={<HomePage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
           </Routes>
        </div>
      </div>
      
    </>
    </BrowserRouter>
  )
}

export default App
