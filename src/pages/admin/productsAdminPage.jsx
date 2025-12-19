import { meta } from "@eslint/js";
import axios from "axios";
import { useEffect, useState } from "react";
import { BiEdit, BiPlusCircle, BiTrash } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/loader";


const sampleProducts = [
    {
    productId: "COS-001",
    name: "Velvet Matte Lipstick",
    altNames: ["Lip Tint", "Long-stay Red", "Matte Stain"],
    labelledPrice: 899,
    Price: 599,
    images: ["/images/matte-lipstick-01.jpg", "/images/matte-lipstick-02.jpg"],
    description: "A long-lasting, highly pigmented matte lipstick that stays comfortable all day.",
    stock: 120,
    isAvailable: true,
    category: "cosmatics"
  },
  {
    productId: "COS-002",
    name: "Hydrating Hyaluronic Serum",
    altNames: ["Face Serum", "Glow Drops", "Skin Hydrator"],
    labelledPrice: 1500,
    Price: 1150,
    images: ["/images/hyaluronic-serum.jpg"],
    description: "Intense hydration serum with 2% pure hyaluronic acid for plump and radiant skin.",
    stock: 45,
    isAvailable: true,
    category: "cosmatics"
  },
  {
    productId: "COS-003",
    name: "Waterproof Liquid Eyeliner",
    altNames: ["Wing Liner", "Ink Pen", "Eye Definer"],
    labelledPrice: 450,
    Price: 399,
    images: ["/images/eyeliner-black.jpg"],
    description: "Ultra-fine tip for precision application. Smudge-proof and water-resistant for 24 hours.",
    stock: 200,
    isAvailable: true,
    category: "cosmatics"
  },
  {
    productId: "COS-004",
    name: "Silk Finish Foundation",
    altNames: ["Face Base", "Liquid Foundation", "Natural Glow"],
    labelledPrice: 1800,
    Price: 1499,
    images: ["/images/foundation-shade-04.jpg"],
    description: "A lightweight foundation that provides medium coverage with a natural, silky finish.",
    stock: 0,
    isAvailable: false,
    category: "cosmatics"
  },
  {
    productId: "COS-005",
    name: "Vitamin C Brightening Cleanser",
    altNames: ["Face Wash", "Daily Cleanser", "Brightening Wash"],
    labelledPrice: 650,
    Price: 499,
    images: ["/default-product.jpg"], // Using your default fallback
    description: "Gentle foaming cleanser enriched with Vitamin C to brighten skin tone while removing impurities.",
    stock: 85,
    isAvailable: true,
    category: "cosmatics"
  }
]


export default function ProductsAdminPage() {

    const [products, setProducts] = useState(sampleProducts);
    //const [a, setA] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    /*
   useEffect( ()=>{
       if(isLoading ){
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products").then(    

            (response)=>{setProducts(response.data)
                          setIsLoading(false)}
       );
      }
    }, [isLoading]
   
); //un comment this*/
    

    const navigate = useNavigate();

    return (
        <div className="w-full h-full bg-blue-800  ">

            {isLoading ? ( <Loader/> ) :
            
            (<table >
                <thead>
                    <tr>
                        <th className="p-[10px] border-2">Image</th>
                        <th className="p-[10px] border-2">Product ID</th>
                        <th className="p-[10px] border-2">Name</th>
                        <th className="p-[10px] border-2">Price</th>
                        <th className="p-[10px] border-2">Labeled Price</th>
                        <th className="p-[10px] border-2">Stock</th>
                        <th className="p-[10px] border-2">Status</th>
                        <th className="p-[10px] border-2">Actions</th> 
                    </tr>
                </thead>

                <tbody className="border-t-4">
                    
                        {sampleProducts.map( /* change as products.map */
                            
                            (product, index)=>{
                                return (
                                    <tr key={index}>
                                        <td className="p-[10px] border-2">
                                            <img src={product.images } alt={product.name} className="w-[50px] h-[50px] object-cover"/>
                                        </td>
                                        <td className="p-[10px] border-2">{product.productId}</td>
                                        <td className="p-[10px] border-2">{product.name}</td>
                                        <td className="p-[10px] border-2">{product.Price}</td>
                                        <td className="p-[10px] border-2">{product.labelledPrice}</td>
                                        <td className="p-[10px] border-2">{product.stock}</td>
                                        <td className="p-[10px] border-2">{product.isAvailable ? "Available" : "Not Available"}</td>
                                        <td className="p-[10px] border-2 flex flex-row justify-center items-center">
                                            <BiTrash className="text-3xl p-[7px] rounded-full text-white shadow-2xl shadow-red-500 cursor-pointer hover:text-red-600 bg-red-500 "
                                            onClick={
                                                ()=>{
                                                    const token = localStorage.getItem("token")

                                                    if(token == null){
                                                        navigate('/login');
                                                        return;
                                                    }

                                                    axios.delete(import.meta.env.VITE_BACKEND_URL + "/api/products/" + product.productId,
                                                    {headers: {Authorization: "Bearer " + token}})
                                                    .then((response)=>{
                                                        console.log("Product deleted successfully:", response.data);
                                                        const updatedProducts = products.filter((p) => p.productId !== product.productId);
                                                        setProducts(updatedProducts);
                                                       // setA(a+1);
                                                        setIsLoading(!isLoading);
                                                    })
                                                    .catch((error)=>{
                                                        console.error("Error deleting product:", error);
                                                    });
                                                }
                                            }/>
                                            
                                            <BiEdit className="text-3xl p-[7px] rounded-full text-white shadow-2xl shadow-blue-500 cursor-pointer hover:text-blue-600 bg-blue-500 ml-[10px]"
                                            onClick={()=>{
                                                navigate("/admin/updateProduct", {state: product})
                                            }}/>
                                        
                                        </td>
                                        
                                    </tr>
                                )
                            }
                        )}
                    
                </tbody>
            </table>)
            } 

            <Link to={"/admin/newProduct"} className="fixed right-[60px] bottom-[60px] text-white bg-black  p-[20px] rounded-full shadow-2xl cursor-pointer">

                <BiPlusCircle className="text-4xl"/>

            </Link>
            
        </div>
    );
}