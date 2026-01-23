
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import './index.css'
import './App.css'
import FeaturedProduct from './components/featuredProduct.jsx'
import ProductCard from './components/productCard.jsx'
import HomePage from './pages/homePage.jsx'
import LoginPage from './pages/loginPage.jsx'
import RegisterPage from './pages/registerPage.jsx'
import AdminPage from './pages/adminpage.jsx'
import TestPage from './pages/testPage.jsx'
import toast, { Toaster } from 'react-hot-toast'
import ClientPage from './pages/Client/clientPage.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ForgetPassword from './pages/Client/forgetPassword.jsx'

function App() {
  
  return (
    <BrowserRouter>
    
     <GoogleOAuthProvider clientId='614781344266-20f88m2hc70lnam5mn2tu43imfvlbioh.apps.googleusercontent.com'>
      <div className="w-full h-screen flex  justify-center items-center">
        <Toaster position='top-right'/>
          <Routes >
            
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/Test' element={<TestPage/>}/>   
            <Route path='/admin/*' element={<AdminPage/>}/>
            <Route path='/forget' element={<ForgetPassword/>}/>
            <Route path='/*' element={<ClientPage/>}/>
           </Routes>
        
      </div>
      
     </GoogleOAuthProvider>
    </BrowserRouter>
  )
}

export default App


/*
 {  <div className='w-[75px] h-[45px] bg-red-900 fixed right-[100px] top-[100px] '></div> 
               <FeaturedProduct />
        <ProductCard name="Mountain" price = "800.00" image = "https://picsum.photos/seed/picsum/200/300"/>
        <ProductCard name="Unknown" price = "550.00" image = "https://picsum.photos/id/20/200/300"/>
       }

       */