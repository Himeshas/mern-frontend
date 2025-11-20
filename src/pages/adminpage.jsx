import {Link, Route , Routes } from "react-router-dom";
import { FaProductHunt } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

export default function AdminPage() {
  return (
    <div className="w-full h-screen bg-red-600 flex">
        <div className="w-[300px] h-full flex flex-col">
          <span className="text-3xl font-bold my-5">Admin Panel</span>
          <Link className="flex flex-row h-[60px] w-full p-[20px] items-center gap-[10px]" to="/admin/products"><FaProductHunt />Products</Link>
          <Link className="flex flex-row h-[60px] w-full p-[20px] items-center gap-[10px]" to="/admin/orders"><CiShoppingCart />Orders</Link>
          <Link className="flex flex-row h-[60px] w-full p-[20px] items-center gap-[10px]" to="/admin/users"><FaRegUser />Users</Link>
          <Link className="flex flex-row h-[60px] w-full p-[20px] items-center gap-[10px]" to="/admin/settings"><IoIosSettings />Settings</Link>
        </div>

        <div className="w-[calc(100%-300px)] h-full">

          <Routes path="/*">
            <Route path="/" element={<h1>Dashboard</h1>} />
            <Route path="/products" element={<h1>Products</h1>} />
            <Route path="/orders" element={<h1>Orders</h1>} />
          </Routes>

        </div>
    </div>
  )
}