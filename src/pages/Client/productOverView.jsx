import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Loader from "../../components/loader";
import ImageSlider from "../../components/imageSlider";

export default function ProductOverView() {
    const params = useParams();
    const [product,setProduct] = useState(null);
    const [status, setStatus] = useState("loading"); // "loading", "error", "success"

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
                status == "success" && <div className="w-full h-full flex flex-row"> 
                    
                    <div className="w-[49%] h-full bg-blue-500 flex flex-col justify-center items-center">
                        
                        <ImageSlider images={product.images} useState={useState} />

                    </div>

                    <div className="w-[49%] h-full bg-red-500">

                    </div>
                
                 </div>
            }

            {
                status == "error" && <div> product loading failed </div>
            }            
 

        </div>)
        
    
}