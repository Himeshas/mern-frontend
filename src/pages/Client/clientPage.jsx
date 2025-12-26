import Header from "../../components/header";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./productsPage";
import ProductOverView from "./productOverView";
import Cart from "./cart";
import CheckoutPage from "./checkoutPage";

export default function ClientPage() {

    return (
    <div className="w-full h-screen max-h-screen ">
        <Header/>

        <div className="w-full h-[calc(100%-100px)] flex justify-center gap-[19px]">

            <Routes>

                <Route path="/" element={<div>Home</div>} />
                <Route path="/products" element={<ProductsPage/>} />
                <Route path="/review" element={<div>Reviews</div>} />
                <Route path="/about-us" element={<div>About Us</div>} />
                <Route path="/contact-us" element={<div>Contact Us</div>} />
                <Route path="/overview/:productId" element={<ProductOverView />} />
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<CheckoutPage/>}/>
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>

        </div>
    </div>
)
    
}