import { useState } from "react";
import { addToCart, getCart, getTotal } from "../../utils/cart";
import { BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Cart() {

    const [cart, setCart] = useState(getCart());
    const navigate = useNavigate();

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
                             onClick={()=>{addToCart(item,-1)
                                setCart(getCart())
                            }}>-</button>

                            <span className="mx-[10px]" >{item.qty}</span>

                            <button className="w-[30px] flex justify-center items-center rounded-lg bg-blue-600 text-white cursor-pointer hover: bg-blue-400"
                            onClick={()=>{addToCart(item,1)
                                setCart(getCart())
                            }}>+</button>
                          </div>

                          <div className="w-[190px] h-full bg-green-600 flex justify-end items-center pr-[10px]">

                               <span className="font-bold ">{(item.qty*item.price).toLocalString('en-us',{minimumFractionDigits:2,maximunFractionDigits:2})} </span>

                          </div>
                             
                            <button className="w-[30px] h-[30px] absolute right-[-40px] cursor-pointer bg-red-600 flex shadow rounded-full justify-center items-center text-white border-[2px] border-red-700 hover:bg-white hover:text-red-700"
                            onClick={()=>{addToCart(item,-item.qty)
                                setCart(getCart())
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

                <button className="absolute left-[10px] w-[150px] h-[50px] cursor-pointer shadow-2xl rounded-lg bg-blue-700 border-[2px] border-blue-700 text-white hover:bg-white text-blue-700 "
                onClick={() => {
                    navigate("/checkout",{state : {item :cart}})
                }} >
                    Check Out</button>

            </div>


        </div>
    );
}


