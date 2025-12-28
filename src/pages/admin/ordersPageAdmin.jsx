import axios from "axios";
import { useEffect, useState } from "react"

export default function OrdersPageAdmin(){

    const [orders,setOrders] = useState([]);
    const [loading,setLoading] = useState(true);
    const [pageNum,setPageNum] = useState(1);
    const [totalPages,setTotalPages] = useState(0);
    const [limit,setLimit] = useState(10);
    const [popupVisible,setPopupVisible] = useState(false);
    const [clickedOrder,setClickedOrder] = useState(null)

    useEffect(()=>{
        if(loading){
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/orders/"+pageNum+"/"+limit,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            }).then((res)=>{
                setOrders(res.data.orders)
                setTotalPages(res.data.totalPages)
                setLoading(false)
            }).catch(
                (err)=>{
                    console.log(err)
                }
            )

        }

    },[loading,pageNum,limit])

    return(

        <div className="w-full h-full flex flex-col">
            <table className="w-full h-full border-[3px]">
                <thead>
                    <tr>
                        <th className="p-[10px]">Order ID</th>
                        <th className="p-[10px]">Emaill</th>
                        <th className="p-[10px]">name</th>
                        <th className="p-[10px]">address</th>
                        <th className="p-[10px]">phone</th>
                        <th className="p-[10px]">status</th>
                        <th className="p-[10px]">Date</th>
                        <th className="p-[10px] text-end">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order,index)=>{

                            return(
                            <tr key={order.orderID} className="border-b-[1px] hover:bg-blue-600 hover:text-white" onClick={()=>{
                                setClickedOrder(order)
                                setPopupVisible(true)
                            }}>
                                <td className="p-[10px]">{order.orderID}</td>
                                <td className="p-[10px]">{order.email}</td>
                                <td className="p-[10px]">{order.name}</td>
                                <td className="p-[10px]">{order.address}</td>
                                <td className="p-[10px]">{order.phone}</td>
                                <td className="p-[10px]">{order.status}</td>
                                <td className="p-[10px]">{order.date}</td>
                                <td className="p-[10px]">{order.total}</td>

                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {
                popupVisible && (
                    <div className="fixed top-0 left-0 w-full h-full bg-[#00000050] flex justify-center items-center">
                        <div className="w-[600px] h-[600px] bg-white relative">

                            {
                                clickedOrder.orderID
                            }

                            <button className="absolute w-[30px] h-[30px] bg-red-600 border-[2px] border-red-600 text-white top-[-30px] right-[-30px] rounded-full cursor-pointer "
                             onClick={()=>{setPopupVisible(false)}}>

                            </button>

                        </div>

                    </div>
                )
            }
            <Paginator currentPage={pageNum} totalPages={totalPages} setCurrentPage={setPageNum} limit={limit} setLimit={setLimit} setLoading={setLoading}/>
        </div>
    )
}