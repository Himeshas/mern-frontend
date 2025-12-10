import { useState } from "react"
import { Link } from "react-router-dom"

export default function AddProductAdminPage() {

    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [alternativeNames, setAlternativeNames] = useState("");
    const [labelledPrice, setLabelledPrice] = useState("");
    const [price, setPrice] = useState("");
    const [images, setImages] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState("");
    const [isAvailable, setIsAvailable] = useState(true);
    const [category, setCategory] = useState("Cream");


    return(
        <div className="w-full h-full justify-center items-center">

            <div className="w-[600px]  border-[3px] rounded-[15px] flex flex-wrap p-[40px] justify-between">

                <div className="w-[200px] flex flex-col gap-[5px]">

                    <label className="text-sm font-semibold" >Product Id</label>
                    <input type="text" onChange={(e)=>{setProductId(e.target.value)}} value={productId} className="w-full h-[40px] border-[1px] rounded-md" />

                </div>

                <div className="w-[300px] flex flex-col gap-[5px]">

                    <label className="text-sm font-semibold" >Product Name</label>
                    <input type="text" onChange={(e)=>{setProductName(e.target.value)}} value={productName} className="w-full h-[40px] border-[1px] rounded-md" />

                </div>

                <div className="w-[500px] flex flex-col gap-[5px]">

                    <label className="text-sm font-semibold" >Alternative Names</label>
                    <input type="text" onChange={(e)=>{setAlternativeNames(e.target.value)}} value={alternativeNames} className="w-full h-[40px] border-[1px] rounded-md" />

                </div>

                <div className="w-[200px] flex flex-col gap-[5px]">

                    <label className="text-sm font-semibold" >Labelled Price</label>
                    <input type="text" onChange={(e)=>{setLabelledPrice(e.target.value)}} value={labelledPrice} className="w-full h-[40px] border-[1px] rounded-md" />

                </div>

                <div className="w-[200px] flex flex-col gap-[5px]">

                    <label className="text-sm font-semibold" >Price</label>
                    <input type="text" onChange={(e)=>{setPrice(e.target.value)}} value={price} className="w-full h-[40px] border-[1px] rounded-md" />

                </div>

                <div className="w-[500px] flex flex-col gap-[5px]">

                    <label className="text-sm font-semibold" >Images</label> 
                    <input type="text"  onChange={(e)=>{setImages(e.target.value)}} value={images}className="w-full h-[40px] border-[1px] rounded-md" />

                </div>

                <div className="w-[500px] flex flex-col gap-[5px]">

                    <label className="text-sm font-semibold" >Description</label>
                    <textarea  onChange={(e)=>{setDescription(e.target.value)}} value={description}  className="w-full border-[1px] h-[100px] rounded-md"></textarea>

                </div>

                <div className="w-[200px] flex flex-col gap-[5px]">

                    <label className="text-sm font-semibold" >Stock</label>
                    <input type="text"  onChange={(e)=>{setStock(e.target.value)}} value={stock} className="w-full h-[40px] border-[1px] rounded-md" />
                </div>

                <div className="w-[200px] flex flex-col gap-[5px]">

                    <label className="text-sm font-semibold" >Is Awailable</label>
                    <select onChange={(e)=>{setIsAvailable(e.target.value)}} value={isAvailable} className="w-full border-[1px] h-[40px] rounded-md" >
                        <option value={true}>Available</option>
                        <option value={false}>Not Available</option>
                    </select>

                </div>

                <div className="w-[200px] flex flex-col gap-[5px]">

                    <label className="text-sm font-semibold" >Category</label>
                    <select onChange={(e)=>{setCategory(e.target.value)}} value={category} className="w-full border-[1px] h-[40px] rounded-md" >
                        <option value="Cream">Cream</option>
                        <option value="Face Wash">Face Wash</option>
                        <option value="Soap">Soap</option>
                        <option value="Perfume">Perfume</option>
                    </select>

                </div>

                
                <div className="w-full  bg-amber-300 flex flex-row justify-center py-[20px]  ">

                    <Link to={"/admin/products"} className="w-[200px] h-[50px] bg-white text-black border-[1px] rounded-md flex justify-center items-center">Cancel</Link>
                    <button className="w-[200px] h-[50px] bg-black text-white border-[1px] rounded-md ml-[20px]">Add Product</button>
                </div>



            </div>


         
        </div>
    )
    
}