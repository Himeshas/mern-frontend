import Header from "../../components/header";
import { Routes, Route } from "react-router-dom";

export default function ClientPage() {

    return (
    <div className="w-full h-screen max-h-screen ">
        <Header/>

        <div className="w-full h-[calc(100%-100px)] flex justify-center items-center">

            <Routes>

                <Route path="/" element={<div>Home</div>} />
                <Route path="/products" element={<div>Products</div>} />
                <Route path="/review" element={<div>Reviews</div>} />
                <Route path="/about-us" element={<div>About Us</div>} />
                <Route path="/contact-us" element={<div>Contact Us</div>} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>

        </div>
    </div>
)
    
}