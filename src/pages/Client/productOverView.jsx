import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../../components/loader";
import ImageSlider from "../../components/imageSlider";
import { addToCart, getCart } from "../../utils/cart";
import toast from "react-hot-toast";

export default function ProductOverView() {
    const params = useParams();
    const [product,setProduct] = useState(null);
    const [status, setStatus] = useState("loading"); // "loading", "error", "success"
    const navigate = useNavigate()

    useEffect(
        ()=>{

            if(status == "loading") {

                axios.get(import.meta.env.VITE_BACKEND_URL+'/api/products/${params.productId}').then(
                    (response)=>{
                        setProduct(response.data);
                        setStatus("success");
                    }).catch((error)=>{
                        console.log(error);
                        setStatus("error");
                    })
                
            }

        },[status]
    )

    return (<div className="w-full h-full flex justify-center items-center">
            
            {
                status == "loading" && <Loader/>
            }

            {
                status == "success" && <div className="w-full h-full flex flex-col md:flex-row"> 
                    
                    <div className="w-full md:w-[49%] h-full bg-blue-500 flex flex-col justify-center items-center">
                        
                        <ImageSlider images={product.images} useState={useState} />

                    </div>

                    <div className="w-full md:w-[49%] h-full flex flex-col items-center pt-[50px]">

                         <h1 className="text-2xl my-4 text-center font-bold" >{product.name}</h1> <span className="font-light">{product.altname.join("|")}</span>
                         <p className="text-lg mt-[20px]">{product.description}</p>

                         <div className="w-full flex flex-col items-center mt-[20px]">

                            {
                                product.lebelledPrice > product.price ?
                                    
                                   <div>
                                    <span className="text-2xl font-semibold text-red-500 line-through mr-[20px]">{product.lebelledPrice.toLocaleString('en-us',{minimumFractionDigits:2,maximumFractionDigits:2})}</span>
                                    <span className="text-3xl font-bold text-green-500">{product.price.toLocaleString('en-us',{minimumFractionDigits:2,maximumFractionDigits:2})}</span>
                                   </div>
                                   :
                                   <div>
                                    <span className="text-3xl font-bold text-green-500">{product.price.toLocaleString('en-us',{minimumFractionDigits:2,maximumFractionDigits:2})}</span>
                                   </div>
                            }

                         </div>

                         <div className="w-full flex flex-row justify-center items-center mt-[20px] gap-[20px] ">
                            <button onClick={()=>{
                                navigate("/checkout",{
                                    state:{items:
                                       [ {
                                            productID:product.productID,
                                            quentity:1,
                                            name :product.name,
                                            images:product.images,

                                            price:product.price
                                        }]
                                    }
                                })
                            }} className="w-[200px] h-[50px] cursor-pointer rounded-xl shadow-2xl text-white bg-blue-900 border-[3px] border-blue-900 hover:bg-white hover:text-blue-900">Buy Now</button>
                            <button className="w-[200px] h-[50px] cursor-pointer rounded-xl shadow-2xl text-white bg-blue-600 border-[3px] border-blue-600 hover:bg-white hover:text-blue-600" onClick={() => {addToCart(product, 1); toast.success("Product Adde Successfully"); console.log(getCart())} }>Add to Cart</button>
                         </div>
                    </div>
                
                 </div>
            }

            {
                status == "error" && <div> product loading failed </div>
            }            
 

        </div>)
        
    
}