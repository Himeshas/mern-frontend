import {Link, Route , Routes } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className="w-full h-screen bg-red-600 flex">
        <div className="w-[300px] h-full flex flex-col">
          <span className="text-3xl font-bold my-5">Admin Panel</span>

          <Link to="/admin/products">Products</Link>
          <Link to="/admin/orders">Orders</Link>
          <Link to="/admin/users">Users</Link>
          <Link to="/admin/settings">Settings</Link>
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