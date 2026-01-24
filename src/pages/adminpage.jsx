import {Link, Route , Routes, useNavigate } from "react-router-dom";
import { FaProductHunt } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import ProductsAdminPage from "./admin/productsadminpage";
import AddProductAdminPage from "./admin/addProductAdminPage";
import UpdateProductPage from "./admin/updateProduct";
import OrdersPageAdmin from "./admin/ordersPageAdmin";
import { useEffect, useState } from "react";
import Loader from "../components/loader";
import axios from "axios";

export default function AdminPage() {

  const navigate = useNavigate();
  const [adminValidated,setAdminValidated] = useState(false);
  useEffect(
    ()=>{
      const token = localStorage.getItem("token");
      if(token == null){
        navigate("/login");
      }else{
        axios.get(import.meta.env.VITE_API_URL + "/api/users",{headers:{Authorization:`Bearer ${token}`}}).then((res)=>{
          if(res.data.role == "admin"){
            setAdminValidated(true);
          }else{
            navigate("/");
          }
      }).catch((err)=>{
        navigate("/login");
      });
    }
    }

  ,[]) 

  return (
    <div className="w-full h-screen bg-red-600 flex">
        {adminValidated ?<>
        <div className="w-[300px] h-full flex flex-col">
          <span className="text-3xl font-bold my-5 pl-[20px]">Admin Panel</span>
          <Link className="flex flex-row h-[60px] w-full p-[20px] items-center gap-[10px]" to="/admin/products"><FaProductHunt />Products</Link>
          <Link className="flex flex-row h-[60px] w-full p-[20px] items-center gap-[10px]" to="/admin/orders"><CiShoppingCart />Orders</Link>
          <Link className="flex flex-row h-[60px] w-full p-[20px] items-center gap-[10px]" to="/admin/users"><FaRegUser />Users</Link>
          <Link className="flex flex-row h-[60px] w-full p-[20px] items-center gap-[10px]" to="/admin/settings"><IoIosSettings />Settings</Link>
        </div>

        <div className="w-[calc(100%-300px)] h-full">

          <Routes path="/*">
            <Route path="/" element={<h1>Dashboard</h1>} />
            <Route path="/products" element={<ProductsAdminPage/>} />
            <Route path="/newProduct" element={<AddProductAdminPage/>} />
            <Route path="/orders" element={<OrdersPageAdmin/>} />
            <Route path="/updateProduct" element={<UpdateProductPage />}/>
          </Routes>

        </div>
        </>:<Loader />}
    </div>
  )
}