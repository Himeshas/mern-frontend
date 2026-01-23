import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../components/loader";
import ProductCard from "../../components/productCard";

export default function ProductsPage() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");

    useEffect(() => {

        if (loading) {

            if (query == "") {

            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products")
                .then((response)=>{

                    console.log(response.data);
                    setProducts(response.data);
                    setLoading(false);
                })
            }else{

                axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products/search/" + query)
                .then((response)=>{
                    setProducts(response.data);
                    setLoading(false);
                }
             )
           }
        }
    }, [loading]);

    return (
        <div className="w-full h-full bg-green-400 ">
            <div className="w-full flex justify-center items-center p-[20px] ">
                <input type="text" 
                placeholder="Search products....."
                className="w-[300px] h-[40px] rounded-l-xl p-[10px] outline-none text-lg"
                onChange={(e) => {
                    setQuery(e.target.value);
                    setLoading(true);
                }}
                />
            </div>
            {
                loading ? <Loader/> :
                <div className="w-full flex flex-wrap gap-[40px] justify-center items-center">
                   {
                    products.map(
                        (product) => {
                            return (
                                
                                <ProductCard key={product.productId}/>
                            )

                        }
                     )  
                   }

                </div>    
            }

        </div>
    )
}