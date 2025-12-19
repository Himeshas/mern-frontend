import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom"

export default function UpdateProductPage() {

    const location = useLocation();

    const [productId, setProductId] = useState(location.state.productId);
    const [productName, setProductName] = useState(location.state.name);
    const [alternativeNames, setAlternativeNames] = useState(location.state.altNames.join(','));
    const [labelledPrice, setLabelledPrice] = useState(location.state.labelledPrice);
    const [price, setPrice] = useState(location.state.Price);
    const [images, setImages] = useState([]);
    const [description, setDescription] = useState(location.state.description);
    const [stock, setStock] = useState(location.state.stock);
    const [isAvailable, setIsAvailable] = useState(location.state.isAvailable);
    const [category, setCategory] = useState(location.state.category);
    const navigate = useNavigate();

    

    console.log(location);

     async function handlSubmit(){

        const promisesArray = []

        for(let i=0; i<images.length; i++){

            const promise = uploadFile(images[i]);
            promisesArray[i] = promise;

        }

        const responses = await Promise.all(promisesArray);
        
        const altNamesInArray = alternativeNames.split(',');
        const newProduct = {
            productId : productId,
            name : productName,
            altNames : altNamesInArray,
            labelledPrice : labelledPrice,
            price : price,
            images : responses,
            description : description,
            stock : stock,
            isAvailable : isAvailable,
            category : category
        };

        if(responses.length == 0){

            newProduct.images = location.state.images;
        }

        console.log("New Product Added: ", newProduct);

        const token = localStorage.getItem("token");

        if(token == null){

            window.location.href = '/login';
            return;
        }

        axios.put(import.meta.env.VITE_BACKEND_URL +"/api/products"+productId, newProduct , {headers: {Authorization: "Bearer " +token}})
        .then((response)=>{
            console.log("Product added successfully:", response.data);
            toast.success("Product added successfully");
            navigate('/admin/products');
        })
        .catch((error)=>{
            console.error("Error adding product:", error);
            toast.error("Failed to add product");
        });

    }


    return(
        <div className="w-full h-full justify-center items-center">

            <div className="w-[600px]  border-[3px] rounded-[15px] flex flex-wrap p-[40px] justify-between">

                <div className="w-[200px] flex flex-col gap-[5px]">

                    <label className="text-sm font-semibold" >Product Id</label>
                    <input disabled type="text" onChange={(e)=>{setProductId(e.target.value)}} value={productId} className="w-full h-[40px] border-[1px] rounded-md" />

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
                    <input type="number" onChange={(e)=>{setLabelledPrice(e.target.value)}} value={labelledPrice} className="w-full h-[40px] border-[1px] rounded-md" />

                </div>

                <div className="w-[200px] flex flex-col gap-[5px]">

                    <label className="text-sm font-semibold" >Price</label>
                    <input type="number" onChange={(e)=>{setPrice(e.target.value)}} value={price} className="w-full h-[40px] border-[1px] rounded-md" />

                </div>

                <div className="w-[500px] flex flex-col gap-[5px]">

                    <label className="text-sm font-semibold" >Images</label> 
                    <input type="file" multiple onChange={(e)=>{setImages(e.target.files)}} value={images} className="w-full h-[40px] border-[1px] rounded-md" />

                </div>

                <div className="w-[500px] flex flex-col gap-[5px]">

                    <label className="text-sm font-semibold" >Description</label>
                    <textarea  onChange={(e)=>{setDescription(e.target.value)}} value={description}  className="w-full border-[1px] h-[100px] rounded-md"></textarea>

                </div>

                <div className="w-[200px] flex flex-col gap-[5px]">

                    <label className="text-sm font-semibold" >Stock</label>
                    <input type="number"  onChange={(e)=>{setStock(e.target.value)}} value={stock} className="w-full h-[40px] border-[1px] rounded-md" />
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
                    <button onClick={handlSubmit} className="w-[200px] h-[50px] bg-black text-white border-[1px] rounded-md ml-[20px]">Update Product</button>
                </div>



            </div>


         
        </div>
    )
    
}