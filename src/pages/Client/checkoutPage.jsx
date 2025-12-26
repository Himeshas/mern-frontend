import { useState } from "react";

import { BiTrash } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export default function CheckoutPage() {

    const location = useLocation();
    const navigate = useNavigate();

    const [cart, setCart] = useState(location.state.item || []);

    if(location.state.item == null){

        toast.error("Please select items to checkout.")
        navigate("/products")
    }

     function getTotal(){
    
        
        let total = 0;
    
        cart.forEach((item) => {
    
            total += item.quantity * item.price
            
        });
    
        return total;
    
        }

        async function placeOrder(){
            const token =localStorage.getItem("token")

            if(token == null){
                
                toast.error("Please login to place a order.")
                navigate("/login")
                return;

            }

            const order = {
                address : "50/A",
                phone : "0718457345",
                items : []
            }

            cart.forEach((item) => {
                order.items.push({
                    productID : item.productID,
                    qty : item.quantity
                })
            })

            try{
                await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/orders",order,{
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                })
                toast.success("Order placed successfully")
                navigate("/product")

            }catch(err){

                console.log(err)
                toast.error("Failed to place order")
                return;

            }
        }

    return (
        <div className="w-full h-screen flex flex-col py-[40px] items-center">
            {
                cart.map((item => {
                    return (
                        <div key={item.productID} className="w-[800px] h-[100px] m-[10px] shadow-2xl flex flex-row items-center">
                          <img src={item.image}  className="w-[100px] h-[100px] object-cover"/> 
                          <div className="w-[320px] h-full flex flex-col justify-center pl-[10px] ">
                            <span className="font-bold ">{item.name} </span>
                            <span className="font-bold ">{item.price.toLocalString('en-us',{minimumFractionDigits:2,maximunFractionDigits:2})} </span>

                          </div>

                          <div className="w-[190px] h-full bg-blue-600 flex flex-row justify-center items-center ">
                            <button className="w-[30px] flex justify-center items-center rounded-lg bg-blue-600 text-white cursor-pointer hover: bg-blue-400"
                             onClick={()=>{
                                const newCart = [...cart];
                                newCart[index].quantity -= 1;
                                if(newCart[index].quantity <= 0){
                                    newCart.splice(index,1);
                                }
                                setCart(newCart)
                             }}>-</button>

                            <span className="mx-[10px]" >{item.qty}</span>

                            <button className="w-[30px] flex justify-center items-center rounded-lg bg-blue-600 text-white cursor-pointer hover: bg-blue-400"
                             onClick={()=>{
                                const newCart = [...cart];
                                newCart[index].quantity += 1;
                                setCart(newCart)
                             }}>+</button>
                          </div>

                          <div className="w-[190px] h-full bg-green-600 flex justify-end items-center pr-[10px]">

                               <span className="font-bold ">{(item.qty*item.price).toLocalString('en-us',{minimumFractionDigits:2,maximunFractionDigits:2})} </span>

                          </div>
                             
                            <button className="w-[30px] h-[30px] absolute right-[-40px] cursor-pointer bg-red-600 flex shadow rounded-full justify-center items-center text-white border-[2px] border-red-700 hover:bg-white hover:text-red-700"
                            onClick={()=>{
                                const newCart = [...cart];
                                newCart.splice(index, 1)
                                setCart(newCart)
                             }}>
                                <BiTrash className="text-xl"/>
                                </button>       
                      
                          </div>

                        
                    )
                }))
            }
            
            <div className="w-[800px] h-[100px] m-[10px] p-[10px] shadow-2xl flex flex-row items-center justify-end relative">

                <span className="font-bold text-2xl" >

                     Total : {getTotal().toLocalString('en-us',{minimumFractionDigits:2,maximunFractionDigits:2})}

                </span>

                <button onClick={placeOrder} className="absolute left-[10px] w-[150px] h-[50px] cursor-pointer shadow-2xl rounded-lg bg-blue-700 border-[2px] border-blue-700 text-white hover:bg-white text-blue-700 "
                 >
                    Place Order </button>

                
            </div>


        </div>
    );
}


