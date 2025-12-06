import { BiPlusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function ProductsAdminPage() {

    return (
        <div className="w-full h-full bg-blue-800 ">
            <h1 className="p-[20px]">Testing Product Admin Page</h1>
            <Link to={"/admin/newProduct"} className="fixed right-[60px] bottom-[60px] text-white bg-black  p-[20px] rounded-full shadow-2xl cursor-pointer">

                <BiPlusCircle className="text-4xl"/>

            </Link>
            
        </div>
    );
}