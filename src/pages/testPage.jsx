import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import uploadFile from "../utils/mediaUpload";

export default function TestPage() {
  const projectURL = "https://tgmvbjtstcgwtdxujmlb.supabase.co";
  const anonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnbXZianRzdGNnd3RkeHVqbWxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NTMyNzgsImV4cCI6MjA4MTQyOTI3OH0.OmxJO2Lxsrl3cuy2gNfQjm6z3vjmhC9EHS8qkwF21No";
  const [file, setFile] = useState();

  const supabase = createClient(projectURL, anonkey);

  function handleUpload(){

    uploadFile(file).then((url)=>{
      console.log("File uploaded successfully. Public URL:", url);
      toast.success("File uploaded successfully");
    }).catch((error)=>{
      toast.error("Error uploading file");
      console.log(error);
    });


   /* console.log("Uploading file:", file);

    if(file == null){
      toast.error("No file selected for upload");
      return;
    }

    supabase.storage.from("Images").upload(file.name,file,{cacheControl:"3600",upsert:false}).then(()=>{
      toast.success("File uploaded successfully");
      const publicurl= supabase.storage.from("Images").getPublicUrl(file.name).data.publicUrl;
    }).catch((error)=>{
      console.error("Error uploading file:", error);
      toast.error("Error uploading file");
    });*/
  }

  return (
    <div className="w-full h-screen bg-amber-300 flex justify-center items-center">
      
      <input type="file" onChange={(e)=>{
        console.log(e)
        setFile(e.target.files[0]);


      }} />

      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Upload</button>

    </div>
  );
}